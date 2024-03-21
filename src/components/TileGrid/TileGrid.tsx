import { useState, useEffect } from "react";
import { Tile } from "./Tile";
import { Chance } from "chance";
import { TileIcons } from "../TileIcons/TileIcons";
import "./tilegrid.scss";

export function TileGrid() {
  const [tileVisibility, setTileVisibility] = useState<boolean[]>(
    Array(16).fill(false)
  ); // Array van 16 tegels, allemaal onzichtbaar in het begin
  const [iconPairs, setIconPairs] = useState<JSX.Element[]>([]);

  const handleTileClick = (id: number) => {
    const newVisibility = [...tileVisibility]; // Maak een kopie van de zichtbaarheidsarray
    newVisibility[id] = !newVisibility[id]; // Wijzig de zichtbaarheid van de tegel
    setTileVisibility(newVisibility); // Werk de staat bij
  };

  useEffect(() => {
    const icons = TileIcons();
    const iconPairs = icons.concat(icons); // Verdubbel de array met iconen
    const mixedIconPairs = Chance().shuffle(iconPairs); // Randomiseer de iconen

    setIconPairs(mixedIconPairs);
  }, []);

  return (
    <>
      <main>
        <ul className="tilegrid tilegrid-4x4">
          {[...Array(16)].map((_, id) => (
            <Tile
              key={id}
              onClick={() => handleTileClick(id)} // Gebruik de nieuwe handleClick-functie
              visible={tileVisibility[id]} // Geef de zichtbaarheid door aan de tegel
              icons={[iconPairs[id]]} // Geef elk icoonpaar door aan een tegel
            />
          ))}
        </ul>
      </main>
    </>
  );
}
