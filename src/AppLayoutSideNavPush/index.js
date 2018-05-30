import {ComponentElement} from "component-element"

//===============================================================
const EVENT_SHOW_NAV = "show-side-nav";
const EVENT_HIDE_NAV = "hide-side-nav";

/**
 * Presents a 50|50 layout with vertical navbar on the left and page content on the right.
 *
 * @listens show-side-nav
 * @listens hide-side-nav
 */
export class AppLayoutSideNavPush extends ComponentElement {
    static get tagName() {
        return "app-layout-side-nav-push";
    }

    static get template() {
        return `
<style>
:host {
    /* overridable variables */
    --app-layout-nav-bg-color: #111111;
    --app-layout-nav-font-color: #9b9b9b;
    
    /* --------------------- */
    
    display: block;
    box-sizing: border-box;
    margin: 0;
}
nav {
    height: 100%;
    width: 0;
    
    position: fixed;
    z-index: 10;
    
    top: 0;
    left: 0;
    
    background-color: var(--app-layout-nav-bg-color);
    
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}
nav > .clone-nav {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
.body {
    transition: margin-left .5s;
    padding: 5px;
}
</style>
<nav>
    <a class="close-nav" >&times;</a>
    <slot name="navbar"></slot>
</nav>
<div class="body">
    <slot></slot>
</div>`;
    }

    showNav() {
        this.$("nav").style.width = "250px";
        this.$(".body").style.marginLeft = "250px";
    }

    hideNav() {
        this.$("nav").style.width = "0";
        this.$(".body").style.marginLeft = "0";
    }


    toggleNav() {}


    isNavHidden() {}

    /**
     * Handles DOM events
     * @param {CustomEvent} ev
     */
    handleEvent(ev) {
        switch (ev.type) {
            case EVENT_SHOW_NAV:
                this.showNav();
                break;
            case EVENT_HIDE_NAV:
                this.hideNav();
                break;
        }
    }

    // called when a new instance of the template is needed
    // static renderTemplate(ele) {}

    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    ready() {
        this.on(EVENT_SHOW_NAV, this);
        this.on(EVENT_HIDE_NAV, this);
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}
}

export default AppLayoutSideNavPush;
