import React, { useEffect, useState } from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({
  handleLogout,
  handleTaskCreated,
  employees: employeeData,
}) => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState(
    employeeData ||
      JSON.parse(localStorage.getItem("employees")) ||
      []
  );

  useEffect(() => {
    if (employeeData) {
      setEmployees(employeeData);
    }
  }, [employeeData]);

  const updateEmployees = (updatedEmployees) => {
    setEmployees(updatedEmployees);

    if (handleTaskCreated) {
      handleTaskCreated(updatedEmployees);
    }
  };

  const allTasks = employees.flatMap(
    (employee) => employee.tasks || []
  );

  const activeTasks = allTasks.filter(
    (task) => task.active && !task.completed && !task.failed
  ).length;

  const completedTasks = allTasks.filter(
    (task) => task.completed
  ).length;

  const failedTasks = allTasks.filter(
    (task) => task.failed
  ).length;

  const totalTasks = allTasks.length;

  const recentTasks = employees
    .flatMap((employee) =>
      (employee.tasks || []).map((task) => ({
        ...task,
        employeeName: employee.userName,
      }))
    )
    .slice(-6)
    .reverse();

  return (
    <div className="min-h-screen bg-[#171717] text-white">
      <div className="flex min-h-screen flex-col">
        <div className="border-b border-white/10 bg-[#1b1b1b] px-5 py-4 sm:px-8 lg:px-12">
          <Header handleLogout={handleLogout} />
        </div>

        <main className="flex-1 px-5 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Executive Overview
                </p>

                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Employee Operations
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                  Manage employee tasks, monitor progress and keep
                  your team's workload organized.
                </p>
              </div>

              <button
                onClick={() => navigate("/AllTask")}
                className="w-fit rounded-xl border border-white/10 bg-[#242424] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#2c2c2c]"
              >
                View All Tasks
              </button>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-[#20201f] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Total Tasks
                  </span>

                  <span className="rounded-lg bg-white/5 px-2 py-1 text-xs text-white/50">
                    All
                  </span>
                </div>

                <div className="mt-5 text-3xl font-semibold">
                  {totalTasks}
                </div>

                <p className="mt-2 text-xs text-white/35">
                  Across all employees
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#20201f] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Active
                  </span>

                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-400">
                    Live
                  </span>
                </div>

                <div className="mt-5 text-3xl font-semibold text-emerald-400">
                  {activeTasks}
                </div>

                <p className="mt-2 text-xs text-white/35">
                  Tasks currently in progress
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#20201f] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Completed
                  </span>

                  <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs text-blue-400">
                    Done
                  </span>
                </div>

                <div className="mt-5 text-3xl font-semibold text-blue-400">
                  {completedTasks}
                </div>

                <p className="mt-2 text-xs text-white/35">
                  Successfully completed
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#20201f] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Failed
                  </span>

                  <span className="rounded-full bg-red-400/10 px-2.5 py-1 text-xs text-red-400">
                    Attention
                  </span>
                </div>

                <div className="mt-5 text-3xl font-semibold text-red-400">
                  {failedTasks}
                </div>

                <p className="mt-2 text-xs text-white/35">
                  Tasks requiring attention
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.8fr]">
              <div className="rounded-2xl border border-white/10 bg-[#20201f] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                      Live Feed
                    </p>

                    <h2 className="mt-1 text-xl font-semibold">
                      Recent Task Activity
                    </h2>
                  </div>

                  <button
                    onClick={() => navigate("/AllTask")}
                    className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    View detailed logs →
                  </button>
                </div>

                <div className="space-y-3">
                  {recentTasks.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-white/10 py-10 text-center text-sm text-white/30">
                      No tasks available
                    </div>
                  ) : (
                    recentTasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#292929] p-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-white">
                            {task.taskTitle}
                          </p>

                          <p className="mt-1 text-xs text-white/35">
                            {task.employeeName} · {task.category}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs text-white/30">
                            {task.taskDate}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              task.completed
                                ? "bg-blue-400/10 text-blue-400"
                                : task.failed
                                ? "bg-red-400/10 text-red-400"
                                : task.active
                                ? "bg-emerald-400/10 text-emerald-400"
                                : "bg-white/10 text-white/40"
                            }`}
                          >
                            {task.completed
                              ? "Completed"
                              : task.failed
                              ? "Failed"
                              : task.active
                              ? "Active"
                              : "Pending"}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#20201f] p-6">
                <div className="mb-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                    Team Overview
                  </p>

                  <h2 className="mt-1 text-xl font-semibold">
                    Employee Status
                  </h2>
                </div>

                <div className="space-y-4">
                  {employees.map((employee) => {
                    const tasks = employee.tasks || [];

                    const active = tasks.filter(
                      (task) =>
                        task.active &&
                        !task.completed &&
                        !task.failed
                    ).length;

                    const completed = tasks.filter(
                      (task) => task.completed
                    ).length;

                    return (
                      <div
                        key={employee.id}
                        className="rounded-xl border border-white/5 bg-[#292929] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10 text-sm font-semibold text-emerald-400">
                              {employee.userName?.charAt(0)}
                            </div>

                            <div>
                              <p className="text-sm font-medium">
                                {employee.userName}
                              </p>

                              <p className="text-xs text-white/30">
                                {tasks.length} total tasks
                              </p>
                            </div>
                          </div>

                          <span className="text-xs text-emerald-400">
                            {active} active
                          </span>
                        </div>

                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{
                              width: `${
                                tasks.length
                                  ? (completed / tasks.length) * 100
                                  : 0
                              }%`,
                            }}
                          />
                        </div>

                        <div className="mt-2 flex justify-between text-[11px] text-white/30">
                          <span>
                            {completed} completed
                          </span>

                          <span>
                            {tasks.length
                              ? Math.round(
                                  (completed / tasks.length) * 100
                                )
                              : 0}
                            %
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <CreateTask
                handleTaskCreated={updateEmployees}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;