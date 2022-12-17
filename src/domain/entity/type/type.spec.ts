import { describe, expect, it } from 'vitest';
import { Type } from './type';

const typeProps = {
  id: 1,
  name: 'Type Test',
};

describe('type entity', () => {
  it('should return an error if name is more than 15 characters', () => {
    expect(() => {
      new Type({
        ...typeProps,
        name: 'tttttttttttttttttttttttttttttttttt',
      });
    }).toThrow();
  });

  it('should return an error if type is less than 3 characters', () => {
    expect(() => {
      new Type({
        ...typeProps,
        name: 't',
      });
    }).toThrow();
  });
});
