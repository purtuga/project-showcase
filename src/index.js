import {ShowcaseRouter} from "./ShowcaseRouter";
import {ShowcaseBody} from "./ShowcaseBody";
import {ShowcaseMenu} from "./ShowcaseMenu";
import {ShowcaseApp} from "./ShowcaseApp";

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

