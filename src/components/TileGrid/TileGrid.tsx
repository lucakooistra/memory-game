import { useState, useEffect } from "react";
import { Tile } from "./Tile";
import { TileState, TileType } from "./types";
import { Chance } from "chance";
import { TileIcons } from "../TileIcons/TileIcons";
import "./tilegrid.scss";

export function TileGrid() {
  const [tileVisibility, setTileVisibility] = useState<TileState[]>(
    Array(16).fill("hidden")
  ); // Array van 16 tegels, allemaal onzichtbaar in het begin

  const [iconPairs, setIconPairs] = useState<JSX.Element[]>([]);
  const [tiles, setTiles] = useState<TileType[]>(InitiateTiles(iconPairs));

  console.log(tiles);

  const handleTileClick = (id: number) => {
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

  useEffect(() => {
    // Roep InitiateTiles opnieuw aan wanneer iconPairs verandert
    setTiles(InitiateTiles(iconPairs));
  }, [iconPairs]);

  function InitiateTiles(iconPairs: JSX.Element[]): TileType[] {
    const tileTypes: TileType[] = [];

    if (!iconPairs || iconPairs.length === 0) {
      // Als iconPairs niet gedefinieerd is of leeg is, retourneer een lege array
      return tileTypes;
    }

    const repeatCount = 16;

    for (let i = 0; i < repeatCount; i++) {
      // Controleer of het huidige element in de iconPairs array gedefinieerd is
      if (iconPairs[i]) {
        // Haal de iconName prop uit het i-de element in de iconPairs array
        const iconName = iconPairs[i].props.icon.iconName;

        tileTypes.push({ state: "hidden", iconName });
      } else {
        // Als het huidige element niet gedefinieerd is, voeg een standaard object toe aan tileTypes
        tileTypes.push({ state: "hidden", iconName: "defaultIcon" });
      }
    }
    return tileTypes;
  }

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
