import { IconName } from "../../TileGrid/types";
export function iconArray(icons: IconName[]) {
  const iconsEight = icons.slice(0, 8);
  const iconPairsSixteen = iconsEight.concat(iconsEight);
  const iconPairs = iconPairsSixteen.sort(() => Math.random() - 0.5);

  return iconPairs;
}
