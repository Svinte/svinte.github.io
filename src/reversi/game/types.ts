export enum Cell {
    Empty = 0,
    Black = 1,
    White = -1,
}

export type Player = Cell.Black | Cell.White
export type Board = Cell[][]
export interface Move {
    x: number
    y: number
}
