import "../src/import.js"
import { showcase } from "../src/index.js";
import "./showcase.app.js"

//========================================================


showcase("About", function ($content) {
    $content.innerHTML = `
<h2>@purtuga/project-showcase</h2>
<p>Quickly add showcases to your library and provide the ability to generate a static site for them.</p>
<p>
    <strong>License:</strong> MIT<br>
    <strong>Author:</strong> Paul Tavares<br>
</p>
`;
});