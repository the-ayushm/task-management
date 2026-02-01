import { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useTasks } from '../../context/TaskContext';
import { useToast } from '../../context/ToastContext';

export default function TaskModal({ isOpen, onClose, task }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const { addTask, updateTask } = useTasks();
  const { addToast } = useToast();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    } else {
      setTitle('');
      setDescription('');
      setStatus('todo');
    }
  }, [task, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      addToast('Task title is required', 'error');
      return;
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      status,
    };

    if (task) {
      updateTask(task._id, taskData);
      addToast('Task updated successfully', 'success');
    } else {
      addTask(taskData);
      addToast('Task created successfully', 'success');
    }

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={task ? 'Edit Task' : 'Create New Task'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Task Title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-400 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Status
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['todo', 'in-progress', 'completed'].map((statusOption) => (
              <button
                key={statusOption}
                type="button"
                onClick={() => setStatus(statusOption)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  status === statusOption
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {statusOption === 'todo'
                  ? 'To Do'
                  : statusOption === 'in-progress'
                  ? 'In Progress'
                  : 'Completed'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button type="submit" className="flex-1">
            {task ? 'Update Task' : 'Create Task'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}