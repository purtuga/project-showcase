import {ComponentElement} from "component-element"

export class MenuIcon extends ComponentElement {
    static get tagName() {
        return "menu-icon";
    }

    static get template() {
        return `
<style>
:host, .wrapper {
    display: inline-block;
    cursor: pointer;
}

.l1, .l2, .l3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

:host([is-open]) .l1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

:host([is-open]) .l2 {
    opacity: 0;
}

:host([is-open]) .l3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}
</style>
<div class="wrapper">
    <div class="l1"></div>
    <div class="l2"></div>
    <div class="l3"></div>
</div>`;
    }

    // called when a new instance of the template is needed
    // static renderTemplate(ele) {}

    get isOpened() {
        return this.hasAttribute("is-open");
    }


    handleEvent() {
        if (this.hasAttribute("is-open")) {
            this.removeAttribute("is-open");
        }
        else {
            this.setAttribute("is-open", "");
        }
    }

    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    ready() {
        this.on("click", this);
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    // mounted() {}

    // called when element is removed from dom
    // unmounted() {}
}

export default MenuIcon;
