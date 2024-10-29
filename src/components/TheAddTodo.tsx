import '#style/Todo.scss';
import Todo from '#types/Todo';
import { useState } from 'react';

interface PropsInterface {
  onAddTodo: (todo: Todo) => void;
}

const TheAddTodo = ({ onAddTodo }: PropsInterface) => {
  const [text, setText] = useState<string>('');

  const handleAddClick = () => {
    onAddTodo({
      id: Math.random().toString(36),
      text,
      isCompleted: false,
      date: new Date(),
    });
    setText('');
  };
  return (
    <div className="add-todo">
      <label>
        Ajouter une nouvelle tâche
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={handleAddClick}>+</button>
    </div>
  );
};

export default TheAddTodo;
