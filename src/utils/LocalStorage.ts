import { ITodo, IStorage } from '../../Types/Interface';

let initData: ITodo[] = [];

export const Storage: IStorage = {
  FetchData: () => {
    const todos: string | any = window.localStorage.getItem('todos');
    // console.log(todos);
    if (todos) {
      return JSON.parse(todos);
    } else {
      return [];
    }
  },

  SaveData: (todos: ITodo[]) => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  },
};
