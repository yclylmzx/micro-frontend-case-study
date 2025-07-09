import type { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

export default function Layout({ children }: Layout) {
  return <section className="flex gap-8 mx-16 mt-5">{children}</section>;
}
