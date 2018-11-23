import { showcase } from "../src/index.js";

showcase({name: "App"}, function ($cntr) {
    $cntr.innerHTML = `<showcase-app></showcase-app>`;
});