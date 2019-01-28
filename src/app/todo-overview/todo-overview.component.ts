import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_TODOS } from '../actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  // Here we define class properties to get access to the store properties
  @select() todos;      // Select returns an observable
  @select() lastUpdate; // Select returns an observable

  // The select decorator gets the name of a field, and looks up for a field with the exact same
  // in the store

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
    });
  }

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({
      type: REMOVE_ALL_TODOS
    });
  }
}
