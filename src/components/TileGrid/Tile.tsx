import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, TileType } from "./types";
import { iconsType } from "./types";

type TileProps = {
  onClick: () => void;
  tile: TileType;
};

export function Tile({ onClick, tile }: TileProps) {
  return (
    <>
      <li
        onClick={onClick}
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
