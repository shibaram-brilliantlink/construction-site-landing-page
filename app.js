import "./src/styles/style.scss";
import Header from "./src/components/Header.js";
import HeroSection from "./src/components/HeroSection.js";

const app = document.querySelector("#app");

app.append(Header());
app.append(HeroSection());

// app.innerHTML = `
//   <div>
//     <h1 class="red">Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;
