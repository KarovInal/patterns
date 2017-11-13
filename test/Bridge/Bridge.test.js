import {
    Iphone,
    Hand
} from '../../patterns/Bridge';

describe('Паттерн мост', () => {
    let iphone = new Iphone;
    let hand = new Hand(iphone);

    test('Select item', () => {
        expect(hand.hold()).toBe('select item');
    });

    test('Touch on display', () => {
        expect(hand.touch()).toBe('touch on display');
    });

    test('Swiper display', () => {
        expect(hand.swipe()).toBe('swiper display');
    })

    test('Device info', () => {
        expect(hand.getDeviceInfo()).toEqual({
            model: 'Iphone X',
            os: 'ios',
            price: '91 990'
        });
    })
})