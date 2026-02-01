import { motion } from 'framer-motion';
import { useTasks } from '../../context/TaskContext';

const filters = [
  { id: 'all', label: 'All Tasks', icon: '📋' },
  { id: 'todo', label: 'To Do', icon: '⏰' },
  { id: 'in-progress', label: 'In Progress', icon: '🚀' },
  { id: 'completed', label: 'Completed', icon: '✅' },
];

export default function TaskFilters() {
  const { filter, setFilter, stats } = useTasks();

  const getCount = (filterId) => {
    if (filterId === 'all') return stats.total;
    if (filterId === 'todo') return stats.todo;
    if (filterId === 'in-progress') return stats.inProgress;
    if (filterId === 'completed') return stats.completed;
    return 0;
  };

  return (
    <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
      {filters.map((item, index) => {
        const isActive = filter === item.id;
        const count = getCount(item.id);

        return (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setFilter(item.id)}
            className={`relative flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
              isActive
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-card hover:shadow-card-hover'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
            <span
              className={`ml-1 px-2 py-0.5 text-xs font-semibold rounded-full ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {count}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}