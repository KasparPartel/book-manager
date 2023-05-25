"use client";

import { useRouter } from "next/navigation";
import { IconContext } from "react-icons/lib";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <section>
      <button onClick={(e) => handleBack(e)}>
        <IconContext.Provider value={{ size: "2em" }}>
          <BsArrowLeftCircle />
        </IconContext.Provider>
      </button>
      {children}
    </section>
  );
}
