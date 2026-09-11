const Employees = [
  {
    id: 1,
    userName: "Ayush",
    gmail: "employee1@gmail.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login UI",
        taskDescription: "Design and develop the login page.",
        taskDate: "2026-09-08",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix responsive issues in the navigation bar.",
        taskDate: "2026-09-05",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Create the employee dashboard interface.",
        taskDate: "2026-09-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Profile Page",
        taskDescription: "Add profile information and edit functionality.",
        taskDate: "2026-09-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the user API with the dashboard.",
        taskDate: "2026-09-03",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    userName: "Rahul",
    gmail: "employee2@gmail.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern landing page design.",
        taskDate: "2026-09-09",
        category: "UI Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create User Cards",
        taskDescription: "Build reusable user card components.",
        taskDate: "2026-09-11",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Button Styling",
        taskDescription: "Correct spacing and responsive button styles.",
        taskDate: "2026-09-06",
        category: "CSS"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Add search functionality to the employee list.",
        taskDate: "2026-09-02",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Setup",
        taskDescription: "Set up the initial database structure.",
        taskDate: "2026-09-01",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    userName: "Aman",
    gmail: "employee3@gmail.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Registration Page",
        taskDescription: "Develop the registration form with validation.",
        taskDate: "2026-09-12",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Form Validation",
        taskDescription: "Add validation to all user input fields.",
        taskDate: "2026-09-13",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the login authentication issue.",
        taskDate: "2026-09-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Design and implement the website footer.",
        taskDate: "2026-09-04",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy the latest version of the application.",
        taskDate: "2026-09-03",
        category: "Deployment"
      }
    ]
  },
  {
    id: 4,
    userName: "Rohit",
    gmail: "employee4@gmail.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Form",
        taskDescription: "Build the form for creating new tasks.",
        taskDate: "2026-09-10",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Filters",
        taskDescription: "Add category and status filters to tasks.",
        taskDate: "2026-09-14",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Improve Dashboard UI",
        taskDescription: "Improve spacing and visual consistency.",
        taskDate: "2026-09-06",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Mobile Layout",
        taskDescription: "Fix layout issues on smaller screens.",
        taskDate: "2026-09-05",
        category: "Responsive"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Notification System",
        taskDescription: "Implement notifications for new tasks.",
        taskDate: "2026-09-02",
        category: "Frontend"
      }
    ]
  },
  {
    id: 5,
    userName: "Vikas",
    gmail: "employee5@gmail.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Dashboard",
        taskDescription: "Develop the main employee dashboard.",
        taskDate: "2026-09-09",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Status",
        taskDescription: "Display active, completed and failed tasks.",
        taskDate: "2026-09-11",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Header",
        taskDescription: "Build the dashboard header component.",
        taskDate: "2026-09-05",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Logout Function",
        taskDescription: "Implement logout functionality.",
        taskDate: "2026-09-04",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Authentication",
        taskDescription: "Resolve authentication errors in the application.",
        taskDate: "2026-09-01",
        category: "Bug Fix"
      }
    ]
  }
];

const Admin = [
  {
    id: 6,
    gmail: "admin@gmail.com",
    pass: "123"
  }
];

export const SetLocal = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(Employees));
  }

  if (!localStorage.getItem("Admin")) {
    localStorage.setItem("Admin", JSON.stringify(Admin));
  }
};

export const GetlocalStorage = () => {
  const Employ = JSON.parse(localStorage.getItem("employees")) || [];
  const Admin = JSON.parse(localStorage.getItem("Admin")) || [];

  return { Employ, Admin };
};