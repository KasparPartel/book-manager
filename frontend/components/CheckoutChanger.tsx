"use client";

import { useRouter } from "next/navigation";
import { Book } from "@/models/book";
import moment from "moment";
import Checkout, { isCheckoutValid } from "@/models/checkout";
import React, { useState } from "react";
import Modal, {
  ModalButton,
  ModalForm,
  ModalTextInput,
} from "@/components/Modal";

const postCheckout = async (checkout: Checkout) => {
  const url = process.env.NEXT_PUBLIC_API_ROOT + "checkout/checkout";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(checkout),
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Something went wrong.");
};

const dateNow = moment().format("yyyy-MM-DD");
const dateDue = moment().add(1, "month").format("yyyy-MM-DD");

interface CheckoutChangerProps {
  book: Book;
}

export default function CheckoutChanger({ book }: CheckoutChangerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkout, setCheckout] = useState<Checkout>({
    borrowerFirstName: "",
    borrowerLastName: "",
    borrowedBook: book,
    checkedOutDate: dateNow,
    dueDate: dateDue,
    returnedDate: null,
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      isCheckoutValid(checkout) && (await postCheckout(checkout));
      router.refresh();
      switchModalOpen();
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  const switchModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (inputName: string) => {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setCheckout((prevState) => {
        if (inputName == "firstName") {
          return {
            ...prevState,
            borrowerFirstName: e.target.value,
          };
        }
        if (inputName == "lastName") {
          return {
            ...prevState,
            borrowerLastName: e.target.value,
          };
        }
        return { ...prevState };
      });
    };
  };

  return (
    <>
      <button
        className="p-2 bg-blue-500 text-white font-bold rounded-lg grow-0 hover:bg-blue-700 disabled:bg-blue-300"
        onClick={switchModalOpen}
        disabled={book.status != "AVAILABLE" && true}
      >
        {book.status == "AVAILABLE" ? "Checkout book" : "Not available"}
      </button>

      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <ModalForm onSubmit={handleSubmit}>
            <ModalTextInput
              name="firstName"
              placeholder="First name"
              onChange={handleChange("firstName")}
              required={true}
            />
            <ModalTextInput
              name="lastName"
              placeholder="Last name"
              onChange={handleChange("lastName")}
              required={true}
            />
            <ModalButton value="CheckoutShort book" />
          </ModalForm>
        </Modal>
      )}
    </>
  );
}
