
export type TileState = "hidden" | "selected" | "paired"

export interface TileType {
    state: TileState;
    iconName: string;
}