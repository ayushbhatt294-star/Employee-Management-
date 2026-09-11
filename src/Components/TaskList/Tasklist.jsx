import React from "react";

const Tasklist = (props) => {
  const tasks = props.tasks;

  return (
    <div className="mt-10 flex w-full flex-col gap-4 pb-5">
      {tasks?.map((task, index) => (
        <div
          key={index}
          className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#292929] to-[#1f1f1f] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl transition-all duration-300 group-hover:bg-emerald-400/[0.06]" />

          <div className="relative">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                  {task.category}
                </span>

                <span
                  className={`flex items-center gap-2 text-xs font-semibold ${
                    task.completed
                      ? "text-blue-400"
                      : task.failed
                      ? "text-red-400"
                      : task.active
                      ? "text-emerald-400"
                      : "text-white/40"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      task.completed
                        ? "bg-blue-400"
                        : task.failed
                        ? "bg-red-400"
                        : task.active
                        ? "bg-emerald-400"
                        : "bg-white/30"
                    }`}
                  />

                  {task.completed
                    ? "Completed"
                    : task.failed
                    ? "Failed"
                    : task.active
                    ? "Active"
                    : "Pending"}
                </span>
              </div>

              <span className="text-xs font-medium text-white/35">
                {task.taskDate}
              </span>
            </div>

            <div className="mt-5">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {task.taskTitle}
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">
                {task.taskDescription}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs text-white/25">
                Task #{String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-medium text-white/30 transition-colors group-hover:text-white/60">
                Task Details →
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasklist;