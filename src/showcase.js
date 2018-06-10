import {state} from "./common"

/**
 * Register a showcase with global state
 *
 * @param {String|ShowcaseDefinition} name
 *  The showcase Name or an object that defines it name along with group.
 * @param {Function} callback
 */
export function showcase(name, callback) {
    const definition = Object.assign(
        /**
         * @typedef {Object} ShowcaseDefinition
         */
        {
            name: "??",
            group: null,
            callback: null
        },
        "object" === typeof name ? name : { name }
    );

    if (callback) {
        definition.callback = callback;
    }

    state.showcases.push(definition);
}
export default showcase;


