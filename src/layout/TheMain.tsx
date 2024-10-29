import { useState } from 'react';
import Todo from '#types/Todo';
import ATodo from '#components/ATodo';
import TheAddTodo from '#components/TheAddTodo';

const TheMain = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

