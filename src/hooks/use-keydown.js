import React from "react";

export default function useKeydown(keyCode, action) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === keyCode) {
        action();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
}
