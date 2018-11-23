import {makeObservable, objectCreateComputedProp} from "@purtuga/observables"

const DEFAULT_GROUP_NAME = "";
const grouped = [];
const unGrouped = [];
const byNameSorting = (a, b) => a.name.toLowerCase() > b.name.toLowerCase();
const byGroupSorting = (a, b) => a.group.toLowerCase() > b.group.toLowerCase();

export const state = {
    showcases: [],
    groupedShowcases: grouped,
    unGroupedShowcases: unGrouped,
    selected: null
};

makeObservable(state);

objectCreateComputedProp(state, "groupedShowcases", () => {
    grouped.splice(0);
    if (state.showcases.size) {
        const groupsByName = {};
        state.showcases.forEach(showcase => {
            if (!showcase.group) {
                return;
            }

            if (!groupsByName[showcase.group || DEFAULT_GROUP_NAME]) {
                /**
                 * @typedef {Object} ShowcaseGroupDefinition
                 * @property {String} group
                 * @property {String} order
                 * @property {Array<ShowcaseDefinition>} showcases
                 */
                groupsByName[showcase.group || DEFAULT_GROUP_NAME] = {
                    group: showcase.group || DEFAULT_GROUP_NAME,
                    order: showcase.order,
                    showcases: []
                };

                if (groupsByName[showcase.group || DEFAULT_GROUP_NAME].group === DEFAULT_GROUP_NAME) {
                    groupsByName[showcase.group || DEFAULT_GROUP_NAME].order = 1;
                }
            }
            groupsByName[showcase.group || DEFAULT_GROUP_NAME].showcases.push(showcase);
        });

        Object.keys(groupsByName).forEach(group => grouped.push(groupsByName[group]));
        grouped.sort(byGroupSorting);
    }

    return grouped;
});

objectCreateComputedProp(state, "unGroupedShowcases", () => {
    unGrouped.splice(0);
    if (state.showcases.size) {
        state.showcases.forEach(showcase => {
            if (!showcase.group) {
                unGrouped.push(showcase);
            }
        });

        unGrouped.sort(byNameSorting);
    }
    return unGrouped;
});
