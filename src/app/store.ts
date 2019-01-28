import { ITodo } from './todo';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
    messaging: {
        newMessages: number
    };
}
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });
        case TOGGLE_TODO:
            const todoItemFound = state.todos.find(todoItem => todoItem.id === action.id);
            const index = state.todos.indexOf(todoItemFound);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todoItemFound, {isCompleted: !todoItemFound.isCompleted}),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todoItem => todoItem.id !== action.id),
                lastUpdate: new Date()
            });
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
    }
    return state;
}
export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null,
    messaging: {
        newMessages: 0
    }
};


