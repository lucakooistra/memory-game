import { TileType } from "./types";

type TileProps = {
  onClick: () => void;
  visible: TileType;
  icons: JSX.Element[];
};

export function Tile({ onClick, visible, icons}: TileProps) {
  return (
    <>
      <li
        onClick={onClick}
        className={`tilegrid__item ${
          (() => {
            switch (visible?.state) {
              case 'selected':
                return "tilegrid__item-selected";
              case 'hidden':
                return "tilegrid__item-hidden";
              case 'paired':
                return "tilegrid__item-paired";
              default:
                return "";
            }
          })()
        }`}
      >
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </li>
    </>
  );
}
