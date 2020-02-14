⚠ DEPRECATED ⚠

# jquery.redux

## usage

### setup

```html
<script src="https://git.snoot.club/chee/jquery.redux/blob/jquery.redux.min.js">
```

### set-reducer

```js
var initialState = 0;

function reducer(state, action) {
  state = state || initialState
  switch(action.type) {
    case "+":
      return state + 1
    case "-":
      return state - 1
    case "@jQuery/init":
      return 0
    default:
      return state;
  }
}

$( "#my-element" ).redux( "set-reducer", { reducer } );
```

### dispatch
```
$("#my-element")
    .redux("dispatch", {
	    action: {
		    type: "+"
	    }
	})
    .redux("dispatch", {
	    action: {
		    type: "+"
	    }
	})
```

### get-state

```js
$( "#my-element" ).redux( "get-state" ); //=> 2
```
