import type { Filter } from '../types';
import '../styles/Footer.css';

const FILTER_LABELS: { value: Filter; label: string }[] = [
  { value: 'all',       label: '全部' },
  { value: 'active',   label: '未完成' },
  { value: 'completed', label: '已完成' },
];

interface FooterProps {
  activeCount: number;
  completedCount: number;
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  onClearCompleted: () => void;
}

export default function Footer({
  activeCount,
  completedCount,
  filter,
  onFilterChange,
  onClearCompleted,
}: FooterProps) {
  return (
    <div className="footer">
      <span className="item-count">{activeCount} 项未完成</span>
      <div className="filters">
        {FILTER_LABELS.map(({ value, label }) => (
          <button
            key={value}
            className={`filter-btn${filter === value ? ' active' : ''}`}
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        className="clear-btn"
        onClick={onClearCompleted}
        style={{ visibility: completedCount > 0 ? 'visible' : 'hidden' }}
      >
        清除已完成
      </button>
    </div>
  );
}
