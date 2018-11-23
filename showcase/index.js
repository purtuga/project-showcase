import {showcase, registerElements} from "../src/index.js";

// import other showcases now so that they register themselves.

//========================================================
registerElements();


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