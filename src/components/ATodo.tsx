import '#style/Todo.scss';
import Todo from '#types/Todo';

interface PropsInterface {
  todo: Todo;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const ATodo = ({ todo, onComplete, onDelete }: PropsInterface) => {
  return (
    <div className="todo-item">
      <div
        onClick={() => onComplete(todo.id)}
        className={`${todo.isCompleted ? 'completed' : ''}`}
      >
        <span>{todo.text}</span>
        <span className="date">
          {new Date(todo.date).toLocaleDateString()}-{new Date(todo.date).toLocaleTimeString()}
        </span>
      </div>
      <button
        className="delete"
        onClick={() => onDelete(todo.id)}
      >
        X
      </button>
    </div>
  );
};

export default ATodo;
