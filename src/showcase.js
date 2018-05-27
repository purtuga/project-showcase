import {showcaseList} from "./common"


export function showcase(name, callback) {
    showcaseList.push({
        name,
        callback
    });
}
export default showcase;
