export enum Shape {
    ROCK = 'rock',
    SCISSORS = 'scissors',
    PAPER = 'paper',
}

export interface Player {
    name: string;
    shape: Shape;
}
