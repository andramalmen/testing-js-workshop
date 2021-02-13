import { Player } from '../types';
import utils from '../utils';

const rsp = (playerOne: Player, playerTwo: Player): Player | 'DRAW' => {
    const winner = utils.getResult(playerOne, playerTwo);

    if (!winner) {
        return 'DRAW';
    }

    return winner;
};

export default rsp;
