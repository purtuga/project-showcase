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
nav {
    height: 100%;
    width: 250px;
    box-sizing: border-box;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: #eaeaea;
    overflow-x: hidden;
    padding: 0.5em;
}

.body {
    margin-left: 250px;
    box-sizing: border-box;
}
</style>
<showcase-router></showcase-router>  
<nav>
    <h2 style="color: #c5c5c5">Showcases</h2>
    <showcase-menu class="nav"></showcase-menu> 
</nav>
<div class="body">
    <slot></slot>
    <showcase-body style="margin-left: 1em;" _if="state.selected" _prop.showcase="state.selected"></showcase-body>
</div>`;
    }
    static renderTemplate(ele) {
        const template = render(
            getComponentTemplate(this).innerHTML,
            {
                props: this.props,
                state,
                toggleMenu(ev) {
                    ev.target.emit(
                        ev.target.isOpened ? "show-side-nav" : "hide-side-nav",
                        null,
                        { bubbles: true }
                    );
                }
            },
            allDirectives
        );
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
