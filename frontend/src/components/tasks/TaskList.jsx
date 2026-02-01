import { motion, AnimatePresence } from 'framer-motion';
import { useTasks } from '../../context/TaskContext';
import TaskCard from './TaskCard';
import SkeletonCard from '../ui/SkeletonCard';
import EmptyState from '../EmptyState';

export default function TaskList({ onEdit, onDelete }) {
  const { tasks, filter, isLoading } = useTasks();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    const emptyMessages = {
      all: {
        title: 'No tasks yet',
        description: 'Create your first task to get started with task management',
      },
      todo: {
        title: 'No pending tasks',
        description: 'All caught up! No tasks in your to-do list',
      },
      'in-progress': {
        title: 'No tasks in progress',
        description: 'Start working on a task to see it here',
      },
      completed: {
        title: 'No completed tasks',
        description: 'Complete tasks to track your progress here',
      },
    };

    return (
      <EmptyState
        title={emptyMessages[filter].title}
        description={emptyMessages[filter].description}
      />
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}