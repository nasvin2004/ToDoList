import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // import navigation hook
import api from "../utils/api";
import TaskItem from "./TaskItem";
import TaskModal from "./TaskModal";
import { triggerConfetti } from "../utils/confetti"; // import at the top

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate(); // to redirect

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks/get");
      setTasks(res.data);
    } catch (err) {
      alert("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/delete/${id}`);
      fetchTasks();
      alert("Task deleted");
    } catch {
      alert("Delete failed");
    }
  };

  const handleComplete = async (task) => {
    try {
      await api.put(`/tasks/edit/${task._id}`, {
        ...task,
        status: "completed",
      });
      fetchTasks();
      triggerConfetti(); // 🎉 Trigger animation here
      alert("Marked as completed");
    } catch {
      alert("Error updating task");
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to login or register page
  };

  return (
    <div
      className="p-6 relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 bg-black text-white px-4
         lg:p-4 lg:w-28 lg:text-xl py-2 rounded hover:bg-gray-800 transition"
      >
        Logout
      </button>
      <h2 className="text-2xl font-bold mb-4 lg:text-center lg:text-4xl">
        Your Tasks
      </h2>
      <div className="space-y-4 ">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={() => {
              setSelectedTask(task);
              setModalOpen(true);
            }}
            onDelete={() => handleDelete(task._id)}
            onComplete={() => handleComplete(task)}
          />
        ))}
      </div>
      {/* Floating Add Button */}
      <button
        onClick={() => {
          setSelectedTask(null);
          setModalOpen(true);
        }}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg lg:p-5  lg:w-40 lg:text-xl"
      >
        + Add Task
      </button>
      {modalOpen && (
        <TaskModal
          task={selectedTask}
          onClose={() => setModalOpen(false)}
          onSuccess={fetchTasks}
        />
      )}
    </div>
  );
};

export default Dashboard;
