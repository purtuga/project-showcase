import {ShowcaseRouter} from "./ShowcaseRouter";
import {ShowcaseBody} from "./ShowcaseBody";
import {ShowcaseMenu} from "./ShowcaseMenu";
import {ShowcaseApp} from "./ShowcaseApp";
import {AppLayoutSideNavPush} from "./AppLayoutSideNavPush";
import {MenuIcon} from "./MenuIcon";

export {state} from "./common"
export {showcase} from "./showcase"
export {
    ShowcaseApp,
    ShowcaseRouter,
    ShowcaseMenu,
    ShowcaseBody,
    AppLayoutSideNavPush,
    MenuIcon
};

/**
 * Register all elements in the CustomElement registry
 */
export function registerElements () {
    ShowcaseApp.define();
    ShowcaseRouter.define();
    ShowcaseBody.define();
    ShowcaseMenu.define();
    AppLayoutSideNavPush.define();
    MenuIcon.define();
}

