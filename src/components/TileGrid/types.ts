export type TileState = "hidden" | "selected" | "paired"

export interface TileProp {
    id: number;
    visible: boolean;
    state: TileState;
}