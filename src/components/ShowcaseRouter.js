import {ComponentElement} from "@purtuga/component-element"
import Navigo from "navigo"
import {state} from "../common";

//================================================================

export class ShowcaseRouter extends ComponentElement {
    static get tagName() {
        return "showcase-router";
    }

    static get template() {
        return `<span></span>`;
    }

    // Called from constructor
    init() {
        const router = new Navigo(null, true, "#");
        router.on("/showcase/:showcase", displayShowcase);
        setTimeout(() => router.resolve(), 200); // To allow registrations of showcases
    }

    // Called when all required `props` have been provided
    // ready() {}

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}
}
export default ShowcaseRouter;


function displayShowcase (params) {
    state.selected = null;
    let showcaseDefinition;
    state.showcases.some(showcase => {
        if (showcase.name === params.showcase) {
            showcaseDefinition = showcase;
            return true;
        }
    });
    setTimeout(() => state.selected = showcaseDefinition);
}
