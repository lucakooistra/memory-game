type TileProps = {
  onClick: () => void;
  visible: boolean;
  icons: JSX.Element[];
};

export function Tile({ onClick, visible, icons }: TileProps) {
  return (
    <>
      <li
        onClick={onClick}
        className={`tilegrid__item ${
          visible ? "tilegrid__item-selected" : "tilegrid__item-hidden"
        }`}
      >
        {icons.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </li>
    </>
  );
}
