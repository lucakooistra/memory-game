import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TileType } from "./types";
import { iconsType } from "./types";

type TileProps = {
  onClick: () => void;
  setCounter: () => void;
  tile: TileType;
};

export function Tile({ onClick, setCounter, tile }: TileProps) {
  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    onClick();
    setCounter();
  }
  return (
    <>
      <li
        onClick={handleClick}
        className={`tilegrid__item ${(() => {
          switch (tile?.state) {
            case "selected":
              return "tilegrid__item-selected";
            case "hidden":
              return "tilegrid__item-hidden";
            case "paired":
              return "tilegrid__item-paired";
            default:
              return "";
          }
        })()}`}
      >
        <FontAwesomeIcon icon={iconsType[tile.iconName]} />
      </li>
    </>
  );
}
