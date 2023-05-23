"use client";

import { useRouter } from "next/navigation";
import { Book } from "@/models/book";
import moment from "moment";
import Checkout from "@/models/checkout";
import React, { useState } from "react";
import Modal, {
  ModalForm,
  ModalFormButton,
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

const isCheckoutValid = (checkout: Checkout) => {
  // const errors: Error[] = [];

  if (checkout.borrowerFirstName == "") {
    // errors.push(new Error("First name is empty or not valid!"));
    throw new Error("First name is empty or not valid!");
  }
  if (checkout.borrowerLastName == "") {
    // errors.push(new Error("Last name is empty or not valid!"));
    throw new Error("Last name is empty or not valid!");
  }

  // if (errors.length != 0) throw errors;
  return true;
};

const dateNow = moment().format("yyyy-MM-DD");
const dateDue = moment().add(1, "month").format("yyyy-MM-DD");

export default function CheckoutChanger({ book }: { book: Book }) {
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

  // const checkout: Checkout = {
  //   borrowerFirstName: firstNameRef.current?.value ?? "",
  //   borrowerLastName: lastNameRef.current?.value ?? "",
  //   borrowedBook: book,
  //   checkedOutDate: dateNow,
  //   dueDate: dateDue,
  //   returnedDate: null,
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (isCheckoutValid(checkout)) await postCheckout(checkout);
      router.refresh();
      switchModal();
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  const switchModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (inputName: string) => {};

  return book.status == "AVAILABLE" ? (
    modalOpen ? (
      <Modal setModalOpen={setModalOpen}>
        <ModalForm onSubmit={handleSubmit}>
          <ModalTextInput
            name="firstName"
            placeholder="First name"
            required={true}
          />
          <ModalTextInput
            name="lastName"
            placeholder="Last name"
            required={true}
          />
          <ModalFormButton value="Checkout book" />
        </ModalForm>
      </Modal>
    ) : (
      <p onClick={switchModal}>Checkout book</p>
    )
  ) : (
    <p>Book not available</p>
  );
}
