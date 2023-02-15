import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      ariaLive="assertive"
      ariaLabel="Notification"
    >
      {toasts.map(({ message, variant }, index) => (
        <li className={styles.toastWrapper} key={index}>
          <Toast variant={variant} onRemoveToast={() => removeToast(index)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
