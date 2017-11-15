import User from '../../patterns/Command';

describe('Паттерн Command', () => {
  test('Calculator command', () => {
    let user = new User;

    user.plus(10);
    user.minus(5);
    expect(user.getResult()).toBe(5);

    user.undo();
    expect(user.getResult()).toBe(10);
  })
})