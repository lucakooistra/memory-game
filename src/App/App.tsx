import "./app.scss";
import "../components/TileGrid/TileGrid";
import { TileGrid } from "../components/TileGrid/TileGrid";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState } from "react";

export function App() {
  const [counter, setCounter] = useState<number>(0)
  return (
    <>
      <div className="body-inner">
        <Header />
        <TileGrid 
        setCounter={() => setCounter(counter + 1)}
        />
        <Footer 
        counter={counter}
        />
      </div>
    </>
  );
}
