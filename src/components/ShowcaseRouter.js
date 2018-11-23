import {Component} from "./Component.js";
import Navigo from "navigo"
import { state } from "../common.js";

//================================================================

class ShowcaseRouter extends Component {
    static tagName = "showcase-router";

    didInit() {
        const router = new Navigo(null, true, "#");
        router.on("/showcase/:showcase", displayShowcase);
        setTimeout(() => router.resolve(), 200); // To allow registrations of showcases
    }

    willRender() {
        return false;
    }

    render() {
        return `<style>:host { display: none; }</style><span></span>`;
    }
}

export { ShowcaseRouter };
export default ShowcaseRouter;


function displayShowcase (params) {
    state.selected = null;
    let showcaseDefinition;
    state.showcases.some(showcase => {
        if (showcase.name === params.showcase) {
            showcaseDefinition = showcase;
            return true;
        }
    });
    setTimeout(() => state.selected = showcaseDefinition);
}
