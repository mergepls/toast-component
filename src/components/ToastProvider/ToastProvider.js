import React from "react";
import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function useEscapeKey(action) {
  useKeydown("Escape", action);
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  function addToast({ message, variant }) {
    setToasts([
      ...toasts,
      {
        message,
        variant,
      },
    ]);
  }

  function removeToast(index) {
    const newToast = [...toasts];
    newToast.splice(index, 1);
    setToasts(newToast);
  }

  const exposedValues = {
    toasts,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={exposedValues}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
