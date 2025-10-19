import "./index.css";
import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";

export default function App() {
  useEffect(() => {
    document.title = "PMS | Dashboard";
  }, []);

  return <AppRouter />;
}
