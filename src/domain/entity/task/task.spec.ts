import { describe, expect, it } from 'vitest';
import { Task } from './task';
//import dayjs from 'dayjs';

//- Id- Title- Type- Description- Valid Date

describe('task entity', () => {
  it('should throw an error if the title have more of 30 characters', () => {
    expect(() => {
      new Task({
        id: 1,
        title: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15',
        type: 'test',
        description: 'test',
        dueDate: new Date(),
      });
    }).toThrow();
  });

  it('should throw an error if the description have more of 300 characters', () => {
    expect(() => {
      new Task({
        id: 1,
        title: 'test tytle',
        type: 'test',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a viverra eros. Pellentesque mi leo, condimentum eu malesuada at, volutpat quis justo. Integer et lectus porta, aliquet libero sit amet, tincidunt lectus. Praesent quis gravida massa. Curabitur convallis massa a elit blandit, sit amet dapibus leo sodales. Aenean viverra ipsum at erat tempor, vel cursus ligula interdum. Sed tempor scelerisque velit. Nunc non quam in erat efficitur mollis. Ut efficitur odio sed lorem tempor, vitae fringilla est accumsan.',
        dueDate: new Date(),
      });
    }).toThrow();
  });

  it('should throw an error if the Valid date be before or equals the current Date', () => {
    expect(() => {
      new Task({
        id: 1,
        title: 'Title Test',
        type: 'Type Test',
        description: 'Description Test',
        dueDate: new Date('2022-12-20'),
      });
    }).toThrow();
  });
});
