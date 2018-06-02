import {state} from "./common"

/**
 * Register a showcase with global state
 *
 * @param {String} name
 * @param {Function} callback
 */
export function showcase(name, callback) {
    state.showcases.push({
        name,
        callback
    });
}
export default showcase;
