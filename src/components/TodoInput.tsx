import { useState, KeyboardEvent } from 'react';
import '../styles/TodoInput.css';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    onAdd(value);
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="input-area">
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
  );
}
