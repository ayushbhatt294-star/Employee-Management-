import React from "react";
import { useNavigate } from "react-router-dom";

const AllTask = () => {
  const Navigatee = useNavigate();

  const employees =
    JSON.parse(localStorage.getItem("employees")) || [];

  return (
    <div className="min-h-screen bg-[#171717] p-5">
      <button
        onClick={() => {
          Navigatee("/admin");
        }}
        className="bg-white text-lg mb-6 font-medium text-black px-5 py-2 rounded-xl active:scale-50"
      >
        Back
      </button>

      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#1f1f1f] p-5 shadow-lg">
        <div className="mb-3 flex items-center justify-between rounded-xl border border-white/5 bg-[#292929] px-4 py-3 text-sm font-medium text-white/50">
          <span>Employee</span>
          <span>Task</span>
          <span>Status</span>
        </div>

        <div className="max-h-96 overflow-y-auto space-y-3">
          {employees.map((employee) =>
            employee.tasks.map((task, index) => (
              <div
                key={`${employee.id}-${index}`}
                className="flex flex-col gap-3 rounded-xl border border-white/5 bg-[#242424] px-4 py-4 text-white/80 transition hover:border-white/10 hover:bg-[#292929] sm:flex-row sm:items-center sm:justify-between"
              >
                <h2 className="text-sm font-medium">
                  {employee.userName}
                </h2>

                <h3 className="text-sm text-white/70">
                  {task.taskTitle}
                </h3>

                <h5 className="w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {task.completed
                    ? "Completed"
                    : task.failed
                    ? "Failed"
                    : task.active
                    ? "Active"
                    : "Pending"}
                </h5>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTask;