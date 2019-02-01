import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todos = [
  {
    label: 'do shoes',
  },
  {
    label: 'do dishes',
  },
  {
    label: 'do clothes',
  },
  {
    label: 'cook lunch',
  },
  {
    label: 'reading',
  },
];

addTodo(newTodoLabel){

  var newTodo = {
    label: newTodoLabel,
  };
  this.todos.push(newTodo);
}

deleteTodo(todo){
  this.todos= this.todos.filter(t => t.label !== todo.label);
}


}
