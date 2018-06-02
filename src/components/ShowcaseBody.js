import {ComponentElement, prop} from "component-element"

export class ShowcaseBody extends ComponentElement {
    static get tagName() {
        return "showcase-body";
    }

    static get template() {
        return `
<style>
:host {
    display: block;
}
</style>
<div>
    <slot></slot>
</div>`;
    }

    @prop({ required: true })
    get showcase() {}

    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    ready() {
        this.props.showcase.callback(this);
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}
}

export default ShowcaseBody;
