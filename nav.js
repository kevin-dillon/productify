var a = 1, b = 2;
var div = document.createElement('div');
div.setAttribute('class', 'navs block bc2');
div.innerHTML = `
<section id="title">
      <div class="container-fluid">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
        <!-- Nav Bar -->

        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="index.html"><i class="fas fa-clipboard-list"></i> productify</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html#About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html#Tips">Tips</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
`;
document.getElementById('navs').appendChild(div);
