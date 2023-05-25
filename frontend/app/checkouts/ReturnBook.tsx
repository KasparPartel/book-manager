"use client";

import { useRouter } from "next/navigation";

const deleteCheckout = async (checkoutId: string) => {
  const url =
    process.env.NEXT_PUBLIC_API_ROOT +
    "checkout/checkout" +
    `?checkOutId=${checkoutId}`;
  const res = await fetch(url, {
    method: "DELETE",
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Something went wrong.");
};

interface ReturnBookProps {
  checkoutId: string | undefined;
}

export default function ReturnBook({ checkoutId }: ReturnBookProps) {
  const router = useRouter();

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      await deleteCheckout(checkoutId ?? "");
      router.refresh();
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className="border-2 border-blue-400 py-2 px-4 rounded-lg hover:bg-blue-400 transition-all duration:150 hover:text-white hover:font-bold"
    >
      Return book
    </button>
  );
}
