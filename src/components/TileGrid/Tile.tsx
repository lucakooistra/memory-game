type TileProps = {
  onClick: () => void;
  visible: boolean;
}

export function Tile({
  onClick,
  visible
}:TileProps) {
  return (
    <>
        <li onClick={onClick} className={`tilegrid__item ${visible ? 'tilegrid__item-selected' : 'tilegrid__item-hidden'}`}></li>
    </>
  );
}
