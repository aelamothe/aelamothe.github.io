const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');

function renderPage () {
    // Renders constant elements on page (navbar, footer)
    navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg" style="background-color: var(--lavender-pink);">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Anastasia Lamothe</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Work
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Bus Route Tracker</a></li>
                      <li><a class="dropdown-item" href="#">Eyes</a></li>
                      <li><a class="dropdown-item" href="#">PacMan Factory</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Tower of Hanoi</a></li>
                      <li><a class="dropdown-item" href="#">Dynamic Grid</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">Contact</a>
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
    `
    
    document.body.appendChild(navbar.content);
    document.body.appendChild(footer.content);
}

renderPage();
