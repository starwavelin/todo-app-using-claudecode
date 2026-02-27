import type { Todo, Filter } from '../types';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const EMPTY_STATE: Record<Filter, { icon: string; message: string }> = {
  all:       { icon: '📝', message: '添加你的第一条待办事项吧' },
  active:    { icon: '🎉', message: '没有待办事项了！' },
  completed: { icon: '✅', message: '暂无已完成的事项' },
};

interface TodoListProps {
  todos: Todo[];
  filter: Filter;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, filter, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    const { icon, message } = EMPTY_STATE[filter];
    return (
      <ul className="todo-list">
        <li className="empty-state">
          <div className="icon">{icon}</div>
          {message}
        </li>
      </ul>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
