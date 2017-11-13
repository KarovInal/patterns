import {
    UserAdapter,
    AdminAdapter
} from '../../patterns/Adapter';

describe('Паттерн адаптер', () => {
    it('Admin adapter', () => {
        let admin = new AdminAdapter();

        expect(admin.request()).toEqual({
            name: 'Вася',
            messages: []
        });
    });

    it('User adapter', () => {
        let user = new UserAdapter();

        expect(user.request()).toEqual({
            name: 'Петя',
            messages: []
        })
    });
})