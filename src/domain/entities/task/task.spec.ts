import { describe, expect, it } from 'vitest';
import { Task } from './task';
import { getCurrentDate, getFutureDate } from '../../../utils';

describe('task entity', () => {
  it('should throw an error if the title have more of 30 characters', () => {
    expect(() => {
      new Task({
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Test',
        description: 'Test',
        expirationDate: getFutureDate(new Date()),
      });
    }).toThrow();
  });

  it('should throw an error if the description have more of 300 characters', () => {
    expect(() => {
      new Task({
        id: 1,
        title: 'Test Title',
        type: 'Test',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a viverra eros. Pellentesque mi leo, condimentum eu malesuada at, volutpat quis justo. Integer et lectus porta, aliquet libero sit amet, tincidunt lectus. Praesent quis gravida massa. Curabitur convallis massa a elit blandit, sit amet dapibus leo sodales. Aenean viverra ipsum at erat tempor, vel cursus ligula interdum. Sed tempor scelerisque velit. Nunc non quam in erat efficitur mollis. Ut efficitur odio sed lorem tempor, vitae fringilla est accumsan.',
        expirationDate: getFutureDate(new Date()),
      });
    }).toThrow();
  });

  it('should throw an error if the due date is before or equal to the current date', () => {
    expect(() => {
      new Task({
        id: 1,
        title: 'Test Title',
        type: 'Test',
        description: 'Description Test',
        expirationDate: new Date('2021-12-25'),
      });
    }).toThrow();

    expect(() => {
      new Task({
        id: 1,
        title: 'Test Title',
        type: 'Test',
        description: 'Description Test',
        expirationDate: getCurrentDate(),
      });
    }).toThrow();
  });
});
