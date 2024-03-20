import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validationSchema } from "../../constants/constants";
import cl from "./UserPaymentForm.module.scss";
import { ZodError } from "zod";

interface User {
  firstname: string;
  lastname: string;
  middlename?: string;
  phone: string;
}

export const UserPaymentForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    middlename: "",
    phone: "",
  });

  //правильно ли вообще таким обраазом типизировать ошибки?
  const [errors, setErrors] = useState<ZodError | unknown>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      validationSchema.parse(user);
      console.log("Данные прошли валидацию");
      navigate("/payment", { state: { user: user } });
    } catch (error: ZodError | unknown | object) {
      if (error instanceof ZodError) {
        setErrors(error.formErrors.fieldErrors);
        console.log(error.message);
      }
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
