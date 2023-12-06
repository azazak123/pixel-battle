import "./style.css";
import * as field from "./components/field";
import * as profile from "./components/profile";

const width = 1000;
const height = 1000;
const scale = 8;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Pixel Battle</h1>
    <div class="card">
      <div id="profile"></div>
      <div id="field"></div>
    </div>
  </div>
`;

await field.create(
  document.querySelector<HTMLButtonElement>("#field")!,
  width,
  height,
  scale
);

profile.create(document.querySelector<HTMLButtonElement>("#profile")!);
