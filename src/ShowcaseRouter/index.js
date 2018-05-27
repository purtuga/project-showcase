import {ComponentElement} from "component-element"

export class ShowcaseRouter extends ComponentElement {
    static get tagName() {
        return "showcase-router";
    }

    static get template() {
        return `<div>My ShowcaseRouter</div>`;
    }

    // Called from constructor
    // init() {}

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
