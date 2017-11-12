import ButtonFactory from '../../patterns/Abstract Factory';

test('Абстрактная фабрика.', () => {
  let CreatorIosButton = new ButtonFactory('ios');
  let CreatorWinButton = new ButtonFactory('win');
  let CreatorButton = new ButtonFactory();
  let iosButton = CreatorIosButton.create();
  let winButton = CreatorWinButton.create();
  let Button = CreatorButton.create();
  
  expect(iosButton).toEqual({ title: 'IOS button' })
  expect(winButton).toEqual({ title: 'WIN button' })
  expect(Button).toEqual({ title: 'Default button' })
})