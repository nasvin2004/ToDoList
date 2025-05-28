import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";

const TaskModal = ({ task, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  useEffect(() => {
    if (task) setForm(task);
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        await api.put(`/tasks/edit/${task._id}`, form);
        // alert("Task updated");
        toast.success("Task updated");
      } else {
        await api.post("/tasks/create", form);
        // alert("Task created");
        toast.success("Task Created");
      }
      onSuccess();
      onClose();
    } catch (err) {
      alert("Error saving task");
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded w-96 space-y-4 bg-white bg-opacity-70  "
        >
          <h3 className="text-xl font-bold">
            {task ? "Edit Task" : "Create Task"}
          </h3>
          <input
            type="text"
            placeholder="Title"
            className="border p-2 w-full"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            className="border p-2 w-full"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
          <input
            type="date"
            className="border p-2 w-full"
            value={form.dueDate?.split("T")[0]}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {task ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
