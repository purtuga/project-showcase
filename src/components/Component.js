import {ComponentElement} from "@purtuga/component-element";
import {trackObservableDependencies} from "@purtuga/observables/src/decorators/DependencyTracker.js"
import {dataBoundTemplates} from "@purtuga/dom-data-bind/src/ElementDecorator.js"

//============================================================

@trackObservableDependencies({
    track: { _setView() { return this._queueUpdate; } },
    stop: { didUnmount() { return this._queueUpdate; } }
})
@dataBoundTemplates()
class Component extends ComponentElement {}

export { Component };