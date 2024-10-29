import { useEffect, useState } from 'react';
import Todo from '#types/Todo';
import ATodo from '#components/ATodo';
import TheAddTodo from '#components/TheAddTodo';
import useLocalStorage from '#composables/useLocalStorage';

const TheMain = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [getItem, setItem] = useLocalStorage<Todo[]>();
  const [loaded, setLoaded] = useState(false);

  // besoin du loaded car todos, lors de sa création avec le useState, appelle le useEffet

  useEffect(() => {
    const item = getItem();
    console.log('🚀 ~ useEffect ~ get todos:', item);
    if (item) {
      setTodos(item);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ save todos:', loaded);
    if (loaded) setItem(todos);
  }, [todos]);

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleCompleteTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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

