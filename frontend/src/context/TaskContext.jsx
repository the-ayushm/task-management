import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import taskService from "../services/taskService";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    todo: 0,
    inProgress: 0,
    completed: 0,
  });

  const hasFetchedRef = useRef(false);

  const fetchTasks = useCallback(async () => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    setIsLoading(true);
    try {
      const filterParam = filter === "all" ? undefined : filter;
      const data = await taskService.getTasks(filterParam);
      setTasks(data);
    } catch (err) {
      console.error("Fetch tasks failed:", err);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  const fetchStats = useCallback(async () => {
    try {
      const data = await taskService.getStats();
      setStats(data);
    } catch (err) {
      console.error("Fetch stats failed:", err);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (task) => {
    const newTask = await taskService.createTask(task);
    setTasks((prev) => [newTask, ...prev]);
    fetchStats();
  };

  const updateTask = async (id, updates) => {
    const updated = await taskService.updateTask(id, updates);
    setTasks((prev) =>
      prev.map((t) => (t._id === id ? updated : t))
    );
    fetchStats();
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
    fetchStats();
  };

  const value = useMemo(
    () => ({
      tasks,
      filter,
      setFilter,
      isLoading,
      stats,
      addTask,
      updateTask,
      deleteTask,
    }),
    [tasks, filter, isLoading, stats]
  );

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be used inside TaskProvider");
  return ctx;
}
