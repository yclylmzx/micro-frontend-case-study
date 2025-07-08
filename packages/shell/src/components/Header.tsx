import logo from "../../public/logo.webp";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-32">
      <img src={logo} alt="logo" className="rounded-[50%]" />
      <h1 className="text-xl text-[#000] font-semibold">
        Micro Frontend | Yücel YILMAZ
      </h1>
    </header>
  );
}
