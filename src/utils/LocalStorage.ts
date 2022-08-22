import { ITodo, IStorage } from '../../Types/Interface';

let initData: ITodo[] = [];

export const Storage: IStorage = {
  FetchData: () => {
    const todos: string | any = window.localStorage.getItem('todos');

    if (todos.length === 0) return initData;
    return JSON.parse(todos);
  },

  SaveData: (todos: ITodo[]) => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  },
};
