import FactoryMail from '../../patterns/Factory Method';

describe('Pattern Factory Method', () => {
  it('Land mail', (done) => {
    let factory = new FactoryMail;
    let land = factory.createMail('land');
    
    function callback(data) {
      expect(data).toEqual({
        type: 'Land',
        delay: 3000
      });

      done();
    }

    expect(land.run(callback));
  })
})