import Todo from '../types/Todo';
import useFetch from './useFetch';

const useTodo = () => {
  const { GET, POST, DELETE, PATCH } = useFetch();

  const postTodo = async (todo: Todo): Promise<Todo> => {
    const newTodo = await POST<Todo>('todo', todo);
    if (newTodo) {
      return newTodo;
    } else {
      throw new Error('Impossible de créer la tâche');
    }
  };

  const getTodos = async (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
    const todos = await GET<Todo[]>('todos');
    if (todos) {
      setTodos(todos);
    } else {
      throw new Error('Impossible de récupérer les tâches');
    }
  };

  const patchTodo = async (todo: Todo) => {
    PATCH<Todo>(`todo/${todo.id}`, todo);
  };

  const deleteTodo = async (id: string) => {
    DELETE(`todo/${id}`);
  };

  return { postTodo, getTodos, patchTodo, deleteTodo };
};

export default useTodo;
