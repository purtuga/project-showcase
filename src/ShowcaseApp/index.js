import {ComponentElement, getComponentTemplate} from "component-element"
import {render, allDirectives} from "dom-data-bind"
import {state} from "../common";

//============================================================
export class ShowcaseApp extends ComponentElement {
    static get tagName() {
        return "showcase-app";
    }

    static get template() {
        return `
<style>
:host {
    display: block;
    padding: 0.5em;
}
</style>
<div>
    <showcase-router></showcase-router>
    <showcase-menu></showcase-menu>
    <showcase-body _if="state.selected" _prop.showcase="state.selected"></showcase-body>
    <slot></slot>
<div>`;
    }
    static renderTemplate(ele) {
        const template = render(getComponentTemplate(this).innerHTML, { props: this.props, state}, allDirectives);
        ele.onDestroy(() => template.DomDataBind.destroy());
        return template;
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

export default ShowcaseApp;
