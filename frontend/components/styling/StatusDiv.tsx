interface StatusDivProps {
  color: "green" | "red";
  children: React.ReactNode;
}

export default function StatusDiv({ color, children }: StatusDivProps) {
  return (
    <div
      className={`${
        color == "green" ? "bg-green-300" : "bg-red-300"
      } py-1 px-2 rounded-md`}
    >
      {children}
    </div>
  );
}
