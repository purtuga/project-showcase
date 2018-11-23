import {Component} from "./Component.js"
import {PropDirective, IfDirective} from "@purtuga/dom-data-bind"
import {state} from "../common";

//============================================================
export class ShowcaseApp extends Component {
    static tagName = "showcase-app";

    static directives = [ IfDirective, PropDirective ];

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
    <showcase-body style="margin-left: 1em;" _if="state.commonState.selected" _prop.showcase="state.commonState.selected"></showcase-body>
</div>`;
    }
}

export default ShowcaseApp;
