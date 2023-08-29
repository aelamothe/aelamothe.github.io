const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");
let projects = null;

// Organizes projects into albums
function renderProjects() {
  const len = projData.length;

  // Checks if an element with id "projects" exists
  if (document.getElementById("projects")) {
    projects = document.getElementById("projects");
  } else return;

  // Runs through the projects data and creates an element for each entry
  for (let i = 0; i < len; i++) {
    let project = document.createElement("div");
    project.setAttribute("class", "col projects");
    // Customizes info that appears in each card (Booststrap albums)
    project.innerHTML =
      `<div class="col">
        <div class="card shadow-sm" style="min-height:500px">
            <img src="` +
      projData[i].thumbnail +
      `" width="100%" height="100%" fill="#55595c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em" class="card-title">` +
      projData[i].projectName +
      `</text>
      <div 
          <div class="card-body">
            <p class="card-text text">` +
      projData[i].description +
      `</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  href="` +
      projData[i].portfolioLink +
      `" target="_blank" rel="noopener noreferrer">
                  Page
                </a>
                <a
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  href="` +
      projData[i].repo +
      `" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
              <small class="text-body-secondary">` +
      projData[i].tags +
      `</small>
            </div>
          </div>
        </div>
      </div>
      `;

    console.log(projData[i]);
    projects.appendChild(project);
  }
}

// Renders constant elements on page (navbar, footer)
function renderDefaultPage() {
  navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg fixed-top" style="background-color: var(--tree-green);">
            <div class="container-fluid">
              <a class="navbar-brand" style="color:var(--gold)" href="./index.html">Anastasia Lamothe</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html" style="color:var(--gold-muted)">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./projects.html" style="color:var(--gold-muted)">Coding Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.notion.so/aelamothe/UX-UI-Research-Design-fb7822130fbe4e33ae43bda06c71cc9f" target="_blank" rel="noopener noreferrer" style="color:var(--gold-muted)">UX Research</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://www.linkedin.com/in/anastasia-lamothe/" target="_blank" rel="noopener noreferrer" style="color:var(--gold-muted)">LinkedIn</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://github.com/aelamothe" target="_blank" rel="noopener noreferrer" style="color:var(--gold-muted)">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    `;

  footer.innerHTML = `
        <footer>
            <p>© 2023  Anastasia Lamothe</p>
        </footer>
    `;

  // Renders projects page
  renderProjects();
}
renderDefaultPage();
