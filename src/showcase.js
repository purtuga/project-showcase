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
         *
         * @property {String} name
         * @property {String} group
         * @property {String|Array<String>} tests
         * @property {Function} callback
         */
        {
            name: "??",
            group: null,
            tests: null,
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


