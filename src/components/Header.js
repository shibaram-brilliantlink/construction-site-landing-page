export default function Header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML =
    /* HTML */
    `<nav>
        <a href="/" class="header__logo">
          <img
            src="../../public/images/build-care-high-resolution-logo.png"
            alt="Company logo"
          />
        </a>

        <a href="#" class="header__hamburger">
          <span></span><span></span><span></span>
        </a>
        <div class="header__links">
          <a href="#">Home</a><a href="#">Services</a><a href="#">Gallery</a
          ><a href="#">News & Letter</a><a href="#">Contact us</a>
        </div>
        <a href="#" class="button header__letstalk">Have any questions ?</a>
      </nav>
      <ul class="header__overlay">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">News & Letter</a></li>
        <li><a href="#">Contact us</a></li>
      </ul> `;
  return header;
}
