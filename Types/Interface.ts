export interface ITodo {
  id: string;
  todo: string;
  done: string;
}

export interface IStorage {
  SaveData: (todos: ITodo[]) => void;
  FetchData: () => ITodo[];
}
