import { useState, useEffect } from "react";
import { Tile } from "./Tile";
import { TileState } from "./types";
import { Chance } from "chance";
import { TileIcons } from "../TileIcons/TileIcons";
import "./tilegrid.scss";

export function TileGrid() {
  const [tileVisibility, setTileVisibility] = useState<TileState[]>(
    Array(16).fill("hidden")
  ); // Array van 16 tegels, allemaal onzichtbaar in het begin
  const [iconPairs, setIconPairs] = useState<JSX.Element[]>([]);

  const handleTileClick = (id: number) => {
    const iconName = iconPairs[id].props.icon.iconName;
    console.log(iconName)
    const newVisibility = [...tileVisibility]; // Maak een kopie van de zichtbaarheidsarray

    // Set de zichtbaarheid van de huidige tegel naar "selected"
    newVisibility[id] = "selected";
    setTileVisibility(newVisibility); // Werk de staat bij

    setTimeout(() => {
      // Controleren of er minstens één tegel "selected" is
      const selectedCount = newVisibility.filter(
        (type) => type === "selected"
      ).length;
      const isSelected = selectedCount >= 2;

      // Als er minstens één tegel "selected" is
      if (isSelected) {
        // Alle tegels met type "selected" terugzetten naar "hidden"
        const resetVisibility = newVisibility.map((type) =>
          type === "selected" ? "hidden" : type
        );
        setTileVisibility(resetVisibility);
      }
    }, 1000); // Delay van 1 seconde
  };

  useEffect(() => {
    const icons = TileIcons();
    const iconsSixteen = icons.slice(0, 8);
    const iconPairs = iconsSixteen.concat(iconsSixteen); // Verdubbel de array met iconen
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
