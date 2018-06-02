import {ShowcaseRouter} from "./components/ShowcaseRouter";
import {ShowcaseBody} from "./components/ShowcaseBody";
import {ShowcaseMenu} from "./components/ShowcaseMenu";
import {ShowcaseApp} from "./components/ShowcaseApp";

export {state} from "./common"
export {showcase} from "./showcase"
export {
    ShowcaseApp,
    ShowcaseRouter,
    ShowcaseMenu,
    ShowcaseBody
};

/**
 * Register all elements in the CustomElement registry
 */
export function registerElements () {
    ShowcaseApp.define();
    ShowcaseRouter.define();
    ShowcaseBody.define();
    ShowcaseMenu.define();
}

