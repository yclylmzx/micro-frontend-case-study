import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(<App />);
