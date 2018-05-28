import {ComponentElement, getComponentTemplate} from "component-element"
import {render, allDirectives } from "dom-data-bind"
import {state} from "../common";

//========================================================================================
function handleEvent (ev, showcaseDefinition) {
    this.emit("show", showcaseDefinition);
}


export class ShowcaseMenu extends ComponentElement {
    static get tagName() { return "showcase-menu"; }
    static get template() {
        return `
<style>
:host {
    display: block;
}
a {
    display: block;
    padding: 0.2em;
    line-height: 2em;
}
a:hover {
    background-color: #ecf5f7;
}
</style>
<a _each="showcase of getShowcaseList()" _on.click="handleEvent($ev, showcase)" _attr.href="'#/showcase/' + showcase.name">
    <span _if="state.selected === showcase">&#10004;</span>
    {{showcase.name}}
</a>`;
    }
    static renderTemplate(ele) {
        const template = render(
            getComponentTemplate(this).innerHTML,
            {
                props: ele.props,
                state,
                handleEvent: handleEvent.bind(ele),
                getShowcaseList() {
                    return state.showcases.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
                }
            },
            allDirectives
        );
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
