export type TileState = "hidden" | "selected" | "paired"

export interface TileType {
    id: number;
    visible: boolean;
    state: TileState;
    iconName: string;
}