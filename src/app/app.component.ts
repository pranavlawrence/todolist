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
    done: false,
    priority: 3
  },
  {
    label: 'do dishes',
    done: true,
    priority: 1
  },
  {
    label: 'do clothes',
    done: false,
    priority: 2
  },
  {
    label: 'cook lunch',
    done: true,
    priority: 5
  },
  {
    label: 'reading',
    done: false,
    priority: 5
  },
];
}
