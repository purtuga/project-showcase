#   Project Showcase
Quickly add showcases to your library and provide the ability to generate a static site for them.


##  Design

Create the UI as Web Components. Provide a set of Custom Elements that can be used to build the User Interfaces. Each showcase is added by calling a `showcase()` function with a callback that is called when that showcase is selected in the UI.

### `showcase()` method

````javascript
import {showcase} from "showcase"

showcase("cool-button", function ($content){
    // build showcase
    
    $content.appendChild(showcaseNode);
    
    $content.onDestroy(() => {
        // clean up if needed when showcase is destroyed
    });
})
````


### Element: `showcase-menu`

UI element will display the menu with all registered showcases.

```html
<showcase-menu
    use-router
    ></showcase-menu>
``` 

When `use-router` is set, the page's hash will updated with the showcase name (ex. `#/cool-button`)

This element emits the following events:

-   `show` : the showcase to display


### Element: `showcase-router`

UI element that will initialize a page hash router.

### Element: `showcase-body`

The UI element where the showcase should be displayed in. Will be given to the `callback` function provided to `showcase()` method.

```html
<showcase-body></showcase-body>
```

