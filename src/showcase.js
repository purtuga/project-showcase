import {state} from "./common"


export function showcase(name, callback) {
    state.showcases.push({
        name,
        callback
    });
}
export default showcase;
