import Checkout from "@/models/checkout";
import moment from "moment";
import StatusDiv from "@/components/styling/StatusDiv";
import Link from "next/link";
import ReturnBook from "@/app/checkouts/ReturnBook";

interface CheckoutProps {
  checkout: Checkout;
}

export default function CheckoutShort({ checkout }: CheckoutProps) {
  const dueDate = moment(checkout.dueDate);
  const dateNow = moment();

  const isOverdue = () => {
    return dateNow > dueDate;
  };

  return (
    <article className="flex flex-wrap justify-between gap-3 items-center p-3 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <section className="flex flex-col gap-1">
        {isOverdue() && (
          <StatusDiv color="red">
            <p className="text-sm">overdue</p>
          </StatusDiv>
        )}
        <h1 className="text-lg font-heading">
          <Link href={`/books/${checkout.borrowedBook.id}`}>
            {checkout.borrowedBook.title}
          </Link>
        </h1>
        <p>
          Checked out by{" "}
          <span className="font-bold">
            {" "}
            {checkout.borrowerFirstName} {checkout.borrowerLastName}
          </span>
        </p>
        <p>Due date: {checkout.dueDate} </p>
      </section>
      <ReturnBook checkoutId={checkout.id} />
    </article>
  );
}
