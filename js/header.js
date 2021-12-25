class Header extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
    // this.innerHTML = '<a class="website-header" href="index.html"><div><h1 id="main-header">Chingu 친구</h1><center><img src="./images/chingu-logo-1.png" alt="chingu-logo-dumpling-kimbap-noodles" width="150px"></center><h2 id="main-header-2">Inspired by Korea</h2></div></a>';
    this.innerHTML = `
    <a class = "website-header" href="index.html">
    <div>
      <h1 id="main-header"> Chingu 친구</h1>
      <center><img src="./images/chingu-logo-1.png" alt="chingu-logo-dumpling-kimbap-noodles" width="150px"></center>
      <h2 id = "main-header-2"> Inspired by Korea </h2>
    </div></a>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav ml-auto nav-fill w-100">
        <li class="nav-item"><a class="nav-link" href="cafe.html">Chingu Cafe</a> </li>
        <li class="nav-item"><a class="nav-link" href="merchandise.html">Merchandise</a> </li>
        <li class="nav-item"><a class="nav-link" href="events.html">Events</a></li>
        <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
      </ul>
    </div>
  </div>
  </nav>
    `;
  }
}

customElements.define('header-component', Header);
