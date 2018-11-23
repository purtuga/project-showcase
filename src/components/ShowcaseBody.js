import {ComponentElement, prop} from "@purtuga/component-element"

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
    <div id="tests"></div>
    <slot></slot>
</div>`;
    }

    @prop({ required: true })
    get showcase() { return undefined; }

    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    ready() {
        this.props.showcase.callback(this);
        if (this.props.showcase.tests) {
            const testRunnerEle = document.createElement("showcase-test-runner");
            testRunnerEle.tests = this.props.showcase.tests;
            this.$("#tests").appendChild(testRunnerEle);
        }
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}
}

export default ShowcaseBody;
