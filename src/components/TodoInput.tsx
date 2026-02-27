import { useState, KeyboardEvent } from 'react';
import type { Priority } from '../types';
import '../styles/TodoInput.css';

interface TodoInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

const PRIORITY_OPTIONS: { value: Priority; label: string; cls: string }[] = [
  { value: 'low',    label: '低', cls: 'p-low' },
  { value: 'medium', label: '中', cls: 'p-medium' },
  { value: 'high',   label: '高', cls: 'p-high' },
];

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleAdd = () => {
    onAdd(value, priority);
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="input-area">
      <div className="input-row">
        <input
          id="new-todo"
          type="text"
          placeholder="添加新的待办事项..."
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={handleAdd} title="添加">
          +
        </button>
      </div>
      <div className="priority-row">
        <span className="priority-label">优先级:</span>
        {PRIORITY_OPTIONS.map(({ value: v, label, cls }) => (
          <button
            key={v}
            className={`priority-btn ${cls}${priority === v ? ' selected' : ''}`}
            onClick={() => setPriority(v)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
