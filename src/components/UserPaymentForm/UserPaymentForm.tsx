import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import cl from "./UserPaymentForm.module.scss";

const nameSchema = z
  .string()
  .min(1, "Минимальная длина - 1 символ")
  .max(60, "Максимальная длина - 60 символов")
  .regex(/^(?!.*--)[\p{L}\s-]+$/u, "Недопустимые символы");
const phoneSchema = z
  .string()
  .regex(/^[0-9]{10,12}$/, "Неправильный формат телефона");

const validationSchema = z.object({
  firstname: nameSchema,
  lastname: nameSchema,
  phone: phoneSchema,
});

interface User {
  firstname: string;
  lastname: string;
  middlename?: string;
  phone: string;
}

export const UserPaymentForm: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    middlename: "",
    phone: "",
  });

  //правильно ли вообще таким обраазом типизировать ошибки?
  const [errors, setErrors] = useState<any | unknown>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      validationSchema.parse(user);
      console.log("Данные прошли валидацию");
      navigate("/payment", { state: { user: user } });
    } catch (error: any) {
      setErrors(error.formErrors.fieldErrors);
    }
  };

  return (
    <div className={cl.form}>
      <div className={cl.h}>Enter your details</div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Name*</p>
          <input
            required
            type="text"
            name="firstname"
            value={user.firstname || ""}
            onChange={handleChange}
          />
          {errors.firstname && <span>{errors.firstname}</span>}
        </div>
        <div>
          <p>Surname*</p>
          <input
            required
            type="text"
            name="lastname"
            value={user.lastname || ""}
            onChange={handleChange}
          />
          {errors.lastname && <span>{errors.lastname}</span>}
        </div>
        <div>
          <p>Partonymic</p>
          <input
            type="text"
            name="middlename"
            value={user.middlename || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Phone number*</p>
          <input
            required
            type="text"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div className={cl.btn}>
          <button type="submit" onClick={() => handleSubmit}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
