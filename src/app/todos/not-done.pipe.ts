import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'notDone'
})
export class NotDonePipe implements PipeTransform {
  transform(todos: Todo[]): Todo[] {
    return todos.filter(t => t.progress !== 1);
  }
}
