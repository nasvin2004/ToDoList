import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div
      className="border bg-white bg-opacity-70 bg-white bg-opacity-70 border-gray-300 p-4 lg:pt-9
     rounded-lg shadow-md flex justify-between
      items-start hover:shadow-lg transition duration-200  lg:w-6/12 lg:ml-96 lg:h-60 lg:grid lg:grid-cols-2 lg:pl-20"
    >
      {/* Task Info Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 lg:text-4xl">
          {task.title}
        </h3>
        <p className="text-gray-700 mt-1 lg:text-xl lg:pt-2">
          {task.description}
        </p>
        <p className="text-sm text-gray-500 mt-2 lg:text-xl lg:pt-2">
          <span className="font-medium lg:font-extrabold lg:text-xl">Due:</span>{" "}
          {new Date(task.dueDate).toLocaleDateString()}
        </p>
        <p
          className={`text-sm mt-1 font-semibold lg:text-xl  lg:pt-2 ${
            task.status === "completed" ? "text-green-600" : "text-yellow-600"
          }`}
        >
          Status: {task.status}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 text-right ml-4 lg:ml-10 lg:mt-4 lg:pl-24">
        <button
          onClick={onEdit}
          className="text-blue-600 hover:underline block lg:text-xl "
        >
          ✏️ Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 hover:underline block lg:text-xl lg:pt-2"
        >
          🗑️ Delete
        </button>
        {task.status !== "completed" && (
          <button
            onClick={onComplete}
            className="text-green-600 hover:underline block lg:text-xl  lg:pt-2"
          >
            ✅ Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
