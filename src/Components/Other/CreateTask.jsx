import React, { useState } from "react";

const CreateTask = ({ handleTaskCreated }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const employee = employees.find(
      (employee) =>
        employee.userName.toLowerCase() ===
        assignTo.toLowerCase()
    );

    if (!employee) {
      alert("Employee not found");
      return;
    }

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    employee.tasks.push(newTask);

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    if (handleTaskCreated) {
      handleTaskCreated(employees);
    }

    alert("Task assigned successfully");

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#20201f] p-6 shadow-xl">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-widest text-emerald-400">
          Task Management
        </p>

        <h2 className="mt-1 text-2xl font-semibold text-white">
          Create New Task
        </h2>

        <p className="mt-1 text-sm text-white/40">
          Assign a new task to an employee and track its progress.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 lg:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Task Title
          </label>

          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="e.g. Build Login Page"
            required
            className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Assign To
          </label>

          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/50"
          >
            <option value="">Select Employee</option>
            <option value="Ayush">Ayush</option>
            <option value="Rahul">Rahul</option>
            <option value="Aman">Aman</option>
            <option value="Rohit">Rohit</option>
            <option value="Vikas">Vikas</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="mb-2 block text-sm font-medium text-white/70">
            Description
          </label>

          <textarea
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            placeholder="Describe what needs to be completed..."
            required
            rows="4"
            className="w-full resize-none rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Due Date
          </label>

          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/50"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/70">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-[#292929] px-4 py-3 text-sm text-white outline-none focus:border-emerald-400/50"
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="React">React</option>
            <option value="UI Design">UI Design</option>
            <option value="Bug Fix">Bug Fix</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-[#111] transition hover:bg-emerald-400 active:scale-[0.98]"
          >
            Assign Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;