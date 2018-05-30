#   Project Showcase
Quickly add showcases to your library and provide the ability to generate a static site for them.

Each showcase is added by calling the `showcase()` function with a callback that is called when that showcase is selected in the UI. 

This library provides a set of Custom Elements that can be used to build the User Interfaces that then displays the showcases that were registered. 


### `showcase()` method
Registers a showcase.

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

TODO: document method's signature/usage.


### Element: `showcase-menu`

UI element will display the menu with all registered showcases.

```html
<showcase-menu></showcase-menu>
``` 

This element emits the following events:

-   `show` : the showcase to display


### Element: `showcase-router`

UI element that will initialize a page hash router.  The router in turn updates the internal `state` by first clearing out the current `state.selected` showcase and then populating it with the new one that was selected. 

### Element: `showcase-body`

The UI element where the showcase should be displayed in. Will be given to the `callback` function provided to `showcase()` method.

```html
<showcase-body></showcase-body>
```

This element has one required `prop` named `showcase` and it must be an object with the showcase information. (note: this is a "prop" not an html attribute).



#   TODO

- [ ] Create script that allows this to be added to any existing project
- [ ] Create prettier app template
- [ ] Create better menu system

