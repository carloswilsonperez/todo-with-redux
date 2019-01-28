import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos; // To be able to access the 'todos' store property

  // We’re defining a class member of type ITodo called model.
  // This model object will be used to implement the todo form in
  // the template and bind values of the input controls to the properties of this object.
  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  exampleMessage;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log('------');
    // This is the form model as a JavaScript object with the
    // registered fields in it
    console.log(value);
    console.log('+++++++');
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }

  showMessage() {
    console.log(this.exampleMessage);
  }
}
