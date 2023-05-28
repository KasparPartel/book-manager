import React, { SetStateAction, useEffect, useState } from "react";

interface AlertProps {
  setShowAlert: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export default function Alert({ setShowAlert, children }: AlertProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      setShowAlert(false);
      clearTimeout(timeId);
    };
  }, [setShowAlert]);

  if (!show) return null;
  return (
    <div className="absolute top-5 left-1/2 bg-red-300 py-6 px-10">
      {children}
    </div>
  );
}
