import "./app.scss";
import "../components/TileGrid/TileGrid";
import { TileGrid } from "../components/TileGrid/TileGrid";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export function App() {
  return (
    <>
      <div className="body-inner">
        <Header />
        <TileGrid />
        <Footer />
      </div>
    </>
  );
}
