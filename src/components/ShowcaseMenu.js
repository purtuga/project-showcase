import {ComponentElement, getComponentTemplate} from "@purtuga/component-element"
import {render, allDirectives } from "@purtuga/dom-data-bind"
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

h3 {
    color: darkgrey;
    font-weight: bold;
    margin: 0.5em 0;
}

a {
    display: block;
    position: relative;
    padding: 0.2em;
    line-height: 2em;
    color: darkgrey;
    text-decoration: none;
}
a > * {
    line-height: 1em;
}
a > div {
    padding-left: 1.5em;
}

.group > a {
    margin-left: 1em;
}

a > .icon {
    font-size: 1.2em;
    vertical-align: middle;
    position: absolute;
    top: 0;
}

a:hover {
    background-color: #ecf5f7;
}
</style>
<div _each="group of state.unGroupedShowcases.concat(state.groupedShowcases)" _class="{group: !!group.showcases}">
    <h3 _if="group.showcases">{{group.group}}</h3>
    <a _each="showcase of (group.showcases || [group])" _on.click="handleEvent($ev, showcase)" _attr.href="'#/showcase/' + showcase.name">
        <span class="icon">
            <span class="icon" _show="state.selected !== showcase">&#9675;</span>
            <span class="icon" _show="state.selected === showcase" style="color: green;">&#9679;</span>
        </span>
        <div>{{showcase.name}}</div>
    </a>
        
</div>
`;
    }
    static renderTemplate(ele) {
        const template = render(
            getComponentTemplate(this).innerHTML,
            {
                props: ele.props,
                state,
                handleEvent: handleEvent.bind(ele)
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
