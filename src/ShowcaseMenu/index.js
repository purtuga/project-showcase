import {ComponentElement, getComponentTemplate} from "component-element"
import {render, allDirectives } from "dom-data-bind"
import {state} from "../common";
import showcase from "../showcase";

//========================================================================================
function handleEvent (ev, showcaseDefinition) {
    this.emit("show", showcaseDefinition);
}


export class ShowcaseMenu extends ComponentElement {
    static get tagName() { return "showcase-menu"; }
    static get template() {
        return `<a href="#/${showcase.name}" _each="showcase of state.showcases" _on.click="handleEvent($ev, showcase)">{{showcase.name}}</a>`;
    }
    static renderTemplate(ele) {
        const template = render(getComponentTemplate(this).innerHTML, { props: ele.props, state, handleEvent: handleEvent.bind(ele) }, allDirectives);
        ele.onDestroy(() => {
            template.DomDataBind.destroy();
        });
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
export default ShowcaseMenu;
