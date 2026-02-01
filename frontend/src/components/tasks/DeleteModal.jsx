import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { useTasks } from '../../context/TaskContext';
import { useToast } from '../../context/ToastContext';

export default function DeleteModal({ isOpen, onClose, task }) {
  const { deleteTask } = useTasks();
  const { addToast } = useToast();

  const handleDelete = () => {
    deleteTask(task._id);
    addToast('Task deleted successfully', 'success');
    onClose();
  };

  if (!task) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Delete Task?</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong>"{task.title}"</strong>? This action cannot be undone.
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} className="flex-1">
            Delete Task
          </Button>
        </div>
      </div>
    </Modal>
  );
}