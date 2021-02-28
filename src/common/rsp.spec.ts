import { Player, Shape } from '../types';
import utils from '../utils';
import rsp from './rsp';

const p1 = {
    name: 'Player1',
    shape: Shape.PAPER,
};

const p2 = {
    name: 'Player2',
    shape: Shape.ROCK,
};

test('return winner', () => {
    jest.spyOn(utils, 'getResult');
    utils.getResult = jest.fn((player1: Player, player2: Player) => player1);

    const winner = rsp(p1, p2);
    expect(winner).toBe(p1);

    expect(utils.getResult).toHaveBeenCalledTimes(1);
    expect(utils.getResult).toHaveBeenCalledWith(p1, p2);

    utils.getResult.mockRestore();
});
