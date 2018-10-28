import {ShowcaseRouter} from "./components/ShowcaseRouter";
import {ShowcaseBody} from "./components/ShowcaseBody";
import {ShowcaseMenu} from "./components/ShowcaseMenu";
import {ShowcaseApp} from "./components/ShowcaseApp";
import {ShowcaseTestRunner} from "./components/ShowcaseTestRunner";

export {state} from "./common"
export {showcase} from "./showcase"
export {
    ShowcaseApp,
    ShowcaseRouter,
    ShowcaseMenu,
    ShowcaseBody,
    ShowcaseTestRunner
};

/**
 * Register all elements in the CustomElement registry
 */
export function registerElements () {
    [
        ShowcaseApp,
        ShowcaseRouter,
        ShowcaseBody,
        ShowcaseMenu,
        ShowcaseTestRunner
    ].forEach(Component => Component.define());
}

