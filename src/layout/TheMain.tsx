import { useEffect, useState } from 'react';
import Todo from '#types/Todo';
import ATodo from '#components/ATodo';
import TheAddTodo from '#components/TheAddTodo';
import useTodo from '../composables/useTodoService';
const TheMain = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { deleteTodo, getTodos, patchTodo, postTodo } = useTodo();

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  const handleAddTodo = async (todo: Todo) => {
    const newTodo = await postTodo(todo);
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  const handleCompleteTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
          patchTodo(updatedTodo);
          return updatedTodo;
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  return (
    <main className="wrapper">
      <h1>Ta liste de choses à faire</h1>
      <TheAddTodo onAddTodo={handleAddTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <ATodo
            key={todo.id}
            todo={todo}
            onComplete={handleCompleteTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </main>
  );
};

export default TheMain;

