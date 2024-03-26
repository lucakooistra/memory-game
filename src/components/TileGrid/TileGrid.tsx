import { useState, useEffect } from "react";
import { Tile } from "./Tile";
import { IconName, TileType } from "./types";
import { iconsPairs } from "../TileIcons/TileIcons";
import "./tilegrid.scss";

export function TileGrid() {

  console.log(iconsPairs)
  
  const [tiles, setTiles] = useState<TileType[]>(() =>InitiateTiles(iconsPairs));


  const checkPairsAndReset = (tiles: TileType[]) => {
    const selectedTiles = tiles.filter((tile) => tile.state === "selected");

    if (selectedTiles.length === 2) {
      const [firstTile, secondTile] = selectedTiles;
      setTimeout(() => {
        if (firstTile.iconName === secondTile.iconName) {
          setTiles(
            tiles.map((tile) => {
              if (tile.state === "selected") {
                return { ...tile, state: "paired" };
              }
              return tile;
            })
          );
        } else {
          setTiles(
            tiles.map((tile) => {
              if (tile.state === "selected") {
                return { ...tile, state: "hidden" };
              }
              return tile;
            })
          );
        }
      }, 650);
    }
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

      checkPairsAndReset(newVisibility);
    } else {
      return;
    }
  };

  // useEffect(() => {
  //   setTiles(InitiateTiles(iconPairs));
  // }, [iconPairs]);

  function InitiateTiles(iconPairs: IconName[]): TileType[] {
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
        const iconName = iconPairs[i]

        tileTypes.push({ state: "hidden", iconName });
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
              tile={tiles[id]} // Geef de zichtbaarheid door aan de tegel
            />
          ))}
        </ul>
      </main>
    </>
  );
}
