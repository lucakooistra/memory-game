import "./tilegrid.scss";

export function TileGrid() {
  return (
    <>
      <main>
        <ul className="tilegrid tilegrid-4x4">
            {[...Array(16)].map((_, i) => <li className="tilegrid__item tilegrid__item-hidden" key={i}>Test</li>)}
        </ul>
      </main>
    </>
  );
}
