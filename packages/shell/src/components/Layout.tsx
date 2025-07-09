import type { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

export default function Layout({ children }: Layout) {
  return (
    <section className="flex md:gap-3 xl:gap-8 mx-8 xl:mx-12 mt-5 content-area">
      {children}
    </section>
  );
}
