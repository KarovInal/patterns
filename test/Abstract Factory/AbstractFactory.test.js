import ButtonFactory from '../../patterns/Abstract Factory';


describe('Абстрактная фабрика', () => {
  let CreatorIosButton = new ButtonFactory('ios');
  let CreatorWinButton = new ButtonFactory('win');
  let CreatorButton = new ButtonFactory();

  let iosButton = CreatorIosButton.create();
  let winButton = CreatorWinButton.create();
  let button = CreatorButton.create();

  test('Кнопка по умолчанию', () => {
    expect(button).toEqual({ title: 'Default button' })
  });

  test('ios кнопка', () => {
    expect(iosButton).toEqual({ title: 'IOS button' });
  })

  test('win кнопка', () => {
    expect(winButton).toEqual({ title: 'WIN button' });
  })
});