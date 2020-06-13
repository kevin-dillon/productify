var a = 1, b = 2;
var div = document.createElement('div');
div.setAttribute('class', 'navs block bc2');
div.innerHTML = `
<section id="title">
      <div class="container-fluid">


        <!-- Nav Bar -->
        
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#"><i class="fas fa-clipboard-list"></i> productify</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html#About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html#Inspiration">Inspiration</a>
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