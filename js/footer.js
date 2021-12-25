class Footer extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
    // this.innerHTML = '<a class="website-header" href="index.html"><div><h1 id="main-header">Chingu 친구</h1><center><img src="./images/chingu-logo-1.png" alt="chingu-logo-dumpling-kimbap-noodles" width="150px"></center><h2 id="main-header-2">Inspired by Korea</h2></div></a>';
    this.innerHTML = `
    <section id="main-site-footer">
      <div class="row">
        <div class="col-lg-4 col-sm-4">
          <div class="important-links">
              <center>
                <ul>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Shipping and Returns</a></li>
                  <li><a href="contact.html#contact-section">Contact us</a></li>
                </ul>
              </center>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="logo-link-home">
            <center>
              <a href="index.html">
                <img src="./images/chingu-logo-1.png" alt="chingu-logo-dumpling-kimbap-noodles" width="100px">
                <p>some catchphrase or text</p>
              </a>
            </center>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="mailing-list-subscription">
            <center>
              <form class="" action="mailto:a.louandra@gmail.com" method="post" enctype="text/plain">
                <label for="">Join our mailing list for updates</label><br>
                <input type="email" name="yourEmail" value="your email address">
                <input class="btn" type="submit" name="" value="Confirm">
              </form>
            </center>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid">
      <footer>
        <div class="social-buttons">
          <center>
              <ul>
                <li><a href="http://www.instagram.com/chingukoreancafe" target="_blank">
                  <img src="./images/social-icons/insta-icon.png" alt="instagram-logi" class="instagram-icon">
                </a></li>
                <li><a href="http://www.facebook.com/chingukoreancafe" target="_blank">
                  <img src="./images/social-icons/fb-icon.png" alt="facebook-logo" class="facebook-icon"></a></li>
                <li><a href="http://www.facebook.com/chingucafe" target="_blank">
                    <img src="./images/social-icons/yt-icon.png" alt="youtube-logo" class="youtube-icon">
                  </a></li>
                <li><a href="http://www.facebook.com/chingucafe" target="_blank">
                    <img src="./images/social-icons/twitter-icon.png" alt="twitter-logo" class="twitter-icon"></a></li>
                <li><a href="http://www.facebook.com/chingucafe" target="_blank">
                    <img src="./images/social-icons/tiktok-icon.png" alt="tiktok-logo" class="tiktok-icon">
                  </a></li>
             </ul>
          </center>
        </div>
      <div class="footer-copyright">
        <p class="footer-copyright">Copyright &copy 2021 Chingu Korean Cafe.</p>
      </div>
      </footer>
    </div>
    `;
  }
}

customElements.define('footer-component', Footer);
