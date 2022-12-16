import { describe, expect, it } from 'vitest';
import { User } from './user';

const userProps = {
  id: 1,
  name: 'Test',
  lastName: 'Test',
  nickName: 'TestTest',
  birthDate: new Date(),
  email: 'test@test.com',
  password: 'test@test1',
};

describe('User Entity', () => {
  it('should throw an error if the nickname have more 20 characters', () => {
    expect(() => {
      new User({
        ...userProps,
        nickName: 'aaaaaaaaaaaaaaaaaaaaa',
      });
    }).toThrow();
  });

  it('should throw an error if the email is incorrect format', () => {
    expect(() => {
      new User({
        ...userProps,
        email: 'testtest.com',
      });
    }).toThrow();

    expect(() => {
      new User({
        ...userProps,
        email: '@test.com',
      });
    }).toThrow();

    expect(() => {
      new User({
        ...userProps,
        email: 'test@.com',
      });
    }).toThrow();

    expect(() => {
      new User({
        ...userProps,
        email: 'test@testcom',
      });
    }).toThrow();

    expect(() => {
      new User({
        ...userProps,
        email: 'test@test.',
      });
    }).toThrow();
  });

  it('should throw an error if the password is incorrect format', () => {
    expect(() => {
      new User({
        ...userProps,
        password: 'test',
      });
    }).toThrow();
  });
});
