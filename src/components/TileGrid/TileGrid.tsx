import { useState, useEffect } from "react";
import { Tile } from "./Tile";
import { TileType } from "./types";
import { Chance } from "chance";
import { TileIcons } from "../TileIcons/TileIcons";
import "./tilegrid.scss";

export function TileGrid() {
  const [iconPairs, setIconPairs] = useState<JSX.Element[]>([]);
  const [tiles, setTiles] = useState<TileType[]>(InitiateTiles(iconPairs));

  const checkPairsAndReset = (tiles: TileType[]): TileType[] => {
    const selectedTiles = tiles.filter((tile) => tile.state === "selected");

    if (selectedTiles.length === 2) {
      const [firstTile, secondTile] = selectedTiles;
      if (firstTile.iconName === secondTile.iconName) {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (tile.state === "selected") {
                return { ...tile, state: "paired" };
              }
              return tile;
            })
          );
        }, 650);
      } else {
        setTimeout(() => {
          setTiles(
            tiles.map((tile) => {
              if (tile.state === "selected") {
                return { ...tile, state: "hidden" };
              }
              return tile;
            })
          );
        }, 650);
      }
    }
    return tiles;
  };

  const handleTileClick = (id: number) => {
    const newVisibility = [...tiles]; // Maak een kopie van de tiles array

    const checkSelectedTiles = newVisibility.filter(
      (tile) => tile.state === "selected"
    );

    if (checkSelectedTiles.length < 2) {
      // Set de zichtbaarheid van de huidige tegel naar "selected"
      newVisibility[id].state = "selected";
      setTiles(newVisibility); // Werk de staat bij

      const updateTiles = checkPairsAndReset(newVisibility);
      setTiles(updateTiles);
    } else {
      return;
    }
  };

  useEffect(() => {
    const icons = TileIcons();
    const iconsSixteen = icons.slice(0, 8);
    const iconPairs = iconsSixteen.concat(iconsSixteen);
    const mixedIconPairs = Chance().shuffle(iconPairs);

    setIconPairs(mixedIconPairs);
  }, []);

  useEffect(() => {
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
              visible={tiles[id]} // Geef de zichtbaarheid door aan de tegel
              icons={[iconPairs[id]]} // Geef elk icoonpaar door aan een tegel
            />
          ))}
        </ul>
      </main>
    </>
  );
}
