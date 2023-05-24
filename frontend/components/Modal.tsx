import React from "react";

interface ModalProps {
  children: React.ReactNode;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, setModalOpen }: ModalProps) {
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

interface ModalFormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ModalForm({ children, onSubmit }: ModalFormProps) {
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => onSubmit(e)}>
      {children}
    </form>
  );
}

interface ModalTextInputProps {
  name?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function ModalTextInput({
  name,
  placeholder,
  onChange,
  required,
}: ModalTextInputProps) {
  return (
    <input
      type="text"
      name={name ?? ""}
      placeholder={placeholder ?? ""}
      className="rounded p-1 border-2 border-neutral-950"
      onChange={(e) => onChange(e)}
      required={required}
    />
  );
}

interface ModalButton {
  value: string;
}

export function ModalButton({ value }: ModalButton) {
  return (
    <button className="rounded-lg p-2 bg-black text-white">{value}</button>
  );
}
