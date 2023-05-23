"use client";

import { useRouter } from "next/navigation";

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
      <button onClick={(e) => handleBack(e)}>back button</button>
      {children}
    </section>
  );
}
