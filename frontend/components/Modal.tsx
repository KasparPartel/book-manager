import React from "react";

export default function Modal({
  children,
  setModalOpen,
}: {
  children: React.ReactNode;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <dialog
      className="absolute top-0 flex flex-col gap-2 flex-wrap content-center justify-center w-full h-screen opacity-80"
      open
    >
      <button onClick={(e) => handleClose(e)}>Close</button>
      {children}
    </dialog>
  );
}

export function ModalForm({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => onSubmit(e)}>
      {children}
    </form>
  );
}

export function ModalTextInput({
  name,
  placeholder,
  required,
}: {
  name?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      type="text"
      name={name ?? ""}
      placeholder={placeholder ?? ""}
      className="rounded p-1 border-2 border-neutral-950"
      required={required}
    />
  );
}

export function ModalFormButton({ value }: { value: string }) {
  return (
    <button className="rounded-lg p-2 bg-black text-white">{value}</button>
  );
}
