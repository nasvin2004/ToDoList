import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import TaskItem from "./TaskItem";
import TaskModal from "./TaskModal";
import { triggerConfetti } from "../utils/confetti";
import { TypeAnimation } from "react-type-animation";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

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
      triggerConfetti();
    } catch {
      alert("Error updating task");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="p-6 relative min-h-screen bg-cover bg-center flex flex-col"
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

      {tasks.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-Black text-lg lg:text-2xl font-extrabold lg:text-4xl">
          <TypeAnimation
            sequence={[
              "You have no tasks yet. Click below to add one!",
              2000, // Wait for 2 seconds
              "", // Clear the text
              500, // Short pause before restarting
            ]}
            wrapper="p"
            speed={50}
            className="text-center"
            repeat={Infinity} // Infinite loop
          />
        </div>
      ) : (
        <div className="space-y-4 flex-grow overflow-auto">
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
      )}

      {/* Floating Add Button */}
      <button
        onClick={() => {
          setSelectedTask(null);
          setModalOpen(true);
        }}
        className={`fixed bg-blue-600 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg lg:p-5 lg:w-40 lg:text-xl
    ${
      tasks.length === 0
        ? "animate-bounceVertical bottom-6 right-6"
        : "bottom-6 right-6"
    }`}
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
