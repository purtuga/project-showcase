import {
    AttrDirective,
    OnDirective,
    IfDirective,
    ClassDirective,
    ShowDirective,
    EachDirective
} from "@purtuga/dom-data-bind/src/DomDataBindElement.js"
import {state} from "../common";
import {Component} from "./Component.js";

//========================================================================================

export class ShowcaseMenu extends Component {
    static tagName = "showcase-menu";

    static directives = [
        EachDirective,
        IfDirective,
        AttrDirective,
        OnDirective,
        ClassDirective,
        ShowDirective
    ];

    didInit() {
        this.state = {
            commonState: state
        };
    }

    render() {
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
<div _each="group of state.commonState.unGroupedShowcases.concat(state.commonState.groupedShowcases)" _class="{group: !!group.showcases}">
    <h3 _if="group.showcases">{{group.group}}</h3>
    <a _each="showcase of (group.showcases || [group])" _on.click="handleEvent($ev, showcase)" _attr.href="'#/showcase/' + showcase.name">
        <span class="icon">
            <span class="icon" _show="state.commonState.selected !== showcase">&#9675;</span>
            <span class="icon" _show="state.commonState.selected === showcase" style="color: green;">&#9679;</span>
        </span>
        <div>{{showcase.name}}</div>
    </a>
        
</div>
`;
    }

    handleEvent(ev, showcaseDefinition) {
        this.emit("show", showcaseDefinition);
    }
}
export default ShowcaseMenu;
