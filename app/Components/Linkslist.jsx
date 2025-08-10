"use client"
import LinkButton from "./LinkButton";

export default function LinksList() {
  const links = [
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Shop", href: "#" },
  ];
  return (
    <div className="flex flex-col gap-4 items-center px-6 py-10 font-bold text-xl">
      {links.map((link, i) => (
        <LinkButton key={i} {...link} />
      ))}
    </div>
  );
}