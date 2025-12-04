// Project data - Add your projects here
const projectsData = {
  wings: {
    title: "Wings on Wheels",
    category: "Full Stack Development",
    date: "2024",
    image: "images/project-wings.jpg",
    description:
      "Wings on Wheels is a comprehensive food truck management system designed to streamline operations for mobile food businesses. The platform integrates ordering, inventory management, point-of-sale, and booking functionalities into one seamless solution.",
    features: [
      "Real-time order management system",
      "Inventory tracking with low-stock alerts",
      "Integrated payment processing",
      "Customer booking and scheduling",
      "Analytics dashboard for business insights",
      "Mobile app for on-the-go management",
    ],
    technologies: [
      "Django",
      "PostgreSQL",
      "REST API",
      "Flutter",
      "Payment Gateway",
    ],
    github: "https://github.com/yourusername/wings-on-wheels",
    live: "https://wingsonwheels.example.com",
  },
  project2: {
    title: "Portfolio Website",
    category: "Web Development",
    date: "2024",
    image: "images/project-2.jpg",
    description:
      "A modern, responsive portfolio website showcasing my work and skills. Built with a focus on user experience and smooth animations.",
    features: [
      "Responsive design for all devices",
      "Smooth scroll animations",
      "Interactive project showcase",
      "Contact form integration",
      "Fast loading performance",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.example.com",
  },
  project3: {
    title: "Task Manager App",
    category: "Mobile Development",
    date: "2023",
    image: "images/project-3.jpg",
    description:
      "A cross-platform mobile application for managing tasks and boosting productivity. Features include task categorization, reminders, and progress tracking.",
    features: [
      "Create and organize tasks by categories",
      "Set reminders and due dates",
      "Track task completion progress",
      "Dark mode support",
      "Cloud sync across devices",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Local Notifications"],
    github: "https://github.com/yourusername/task-manager",
    live: "#",
  },
  project4: {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    date: "2023",
    image: "images/project-4.jpg",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment processing, and an admin dashboard for managing orders and inventory.",
    features: [
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment integration",
      "Order tracking system",
      "Admin dashboard for management",
    ],
    technologies: ["Django", "React", "MySQL", "Stripe", "Redis"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://shop.example.com",
  },
};

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectItems.forEach((item) => {
      // Reset animation
      item.style.animation = "none";

      if (filterValue === "all") {
        item.classList.remove("hidden");
        // Restart animation
        setTimeout(() => {
          item.style.animation = "";
        }, 10);
      } else {
        const category = item.getAttribute("data-category");
        if (category === filterValue) {
          item.classList.remove("hidden");
          setTimeout(() => {
            item.style.animation = "";
          }, 10);
        } else {
          item.classList.add("hidden");
        }
      }
    });
  });
});

// Open project modal
function openProjectModal(projectId) {
  const project = projectsData[projectId];

  if (!project) return;

  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = project.title;

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${
    project.title
  }" class="modal-project-image" onerror="this.src='https://via.placeholder.com/800x400?text=${
    project.title
  }'">
    
    <div class="modal-section">
      <h6><i class="fas fa-info-circle me-2"></i>About</h6>
      <p>${project.description}</p>
    </div>

    <div class="modal-section">
      <h6><i class="fas fa-star me-2"></i>Key Features</h6>
      <ul>
        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h6><i class="fas fa-tools me-2"></i>Technologies Used</h6>
      <div class="project-tags">
        ${project.technologies
          .map((tech) => `<span class="badge">${tech}</span>`)
          .join("")}
      </div>
    </div>

    <div class="modal-links">
      ${
        project.github !== "#"
          ? `<a href="${project.github}" target="_blank" class="modal-btn modal-btn-primary">
        <i class="fab fa-github me-2"></i>View on GitHub
      </a>`
          : ""
      }
      ${
        project.live !== "#"
          ? `<a href="${project.live}" target="_blank" class="modal-btn modal-btn-secondary">
        <i class="fas fa-external-link-alt me-2"></i>Live Demo
      </a>`
          : ""
      }
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  modal.show();
}

// Scroll animations for project cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all project items
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card-full");

  projectCards.forEach((card) => {
    observer.observe(card);
  });

  // Add smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});

// Add project counter animation
function animateCounter() {
  const projectCount = document.querySelectorAll(
    ".project-item:not(.hidden)"
  ).length;
  console.log(`Showing ${projectCount} projects`);
}

// Call counter animation on filter change
filterButtons.forEach((button) => {
  button.addEventListener("click", animateCounter);
});

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll(".project-image img").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Add hover effect enhancement
document.querySelectorAll(".project-card-full").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Search functionality (optional - can be added later)
function searchProjects(query) {
  const searchTerm = query.toLowerCase();
  projectItems.forEach((item) => {
    const title = item.querySelector("h3").textContent.toLowerCase();
    const description = item.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

// Console message
console.log(
  "%cProjects Page Loaded! 🚀",
  "color: #667eea; font-size: 18px; font-weight: bold;"
);
console.log(
  "%cExplore my projects and feel free to reach out!",
  "color: #764ba2; font-size: 14px;"
);
