import { Player } from '../types';

export const getResult = (p1: Player, p2: Player) => {
    if (p1.shape === p2.shape) {
        return null;
    }
    let winner = p1;

    switch (p1.shape) {
        case 'rock':
            if (p2.shape === 'paper') {
                winner = p2;
            }
            break;
        case 'paper':
            if (p2.shape === 'scissors') {
                winner = p2;
            }
            break;
        case 'scissors':
            if (p2.shape === 'rock') {
                winner = p2;
            }
            break;
    }

    return winner;
};

const utils = { getResult };

export default utils;
