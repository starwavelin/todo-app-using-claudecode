import { useTodos } from './hooks/useTodos';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default function App() {
  const {
    todos,
    filteredTodos,
    filter,
    setFilter,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="app">
      <h1>Todo</h1>
      <TodoInput onAdd={addTodo} />
      <div className="card">
        <TodoList
          todos={filteredTodos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        {todos.length > 0 && (
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        )}
      </div>
    </div>
  );
}
