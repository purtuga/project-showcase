import {ComponentElement} from "component-element"
import page from "page"
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
        page.base("/#");
        page("/showcase/:showcase", removeCurrentShowcase, displayShowcase);
        page.start();
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

function removeCurrentShowcase (ctx, next) {
    state.selected = null;
    next();
}

function displayShowcase (ctx) {
    let showcaseDefinition;
    state.showcases.some(showcase => {
        if (showcase.name === ctx.params.showcase) {
            showcaseDefinition = showcase;
            return true;
        }
    });
    setTimeout(() => state.selected = showcaseDefinition);
}
