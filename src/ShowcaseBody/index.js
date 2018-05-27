import {ComponentElement} from "component-element"

export class ShowcaseBody extends ComponentElement {
    static get tagName() {
        return "showcase-body";
    }

    static get template() {
        return `<div>My ShowcaseBody</div>`;
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

export default ShowcaseBody;
