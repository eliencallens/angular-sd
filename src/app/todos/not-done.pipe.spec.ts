import { NotDonePipe } from './not-done.pipe';
import { Todo } from './todo';
describe('NotDonePipe', () => {
  let notDonePipe: NotDonePipe;

  beforeEach(() => {
    notDonePipe = new NotDonePipe();
  });

  describe('when transforming array with done and not done todos', () => {
    const todos: Todo[] = [
      {
        name: 'Clean house',
        budget: 0,
        dueDate: new Date('2020-02-02'),
        progress: 0.5
      },
      {
        name: 'Refuel car',
        budget: 50,
        dueDate: new Date('2020-02-02'),
        progress: 0
      },
      {
        name: 'Mow lawn',
        budget: 0,
        dueDate: new Date('2019-08-03'),
        progress: 1
      }
    ];

    it('should only return todos that are not done.', () => {
      const result = notDonePipe.transform(todos);
      expect(result.length).toBe(2);
      result.forEach(todo => {
        expect(todo.progress).toBeLessThan(1);
      });
    });
  });

  describe('when transforming empty array', () => {
    const todos: Todo[] = [];

    it('should return not todos.', () => {
      const result = notDonePipe.transform(todos);
      expect(result.length).toBe(0);
    });
  });
});
