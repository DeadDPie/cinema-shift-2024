import React, { FC } from "react";
import clsx from "clsx";

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
    className={clsx(cl.Modal, {
      [cl.active]: visible,
    })}
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
