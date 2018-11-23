import { showcase } from "../src/index.js";

showcase({name: "App"}, function ($cntr) {
    $cntr.innerHTML = `<h1>test</h1>`;
});