interface PageHeadingProps {
  text: string;
}

export default function PageHeading({ text }: PageHeadingProps) {
  return <h1 className="text-5xl font-bold font-heading">{text}</h1>;
}
