import {showcase} from "project-showcase"

// import other showcases now so that they register themselves.

//========================================================

showcase("About", function ($content) {
    $content.innerHTML = `
<h2>${package.name}</h2>
<p>${package.description}</p>
<p>
    <strong>License:</strong> ${package.license}<br>
    <strong>Author:</strong> ${package.author}<br>
</p>
`;
});