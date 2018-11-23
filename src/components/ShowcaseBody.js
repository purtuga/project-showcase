import { prop } from "@purtuga/component-element"
import {Component} from "./Component.js";

//========================================================================

export class ShowcaseBody extends Component {
    static tagName = "showcase-body";

    @prop({ required: true }) showcase = undefined;

    render() {
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

    didRender() {
        if (this.props.showcase) {
            this.props.showcase.callback(this);

            if (this.props.showcase.tests) {
                const testRunnerEle = document.createElement("showcase-test-runner");
                testRunnerEle.tests = this.props.showcase.tests;
                this.$("#tests").appendChild(testRunnerEle);
            }
        }
    }
}

export default ShowcaseBody;
