import { useEffect, useState } from 'react';
import Todo from '#types/Todo';
import ATodo from '#components/ATodo';
import TheAddTodo from '#components/TheAddTodo';
import useLocalStorage from '#composables/useLocalStorage';

const TheMain = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [getItem, setItem] = useLocalStorage<Todo[]>();

  useEffect(() => {
    const item = getItem();
    if (item) {
      setTodos(item);
    }
  }, []);

  const handleAddTodo = (todo: Todo) => {
    const udpatedTodos = [...todos, todo];
    setTodos(udpatedTodos);
    setItem(udpatedTodos);
  };

  const handleCompleteTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setItem(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setItem(updatedTodos);
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

