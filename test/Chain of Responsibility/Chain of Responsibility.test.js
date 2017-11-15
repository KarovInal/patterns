import {
  toRub,
  toEur,
  toUsa
} from '../../patterns/Chain of Responsibility';

describe('Парттер цепочка обязанностей', () => {
  test('toRub', () => {
    let result = toRub({ type: 'eur', count: 1 });

    expect(result).toEqual({
      type: 'rub',
      count: 65
    })
  })

  test('toUsa', () => {
    let result = toUsa({ type: 'rub', count: 49 });

    expect(result).toEqual({
      type: 'usa',
      count: 1
    })
  })

  test('toEur', () => {
    let result = toEur({ type: 'usa', count: 1 });

    expect(result).toEqual({
      type: 'eur',
      count: 1.25
    })
  })
})