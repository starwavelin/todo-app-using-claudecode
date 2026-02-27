import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={`todo-item priority-${todo.priority}${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-check"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" title="删除" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  );
}
