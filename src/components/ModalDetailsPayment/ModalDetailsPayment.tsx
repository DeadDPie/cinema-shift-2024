import React, { FC } from "react";
import cl from "./ModalDetailsPayment.module.scss";

interface ModalDetailsPaymentProps {
  children: React.ReactNode;
  visible: boolean;
  setVisisble: (visible: boolean) => void;
}

export const ModalDetailsPayment: FC<ModalDetailsPaymentProps> = ({
  children,
  visible,
  setVisisble,
}) => (
  <div
    className={`${cl.Modal} ${visible && cl.active}`}
    onClick={() => setVisisble(false)}
  >
    <div
      className={cl.ModalContent}
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </div>
  </div>
);
