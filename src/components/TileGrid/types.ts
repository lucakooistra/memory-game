import {
  faAnchor,
  faGhost,
  faUmbrella,
  faBinoculars,
  faGolfBall,
  faBowlingBall,
  faBaseballBall,
  faFootballBall,
  faBasketballBall,
  faVolleyballBall,
  faBell,
  faBrain,
  faBurn,
  faCat,
  faCircle,
  faCog,
  faCogs,
  faDog,
  faDragon,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";

export type TileState = "hidden" | "selected" | "paired";

export interface TileType {
  state: TileState;
  iconName: IconName;
}

export const iconsType = {
  anchor: faAnchor,
  ghost: faGhost,
  umbrella: faUmbrella,
  binoculars: faBinoculars,
  golfball: faGolfBall,
  bowlingball: faBowlingBall,
  baseBall: faBaseballBall,
  football: faFootballBall,
  basketball: faBasketballBall,
  volleyball: faVolleyballBall,
  bell: faBell,
  brain: faBrain,
  burn: faBurn,
  cat: faCat,
  circle: faCircle,
  cog: faCog,
  cogs: faCogs,
  dog: faDog,
  dragon: faDragon,
  egg: faEgg,
};

export type IconName = keyof typeof iconsType;

