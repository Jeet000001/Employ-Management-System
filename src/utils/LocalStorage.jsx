const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Landing Page",
        description: "Design and build the company landing page using React and Tailwind CSS.",
        date: "2025-11-01",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Fix Navbar Responsiveness",
        description: "Resolve mobile layout issues in the navigation bar.",
        date: "2025-11-03",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Update Hero Section",
        description: "Add call-to-action button and update text alignment.",
        date: "2025-11-07",
        category: "UI Update",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Integrate Contact Form",
        description: "Implement a working contact form using EmailJS.",
        date: "2025-11-10",
        category: "Integration",
        active: false,
        newTask: true,
        completed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Optimize MongoDB queries to reduce response time.",
        date: "2025-10-28",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "API Documentation",
        description: "Write Swagger documentation for the user endpoints.",
        date: "2025-11-02",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "JWT Authentication",
        description: "Add JWT authentication middleware for route protection.",
        date: "2025-11-04",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Dashboard Layout",
        description: "Create responsive layout for admin dashboard using Figma.",
        date: "2025-10-30",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Implement Sidebar Menu",
        description: "Add collapsible sidebar with icons and links.",
        date: "2025-11-03",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Deploy to Vercel",
        description: "Push latest version of the dashboard to Vercel.",
        date: "2025-11-06",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Add Light/Dark Mode",
        description: "Implement theme toggle using Tailwind CSS.",
        date: "2025-11-08",
        category: "Feature",
        active: true,
        newTask: true,
        completed: false,
      },
      {
        title: "Fix Login Redirect",
        description: "Ensure users are redirected correctly after login.",
        date: "2025-11-09",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Set Up CI/CD Pipeline",
        description: "Configure GitHub Actions for automated deployment.",
        date: "2025-10-29",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Test API Endpoints",
        description: "Use Postman to verify backend API responses.",
        date: "2025-11-01",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Error Logging System",
        description: "Integrate Winston for backend error logging.",
        date: "2025-11-03",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Server Health Monitoring",
        description: "Add uptime monitoring with UptimeRobot.",
        date: "2025-11-07",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add unit tests for frontend components using Jest.",
        date: "2025-11-02",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Update ReadMe File",
        description: "Add setup instructions for new developers.",
        date: "2025-11-03",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Refactor CSS",
        description: "Use Tailwind classes instead of custom CSS.",
        date: "2025-11-05",
        category: "Refactor",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Fix Modal Bug",
        description: "Modal not closing on outside click; fix event handler.",
        date: "2025-11-06",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Add Pagination Feature",
        description: "Implement pagination on the users list page.",
        date: "2025-11-08",
        category: "Feature",
        active: false,
        newTask: true,
        completed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    console.log(employees, admin);
    
}