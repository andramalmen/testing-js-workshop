import assert from 'assert';

import { Player, Shape } from '../types';
import utils from '../utils';
import rsp from './rsp';

const originalResult = utils.getResult;
utils.getResult = (player1: Player, player2: Player) => player1;

const p1 = {
    name: 'Player1',
    shape: Shape.PAPER,
};

const p2 = {
    name: 'Player2',
    shape: Shape.ROCK,
};

const winner = rsp(p1, p2);

console.info(`The winner should be always p1`);
assert.strictEqual(winner, p1);

try {
    assert.strictEqual(winner, p2);
} catch (err) {
    console.log(err.message);
    assert.strictEqual(err.actual, p1);
    assert.strictEqual(err.expected, p2);
}

//cleanup
utils.getResult = originalResult;
