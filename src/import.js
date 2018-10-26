import * as components from "./index"

Object
    .keys(components)
    .forEach(componentName => (
        components[componentName] &&
        components[componentName].define &&
        components[componentName].define()
    ));
