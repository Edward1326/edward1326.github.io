// Inject nav on all pages
function buildNav() {
  const pages = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "skills.html", label: "Skills" },
    { href: "projects.html", label: "Projects" },
    { href: "education.html", label: "Education" },
    { href: "contact.html", label: "Contact" },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  const nav = document.createElement("nav");
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="logo">EQ<span></span></a>
      <ul class="nav-links">
        ${pages
          .map(
            (p) => `
          <li><a href="${p.href}" class="${current === p.href || (current === "" && p.href === "index.html") ? "active" : ""}">${p.label}</a></li>
        `,
          )
          .join("")}
      </ul>
    </div>
  `;

  document.body.prepend(nav);
}

buildNav();
