import {ComponentElement, prop, bind} from "component-element"


//=====================================================================
const STATE = Symbol("STATE");

/**
 * Provides an HTML element that allos for a set of test files to be
 * defined, and runs those in an i-frame against a UT test framework.
 */
export class ShowcaseTestRunner extends ComponentElement {
    static get tagName() {
        return "showcase-test-runner";
    }

    static get template() {
        return `
<style>
:host {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
}
iframe {
    border: none;
    min-height: 10em;    
    width: 100%;
    height: 100%;
    display: block;
}
.holder {
    box-sizing: border-box;
    height: 500px;
    border: var(--theme-border, 1px solid lightgrey);
    margin-top: 1em;
    padding: 0.5em;
    border-width: 1em;
    border-radius: 25px;
}
.holder:empty {
    display: none;
}
</style>
<slot></slot>
<div>
    <button>Run Unit Tests</button>
</div>
<div class="holder"></div>
`;
    }

    @prop({ required: true })
    get tests() { return null; }
    
    @prop({ attr: true, boolean: true })
    get autoRun() { return false; }
    

    // Called from constructor
    // init() {}

    // Called when all required `props` have been provided
    ready() {
        if (!this[STATE]) {
            this[STATE] = {
                $holder: this.$(".holder"),
                $runBtn: this.$("button")
            };
            this[STATE].$runBtn.addEventListener("click", this);
            this.onPropsChange(this._handleAutoRun, "autoRun");
        }
    }

    // Called if required fields are removed
    // unready() {}

    // called when element is attached to dom
    mounted() {
        if (this.props.autoRun) {
            this._handleAutoRun();
        }
    }

    // called when element is removed from dom
    // unmounted() {}

    handleEvent(ev) {
        if (ev.target === this[STATE].$runBtn) {
            createRunWindow(this);
        }
    }

    @bind
    _handleAutoRun() {
        createRunWindow(this);
    }
}

function createRunWindow(instance) {
    // Destroy current iframe - if one is present
    if (instance.iframe$) {
        if (instance.iframe$.parentElement) {
            instance.iframe$.parentElement.removeChild(instance.iframe$);
        }
        instance.iframe$ = instance.iframe$doc = null;
    }

    // create new
    const $iframe = instance.iframe$ = document.createElement("iframe");
    let isLoaded = false;   // For IE's sake <sigh!>
    $iframe.setAttribute("sandbox", "allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts");
    $iframe.onload = () => {
        if (isLoaded) {
            return;
        }
        isLoaded = true;

        const $iframeDoc = instance.iframe$doc = $iframe.contentDocument;
        $iframeDoc.write(getMochaRunnerPageSource(instance));
        $iframeDoc.close();
    };

    instance[STATE].$holder.appendChild($iframe);
}


function getMochaRunnerPageSource(instance) {
    const tests = instance.tests && instance.tests
        ? Array.isArray(instance.tests) ? instance.tests : [ instance.tests ]
        : [];

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test Runner</title>
    <link href="https://unpkg.com/mocha@5.2.0/mocha.css" rel="stylesheet"/>
</head>
<body>
    <h1>Unit Tests</h1>
    <div id="mocha"></div>
    
    <script src="//unpkg.com/chai/chai.js"></script>
    <script src="//unpkg.com/sinon@7.1.0/pkg/sinon.js"></script>
	<script src="//unpkg.com/mocha@5.2.0/mocha.js"></script>
	<script>
	    mocha.setup('bdd');
		const expect = chai.expect;
    </script>
    ${ tests.map(testUrl => `<script src="${testUrl}"></script>`).join("\n") }
	<script>
	    mocha.run();
    </script>
</body>
</html>`;

}

export default ShowcaseTestRunner;