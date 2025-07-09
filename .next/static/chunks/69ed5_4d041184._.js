(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/d3/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i){
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
const __TURBOPACK__default__export__ = dispatch;
}}),
"[project]/node_modules/d3/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dispatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dispatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dispatch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dispatch"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/noevent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "nopropagation": (()=>nopropagation)
});
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "yesdrag": (()=>yesdrag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/noevent.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(view) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], true);
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], true);
    } else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], true);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", null);
    } else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export default as dragDisable>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dragDisable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export yesdrag as dragEnable>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dragEnable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yesdrag"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/constant.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = (x)=>()=>x;
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/event.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DragEvent)
});
function DragEvent(type, { sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        subject: {
            value: subject,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        identifier: {
            value: identifier,
            enumerable: true,
            configurable: true
        },
        active: {
            value: active,
            enumerable: true,
            configurable: true
        },
        x: {
            value: x,
            enumerable: true,
            configurable: true
        },
        y: {
            value: y,
            enumerable: true,
            configurable: true
        },
        dx: {
            value: dx,
            enumerable: true,
            configurable: true
        },
        dy: {
            value: dy,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/drag.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/noevent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/event.js [app-client] (ecmascript)");
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function defaultContainer() {
    return this.parentNode;
}
function defaultSubject(event, d) {
    return d == null ? {
        x: event.x,
        y: event.y
    } : d;
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
        selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
        if (touchending || !filter.call(this, event, d)) return;
        var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
        if (!gesture) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
    }
    function mousemoved(event) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        if (!mousemoving) {
            var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
            mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
    }
    function mouseupped(event) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.drag mouseup.drag", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yesdrag"])(event.view, mousemoving);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
        if (!filter.call(this, event, d)) return;
        var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
        for(i = 0; i < n; ++i){
            if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
                gesture("start", event, touches[i]);
            }
        }
    }
    function touchmoved(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        for(i = 0; i < n; ++i){
            if (gesture = gestures[touches[i].identifier]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
                gesture("drag", event, touches[i]);
            }
        }
    }
    function touchended(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, 500); // Ghost clicks are delayed!
        for(i = 0; i < n; ++i){
            if (gesture = gestures[touches[i].identifier]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
                gesture("end", event, touches[i]);
            }
        }
    }
    function beforestart(that, container, event, d, identifier, touch) {
        var dispatch = listeners.copy(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(touch || event, container), dx, dy, s;
        if ((s = subject.call(that, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("beforestart", {
            sourceEvent: event,
            target: drag,
            identifier,
            active,
            x: p[0],
            y: p[1],
            dx: 0,
            dy: 0,
            dispatch
        }), d)) == null) return;
        dx = s.x - p[0] || 0;
        dy = s.y - p[1] || 0;
        return function gesture(type, event, touch) {
            var p0 = p, n;
            switch(type){
                case "start":
                    gestures[identifier] = gesture, n = active++;
                    break;
                case "end":
                    delete gestures[identifier], --active; // nobreak
                case "drag":
                    p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(touch || event, container), n = active;
                    break;
            }
            dispatch.call(type, that, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: event,
                subject: s,
                target: drag,
                identifier,
                active: n,
                x: p[0] + dx,
                y: p[1] + dy,
                dx: p[0] - p0[0],
                dy: p[1] - p0[1],
                dispatch
            }), d);
        };
    }
    drag.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!_), drag) : filter;
    };
    drag.container = function(_) {
        return arguments.length ? (container = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_), drag) : container;
    };
    drag.subject = function(_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_), drag) : subject;
    };
    drag.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!_), drag) : touchable;
    };
    drag.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
}
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "drag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "dragDisable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "dragEnable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yesdrag"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$drag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/drag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "drag": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["drag"]),
    "dragDisable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dragDisable"]),
    "dragEnable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dragEnable"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/define.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "extend": (()=>extend)
});
function __TURBOPACK__default__export__(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/color.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Color": (()=>Color),
    "Rgb": (()=>Rgb),
    "brighter": (()=>brighter),
    "darker": (()=>darker),
    "default": (()=>color),
    "hsl": (()=>hsl),
    "hslConvert": (()=>hslConvert),
    "rgb": (()=>rgb),
    "rgbConvert": (()=>rgbConvert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/define.js [app-client] (ecmascript)");
;
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [
    reI,
    reI,
    reI
] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [
    reP,
    reP,
    reP
] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [
    reI,
    reI,
    reI,
    reN
] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [
    reP,
    reP,
    reP,
    reN
] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [
    reN,
    reP,
    reP
] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [
    reN,
    reP,
    reP,
    reN
] + "\\)$");
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Color, color, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null) // invalid hex
     : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Rgb, rgb, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Hsl, hsl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/color.js [app-client] (ecmascript) <export default as color>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/color.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/math.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "degrees": (()=>degrees),
    "radians": (()=>radians)
});
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/lab.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Hcl": (()=>Hcl),
    "Lab": (()=>Lab),
    "default": (()=>lab),
    "gray": (()=>gray),
    "hcl": (()=>hcl),
    "lch": (()=>lch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/define.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/math.js [app-client] (ecmascript)");
;
;
;
// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18, Xn = 0.96422, Yn = 1, Zn = 0.82521, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) return hcl2lab(o);
    if (!(o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rgb"])) o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbConvert"])(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b) x = z = y;
    else {
        x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
        z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function gray(l, opacity) {
    return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Lab, lab, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"], {
    brighter: function(k) {
        return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function(k) {
        return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function() {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = Xn * lab2xyz(x);
        y = Yn * lab2xyz(y);
        z = Zn * lab2xyz(z);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rgb"](lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"];
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function lch(l, c, h, opacity) {
    return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
function hcl2lab(o) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radians"];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Hcl, hcl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"], {
    brighter: function(k) {
        return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function(k) {
        return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function() {
        return hcl2lab(this).rgb();
    }
}));
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/cubehelix.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Cubehelix": (()=>Cubehelix),
    "default": (()=>cubehelix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/define.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/math.js [app-client] (ecmascript)");
;
;
;
var A = -0.14861, B = +1.78277, C = -0.29227, D = -0.90649, E = +1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rgb"])) o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbConvert"])(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"] - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Cubehelix, cubehelix, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"], {
    brighter: function(k) {
        k = k == null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brighter"] : Math.pow(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brighter"], k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darker"] : Math.pow(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darker"], k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radians"], l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rgb"](255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "cubehelix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$cubehelix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "gray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gray"]),
    "hcl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hcl"]),
    "hsl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hsl"]),
    "lab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "lch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lch"]),
    "rgb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/lab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$cubehelix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/cubehelix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "color": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["color"]),
    "cubehelix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["cubehelix"]),
    "gray": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["gray"]),
    "hcl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hcl"]),
    "hsl": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hsl"]),
    "lab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lab"]),
    "lch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lch"]),
    "rgb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rgb"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/lab.js [app-client] (ecmascript) <export default as lab>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "lab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$lab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/lab.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-color/src/cubehelix.js [app-client] (ecmascript) <export default as cubehelix>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cubehelix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$cubehelix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$color$2f$src$2f$cubehelix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-color/src/cubehelix.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Timer": (()=>Timer),
    "now": (()=>now),
    "timer": (()=>timer),
    "timerFlush": (()=>timerFlush)
});
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1){
        if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
        } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(callback, delay, time) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer"];
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript) <export default as timeout>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "timeout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/interval.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(callback, delay, time) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer"], total = delay;
    if (delay == null) return t.restart(callback, delay, time), t;
    t._restart = t.restart;
    t.restart = function(callback, delay, time) {
        delay = +delay, time = time == null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"])() : +time;
        t._restart(function tick(elapsed) {
            elapsed += total;
            t._restart(tick, total += delay, time);
            callback(elapsed);
        }, delay, time);
    };
    t.restart(callback, delay, time);
    return t;
}
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "interval": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "now": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"]),
    "timeout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "timer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timer"]),
    "timerFlush": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timerFlush"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$interval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/interval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "interval": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["interval"]),
    "now": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["now"]),
    "timeout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["timeout"]),
    "timer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["timer"]),
    "timerFlush": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["timerFlush"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$timer$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-timer/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cubicIn": (()=>cubicIn),
    "cubicInOut": (()=>cubicInOut),
    "cubicOut": (()=>cubicOut)
});
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript) <export cubicInOut as easeCubicInOut>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "easeCubicInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicInOut"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/linear.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "linear": (()=>linear)
});
const linear = (t)=>+t;
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/quad.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "quadIn": (()=>quadIn),
    "quadInOut": (()=>quadInOut),
    "quadOut": (()=>quadOut)
});
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return t * (2 - t);
}
function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/poly.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "polyIn": (()=>polyIn),
    "polyInOut": (()=>polyInOut),
    "polyOut": (()=>polyOut)
});
var exponent = 3;
var polyIn = function custom(e) {
    e = +e;
    function polyIn(t) {
        return Math.pow(t, e);
    }
    polyIn.exponent = custom;
    return polyIn;
}(exponent);
var polyOut = function custom(e) {
    e = +e;
    function polyOut(t) {
        return 1 - Math.pow(1 - t, e);
    }
    polyOut.exponent = custom;
    return polyOut;
}(exponent);
var polyInOut = function custom(e) {
    e = +e;
    function polyInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut.exponent = custom;
    return polyInOut;
}(exponent);
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/sin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sinIn": (()=>sinIn),
    "sinInOut": (()=>sinInOut),
    "sinOut": (()=>sinOut)
});
var pi = Math.PI, halfPi = pi / 2;
function sinIn(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}
function sinOut(t) {
    return Math.sin(t * halfPi);
}
function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/math.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// tpmt is two power minus ten times t scaled to [0,1]
__turbopack_context__.s({
    "tpmt": (()=>tpmt)
});
function tpmt(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/exp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "expIn": (()=>expIn),
    "expInOut": (()=>expInOut),
    "expOut": (()=>expOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/math.js [app-client] (ecmascript)");
;
function expIn(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(1 - +t);
}
function expOut(t) {
    return 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(t);
}
function expInOut(t) {
    return ((t *= 2) <= 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(1 - t) : 2 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(t - 1)) / 2;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "circleIn": (()=>circleIn),
    "circleInOut": (()=>circleInOut),
    "circleOut": (()=>circleOut)
});
function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
}
function circleOut(t) {
    return Math.sqrt(1 - --t * t);
}
function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/bounce.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "bounceIn": (()=>bounceIn),
    "bounceInOut": (()=>bounceInOut),
    "bounceOut": (()=>bounceOut)
});
var b1 = 4 / 11, b2 = 6 / 11, b3 = 8 / 11, b4 = 3 / 4, b5 = 9 / 11, b6 = 10 / 11, b7 = 15 / 16, b8 = 21 / 22, b9 = 63 / 64, b0 = 1 / b1 / b1;
function bounceIn(t) {
    return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}
function bounceInOut(t) {
    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/back.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "backIn": (()=>backIn),
    "backInOut": (()=>backInOut),
    "backOut": (()=>backOut)
});
var overshoot = 1.70158;
var backIn = function custom(s) {
    s = +s;
    function backIn(t) {
        return (t = +t) * t * (s * (t - 1) + t);
    }
    backIn.overshoot = custom;
    return backIn;
}(overshoot);
var backOut = function custom(s) {
    s = +s;
    function backOut(t) {
        return --t * t * ((t + 1) * s + t) + 1;
    }
    backOut.overshoot = custom;
    return backOut;
}(overshoot);
var backInOut = function custom(s) {
    s = +s;
    function backInOut(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
    backInOut.overshoot = custom;
    return backInOut;
}(overshoot);
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/elastic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "elasticIn": (()=>elasticIn),
    "elasticInOut": (()=>elasticInOut),
    "elasticOut": (()=>elasticOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/math.js [app-client] (ecmascript)");
;
var tau = 2 * Math.PI, amplitude = 1, period = 0.3;
var elasticIn = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticIn(t) {
        return a * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(- --t) * Math.sin((s - t) / p);
    }
    elasticIn.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticIn.period = function(p) {
        return custom(a, p);
    };
    return elasticIn;
}(amplitude, period);
var elasticOut = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticOut(t) {
        return 1 - a * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(t = +t) * Math.sin((t + s) / p);
    }
    elasticOut.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticOut.period = function(p) {
        return custom(a, p);
    };
    return elasticOut;
}(amplitude, period);
var elasticInOut = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
    function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(-t) * Math.sin((s - t) / p) : 2 - a * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tpmt"])(t) * Math.sin((s + t) / p)) / 2;
    }
    elasticInOut.amplitude = function(a) {
        return custom(a, p * tau);
    };
    elasticInOut.period = function(p) {
        return custom(a, p);
    };
    return elasticInOut;
}(amplitude, period);
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "easeBack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"]),
    "easeBackIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backIn"]),
    "easeBackInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backInOut"]),
    "easeBackOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backOut"]),
    "easeBounce": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceOut"]),
    "easeBounceIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceIn"]),
    "easeBounceInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceInOut"]),
    "easeBounceOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceOut"]),
    "easeCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleInOut"]),
    "easeCircleIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleIn"]),
    "easeCircleInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleInOut"]),
    "easeCircleOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["circleOut"]),
    "easeCubic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicInOut"]),
    "easeCubicIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicIn"]),
    "easeCubicInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicInOut"]),
    "easeCubicOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicOut"]),
    "easeElastic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$elastic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elasticOut"]),
    "easeElasticIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$elastic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elasticIn"]),
    "easeElasticInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$elastic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elasticInOut"]),
    "easeElasticOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$elastic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elasticOut"]),
    "easeExp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expInOut"]),
    "easeExpIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expIn"]),
    "easeExpInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expInOut"]),
    "easeExpOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expOut"]),
    "easeLinear": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linear"]),
    "easePoly": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polyInOut"]),
    "easePolyIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polyIn"]),
    "easePolyInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polyInOut"]),
    "easePolyOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polyOut"]),
    "easeQuad": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quadInOut"]),
    "easeQuadIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quadIn"]),
    "easeQuadInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quadInOut"]),
    "easeQuadOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quadOut"]),
    "easeSin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$sin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinInOut"]),
    "easeSinIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$sin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinIn"]),
    "easeSinInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$sin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinInOut"]),
    "easeSinOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$sin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinOut"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$quad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/quad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$poly$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/poly.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$sin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/sin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/exp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/circle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$bounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/bounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/back.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$elastic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/elastic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "easeBack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBack"]),
    "easeBackIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBackIn"]),
    "easeBackInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBackInOut"]),
    "easeBackOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBackOut"]),
    "easeBounce": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBounce"]),
    "easeBounceIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBounceIn"]),
    "easeBounceInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBounceInOut"]),
    "easeBounceOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeBounceOut"]),
    "easeCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCircle"]),
    "easeCircleIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCircleIn"]),
    "easeCircleInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCircleInOut"]),
    "easeCircleOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCircleOut"]),
    "easeCubic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCubic"]),
    "easeCubicIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCubicIn"]),
    "easeCubicInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCubicInOut"]),
    "easeCubicOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeCubicOut"]),
    "easeElastic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeElastic"]),
    "easeElasticIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeElasticIn"]),
    "easeElasticInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeElasticInOut"]),
    "easeElasticOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeElasticOut"]),
    "easeExp": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeExp"]),
    "easeExpIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeExpIn"]),
    "easeExpInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeExpInOut"]),
    "easeExpOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeExpOut"]),
    "easeLinear": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeLinear"]),
    "easePoly": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easePoly"]),
    "easePolyIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easePolyIn"]),
    "easePolyInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easePolyInOut"]),
    "easePolyOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easePolyOut"]),
    "easeQuad": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeQuad"]),
    "easeQuadIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeQuadIn"]),
    "easeQuadInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeQuadInOut"]),
    "easeQuadOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeQuadOut"]),
    "easeSin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeSin"]),
    "easeSinIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeSinIn"]),
    "easeSinInOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeSinInOut"]),
    "easeSinOut": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["easeSinOut"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$ease$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-ease/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/constant.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = (x)=>()=>x;
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/event.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ZoomEvent)
});
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Transform": (()=>Transform),
    "default": (()=>transform),
    "identity": (()=>identity)
});
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return identity;
    return node.__zoom;
}
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/noevent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "nopropagation": (()=>nopropagation)
});
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export default as dragDisable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export yesdrag as dragEnable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-interpolate/src/zoom.js [app-client] (ecmascript) <export default as interpolateZoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-transition/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript) <export default as interrupt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/noevent.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function defaultTransform() {
    return this.__zoom || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__["interpolateZoom"], listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", defaultTransform);
        if (collection !== selection) {
            schedule(collection, transform, point, event);
        } else {
            selection.interrupt().each(function() {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
        }
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"].translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this.that).datum();
            listeners.call(type, this.that, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
                g.mouse[1] = t.invert(g.mouse[0] = p);
            }
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var g = gesture(this, args, true).event(event), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), currentTarget = event.currentTarget, x0 = event.clientX, y0 = event.clientY;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__["dragDisable"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
        g.start();
        function mousemoved(event) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__["dragEnable"])(event.view, g.moved);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        if (duration > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).transition().duration(duration).call(schedule, t1, p0, event);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
;
;
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "zoom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "zoomIdentity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]),
    "zoomTransform": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "zoom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zoom"]),
    "zoomIdentity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zoomIdentity"]),
    "zoomTransform": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["zoomTransform"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-path/src/path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function path() {
    return new Path;
}
Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
            this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        } else if (!(l01_2 > epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
            this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        } else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) {
                this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
            this._ += "M" + x0 + "," + y0;
        } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
            this._ += "L" + x0 + "," + y0;
        }
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau + tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
            this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        } else if (da > epsilon) {
            this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
        }
    },
    rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
        return this._;
    }
};
const __TURBOPACK__default__export__ = path;
}}),
"[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "path": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-path/src/path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "path": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["path"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-path/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/d3/node_modules/d3-path/src/path.js [app-client] (ecmascript) <export default as path>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "path": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$path$2f$src$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-path/src/path.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/cluster.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
}
function meanX(children) {
    return children.reduce(meanXReduce, 0) / children.length;
}
function meanXReduce(x, c) {
    return x + c.x;
}
function maxY(children) {
    return 1 + children.reduce(maxYReduce, 0);
}
function maxYReduce(y, c) {
    return Math.max(y, c.y);
}
function leafLeft(node) {
    var children;
    while(children = node.children)node = children[0];
    return node;
}
function leafRight(node) {
    var children;
    while(children = node.children)node = children[children.length - 1];
    return node;
}
function __TURBOPACK__default__export__() {
    var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
    function cluster(root) {
        var previousNode, x = 0;
        // First walk, computing the initial x & y values.
        root.eachAfter(function(node) {
            var children = node.children;
            if (children) {
                node.x = meanX(children);
                node.y = maxY(children);
            } else {
                node.x = previousNode ? x += separation(node, previousNode) : 0;
                node.y = 0;
                previousNode = node;
            }
        });
        var left = leafLeft(root), right = leafRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
        // Second walk, normalizing x & y to the desired size.
        return root.eachAfter(nodeSize ? function(node) {
            node.x = (node.x - root.x) * dx;
            node.y = (root.y - node.y) * dy;
        } : function(node) {
            node.x = (node.x - x0) / (x1 - x0) * dx;
            node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
        });
    }
    cluster.separation = function(x) {
        return arguments.length ? (separation = x, cluster) : separation;
    };
    cluster.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [
            dx,
            dy
        ];
    };
    cluster.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [
            dx,
            dy
        ] : null;
    };
    return cluster;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/count.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function count(node) {
    var sum = 0, children = node.children, i = children && children.length;
    if (!i) sum = 1;
    else while(--i >= 0)sum += children[i].value;
    node.value = sum;
}
function __TURBOPACK__default__export__() {
    return this.eachAfter(count);
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/each.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(callback, that) {
    let index = -1;
    for (const node of this){
        callback.call(that, node, ++index, this);
    }
    return this;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/eachBefore.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(callback, that) {
    var node = this, nodes = [
        node
    ], children, i, index = -1;
    while(node = nodes.pop()){
        callback.call(that, node, ++index, this);
        if (children = node.children) {
            for(i = children.length - 1; i >= 0; --i){
                nodes.push(children[i]);
            }
        }
    }
    return this;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/eachAfter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(callback, that) {
    var node = this, nodes = [
        node
    ], next = [], children, i, n, index = -1;
    while(node = nodes.pop()){
        next.push(node);
        if (children = node.children) {
            for(i = 0, n = children.length; i < n; ++i){
                nodes.push(children[i]);
            }
        }
    }
    while(node = next.pop()){
        callback.call(that, node, ++index, this);
    }
    return this;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/find.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(callback, that) {
    let index = -1;
    for (const node of this){
        if (callback.call(that, node, ++index, this)) {
            return node;
        }
    }
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/sum.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(value) {
    return this.eachAfter(function(node) {
        var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
        while(--i >= 0)sum += children[i].value;
        node.value = sum;
    });
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/sort.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(compare) {
    return this.eachBefore(function(node) {
        if (node.children) {
            node.children.sort(compare);
        }
    });
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(end) {
    var start = this, ancestor = leastCommonAncestor(start, end), nodes = [
        start
    ];
    while(start !== ancestor){
        start = start.parent;
        nodes.push(start);
    }
    var k = nodes.length;
    while(end !== ancestor){
        nodes.splice(k, 0, end);
        end = end.parent;
    }
    return nodes;
}
function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while(a === b){
        c = a;
        a = aNodes.pop();
        b = bNodes.pop();
    }
    return c;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/ancestors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__() {
    var node = this, nodes = [
        node
    ];
    while(node = node.parent){
        nodes.push(node);
    }
    return nodes;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/descendants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__() {
    return Array.from(this);
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/leaves.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__() {
    var leaves = [];
    this.eachBefore(function(node) {
        if (!node.children) {
            leaves.push(node);
        }
    });
    return leaves;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/links.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__() {
    var root = this, links = [];
    root.each(function(node) {
        if (node !== root) {
            links.push({
                source: node.parent,
                target: node
            });
        }
    });
    return links;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/iterator.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function* __TURBOPACK__default__export__() {
    var node = this, current, next = [
        node
    ], children, i, n;
    do {
        current = next.reverse(), next = [];
        while(node = current.pop()){
            yield node;
            if (children = node.children) {
                for(i = 0, n = children.length; i < n; ++i){
                    next.push(children[i]);
                }
            }
        }
    }while (next.length)
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Node": (()=>Node),
    "computeHeight": (()=>computeHeight),
    "default": (()=>hierarchy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$count$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/count.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$each$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/each.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$eachBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/eachBefore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$eachAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/eachAfter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/find.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/sum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$sort$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/sort.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$ancestors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/ancestors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$descendants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/descendants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$leaves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/leaves.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$links$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/links.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/iterator.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function hierarchy(data, children) {
    if (data instanceof Map) {
        data = [
            undefined,
            data
        ];
        if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
        children = objectChildren;
    }
    var root = new Node(data), node, nodes = [
        root
    ], child, childs, i, n;
    while(node = nodes.pop()){
        if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
            node.children = childs;
            for(i = n - 1; i >= 0; --i){
                nodes.push(child = childs[i] = new Node(childs[i]));
                child.parent = node;
                child.depth = node.depth + 1;
            }
        }
    }
    return root.eachBefore(computeHeight);
}
function node_copy() {
    return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
    return d.children;
}
function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
}
function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && node.height < ++height)
}
function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
}
Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$count$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    each: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$each$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    eachAfter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$eachAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    eachBefore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$eachBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    find: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$find$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    sum: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    sort: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$sort$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ancestors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$ancestors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    descendants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$descendants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    leaves: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$leaves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    links: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$links$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    copy: node_copy,
    [Symbol.iterator]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/array.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "shuffle": (()=>shuffle)
});
function __TURBOPACK__default__export__(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}
function shuffle(array) {
    var m = array.length, t, i;
    while(m){
        i = Math.random() * m-- | 0;
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/enclose.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/array.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(circles) {
    var i = 0, n = (circles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffle"])(Array.from(circles))).length, B = [], p, e;
    while(i < n){
        p = circles[i];
        if (e && enclosesWeak(e, p)) ++i;
        else e = encloseBasis(B = extendBasis(B, p)), i = 0;
    }
    return e;
}
function extendBasis(B, p) {
    var i, j;
    if (enclosesWeakAll(p, B)) return [
        p
    ];
    // If we get here then B must have at least one element.
    for(i = 0; i < B.length; ++i){
        if (enclosesNot(p, B[i]) && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
            return [
                B[i],
                p
            ];
        }
    }
    // If we get here then B must have at least two elements.
    for(i = 0; i < B.length - 1; ++i){
        for(j = i + 1; j < B.length; ++j){
            if (enclosesNot(encloseBasis2(B[i], B[j]), p) && enclosesNot(encloseBasis2(B[i], p), B[j]) && enclosesNot(encloseBasis2(B[j], p), B[i]) && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
                return [
                    B[i],
                    B[j],
                    p
                ];
            }
        }
    }
    // If we get here then something is very wrong.
    throw new Error;
}
function enclosesNot(a, b) {
    var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function enclosesWeak(a, b) {
    var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function enclosesWeakAll(a, B) {
    for(var i = 0; i < B.length; ++i){
        if (!enclosesWeak(a, B[i])) {
            return false;
        }
    }
    return true;
}
function encloseBasis(B) {
    switch(B.length){
        case 1:
            return encloseBasis1(B[0]);
        case 2:
            return encloseBasis2(B[0], B[1]);
        case 3:
            return encloseBasis3(B[0], B[1], B[2]);
    }
}
function encloseBasis1(a) {
    return {
        x: a.x,
        y: a.y,
        r: a.r
    };
}
function encloseBasis2(a, b) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
        x: (x1 + x2 + x21 / l * r21) / 2,
        y: (y1 + y2 + y21 / l * r21) / 2,
        r: (l + r1 + r2) / 2
    };
}
function encloseBasis3(a, b, c) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x3 = c.x, y3 = c.y, r3 = c.r, a2 = x1 - x2, a3 = x1 - x3, b2 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b2 - a2 * b3, xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1, xb = (b3 * c2 - b2 * c3) / ab, ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1, yb = (a2 * c3 - a3 * c2) / ab, A = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C = xa * xa + ya * ya - r1 * r1, r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
    return {
        x: x1 + xa + xb * r,
        y: y1 + ya + yb * r,
        r: r
    };
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/siblings.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "packEnclose": (()=>packEnclose)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$enclose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/enclose.js [app-client] (ecmascript)");
;
;
function place(b, a, c) {
    var dx = b.x - a.x, x, a2, dy = b.y - a.y, y, b2, d2 = dx * dx + dy * dy;
    if (d2) {
        a2 = a.r + c.r, a2 *= a2;
        b2 = b.r + c.r, b2 *= b2;
        if (a2 > b2) {
            x = (d2 + b2 - a2) / (2 * d2);
            y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
            c.x = b.x - x * dx - y * dy;
            c.y = b.y - x * dy + y * dx;
        } else {
            x = (d2 + a2 - b2) / (2 * d2);
            y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
            c.x = a.x + x * dx - y * dy;
            c.y = a.y + x * dy + y * dx;
        }
    } else {
        c.x = a.x + c.r;
        c.y = a.y;
    }
}
function intersects(a, b) {
    var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function score(node) {
    var a = node._, b = node.next._, ab = a.r + b.r, dx = (a.x * b.r + b.x * a.r) / ab, dy = (a.y * b.r + b.y * a.r) / ab;
    return dx * dx + dy * dy;
}
function Node(circle) {
    this._ = circle;
    this.next = null;
    this.previous = null;
}
function packEnclose(circles) {
    if (!(n = (circles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(circles)).length)) return 0;
    var a, b, c, n, aa, ca, i, j, k, sj, sk;
    // Place the first circle.
    a = circles[0], a.x = 0, a.y = 0;
    if (!(n > 1)) return a.r;
    // Place the second circle.
    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
    if (!(n > 2)) return a.r + b.r;
    // Place the third circle.
    place(b, a, c = circles[2]);
    // Initialize the front-chain using the first three circles a, b and c.
    a = new Node(a), b = new Node(b), c = new Node(c);
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;
    // Attempt to place each remaining circle…
    pack: for(i = 3; i < n; ++i){
        place(a._, b._, c = circles[i]), c = new Node(c);
        // Find the closest intersecting circle on the front-chain, if any.
        // “Closeness” is determined by linear distance along the front-chain.
        // “Ahead” or “behind” is likewise determined by linear distance.
        j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
        do {
            if (sj <= sk) {
                if (intersects(j._, c._)) {
                    b = j, a.next = b, b.previous = a, --i;
                    continue pack;
                }
                sj += j._.r, j = j.next;
            } else {
                if (intersects(k._, c._)) {
                    a = k, a.next = b, b.previous = a, --i;
                    continue pack;
                }
                sk += k._.r, k = k.previous;
            }
        }while (j !== k.next)
        // Success! Insert the new circle c between a and b.
        c.previous = a, c.next = b, a.next = b.previous = b = c;
        // Compute the new closest circle pair to the centroid.
        aa = score(a);
        while((c = c.next) !== b){
            if ((ca = score(c)) < aa) {
                a = c, aa = ca;
            }
        }
        b = a.next;
    }
    // Compute the enclosing circle of the front chain.
    a = [
        b._
    ], c = b;
    while((c = c.next) !== b)a.push(c._);
    c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$enclose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a);
    // Translate the circles to put the enclosing circle around the origin.
    for(i = 0; i < n; ++i)a = circles[i], a.x -= c.x, a.y -= c.y;
    return c.r;
}
function __TURBOPACK__default__export__(circles) {
    packEnclose(circles);
    return circles;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/accessors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "optional": (()=>optional),
    "required": (()=>required)
});
function optional(f) {
    return f == null ? null : required(f);
}
function required(f) {
    if (typeof f !== "function") throw new Error;
    return f;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/constant.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "constantZero": (()=>constantZero),
    "default": (()=>__TURBOPACK__default__export__)
});
function constantZero() {
    return 0;
}
function __TURBOPACK__default__export__(x) {
    return function() {
        return x;
    };
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/siblings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/accessors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/constant.js [app-client] (ecmascript)");
;
;
;
function defaultRadius(d) {
    return Math.sqrt(d.value);
}
function __TURBOPACK__default__export__() {
    var radius = null, dx = 1, dy = 1, padding = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"];
    function pack(root) {
        root.x = dx / 2, root.y = dy / 2;
        if (radius) {
            root.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
        } else {
            root.eachBefore(radiusLeaf(defaultRadius)).eachAfter(packChildren(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"], 1)).eachAfter(packChildren(padding, root.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
        }
        return root;
    }
    pack.radius = function(x) {
        return arguments.length ? (radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optional"])(x), pack) : radius;
    };
    pack.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [
            dx,
            dy
        ];
    };
    pack.padding = function(x) {
        return arguments.length ? (padding = typeof x === "function" ? x : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+x), pack) : padding;
    };
    return pack;
}
function radiusLeaf(radius) {
    return function(node) {
        if (!node.children) {
            node.r = Math.max(0, +radius(node) || 0);
        }
    };
}
function packChildren(padding, k) {
    return function(node) {
        if (children = node.children) {
            var children, i, n = children.length, r = padding(node) * k || 0, e;
            if (r) for(i = 0; i < n; ++i)children[i].r += r;
            e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packEnclose"])(children);
            if (r) for(i = 0; i < n; ++i)children[i].r -= r;
            node.r = e + r;
        }
    };
}
function translateChild(k) {
    return function(node) {
        var parent = node.parent;
        node.r *= k;
        if (parent) {
            node.x = parent.x + k * node.x;
            node.y = parent.y + k * node.y;
        }
    };
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/round.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/dice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value;
    while(++i < n){
        node = nodes[i], node.y0 = y0, node.y1 = y1;
        node.x0 = x0, node.x1 = x0 += node.value * k;
    }
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/partition.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/round.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/dice.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root) {
        var n = root.height + 1;
        root.x0 = root.y0 = padding;
        root.x1 = dx;
        root.y1 = dy / n;
        root.eachBefore(positionNode(dy, n));
        if (round) root.eachBefore(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        return root;
    }
    function positionNode(dy, n) {
        return function(node) {
            if (node.children) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
            }
            var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            node.x0 = x0;
            node.y0 = y0;
            node.x1 = x1;
            node.y1 = y1;
        };
    }
    partition.round = function(x) {
        return arguments.length ? (round = !!x, partition) : round;
    };
    partition.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [
            dx,
            dy
        ];
    };
    partition.padding = function(x) {
        return arguments.length ? (padding = +x, partition) : padding;
    };
    return partition;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/stratify.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/accessors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/index.js [app-client] (ecmascript)");
;
;
var preroot = {
    depth: -1
}, ambiguous = {};
function defaultId(d) {
    return d.id;
}
function defaultParentId(d) {
    return d.parentId;
}
function __TURBOPACK__default__export__() {
    var id = defaultId, parentId = defaultParentId;
    function stratify(data) {
        var nodes = Array.from(data), n = nodes.length, d, i, root, parent, node, nodeId, nodeKey, nodeByKey = new Map;
        for(i = 0; i < n; ++i){
            d = nodes[i], node = nodes[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"](d);
            if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
                nodeKey = node.id = nodeId;
                nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
            }
            if ((nodeId = parentId(d, i, data)) != null && (nodeId += "")) {
                node.parent = nodeId;
            }
        }
        for(i = 0; i < n; ++i){
            node = nodes[i];
            if (nodeId = node.parent) {
                parent = nodeByKey.get(nodeId);
                if (!parent) throw new Error("missing: " + nodeId);
                if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
                if (parent.children) parent.children.push(node);
                else parent.children = [
                    node
                ];
                node.parent = parent;
            } else {
                if (root) throw new Error("multiple roots");
                root = node;
            }
        }
        if (!root) throw new Error("no root");
        root.parent = preroot;
        root.eachBefore(function(node) {
            node.depth = node.parent.depth + 1;
            --n;
        }).eachBefore(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeHeight"]);
        root.parent = null;
        if (n > 0) throw new Error("cycle");
        return root;
    }
    stratify.id = function(x) {
        return arguments.length ? (id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])(x), stratify) : id;
    };
    stratify.parentId = function(x) {
        return arguments.length ? (parentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])(x), stratify) : parentId;
    };
    return stratify;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/tree.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/index.js [app-client] (ecmascript)");
;
function defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
}
// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }
// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
}
// This function works analogously to nextLeft.
function nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
}
// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
}
// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while(--i >= 0){
        w = children[i];
        w.z += shift;
        w.m += shift;
        shift += w.s + (change += w.c);
    }
}
// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null; // default ancestor
    this.a = this; // ancestor
    this.z = 0; // prelim
    this.m = 0; // mod
    this.c = 0; // change
    this.s = 0; // shift
    this.t = null; // thread
    this.i = i; // number
}
TreeNode.prototype = Object.create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].prototype);
function treeRoot(root) {
    var tree = new TreeNode(root, 0), node, nodes = [
        tree
    ], child, children, i, n;
    while(node = nodes.pop()){
        if (children = node._.children) {
            node.children = new Array(n = children.length);
            for(i = n - 1; i >= 0; --i){
                nodes.push(child = node.children[i] = new TreeNode(children[i], i));
                child.parent = node;
            }
        }
    }
    (tree.parent = new TreeNode(null, 0)).children = [
        tree
    ];
    return tree;
}
function __TURBOPACK__default__export__() {
    var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = null;
    function tree(root) {
        var t = treeRoot(root);
        // Compute the layout using Buchheim et al.’s algorithm.
        t.eachAfter(firstWalk), t.parent.m = -t.z;
        t.eachBefore(secondWalk);
        // If a fixed node size is specified, scale x and y.
        if (nodeSize) root.eachBefore(sizeNode);
        else {
            var left = root, right = root, bottom = root;
            root.eachBefore(function(node) {
                if (node.x < left.x) left = node;
                if (node.x > right.x) right = node;
                if (node.depth > bottom.depth) bottom = node;
            });
            var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
            root.eachBefore(function(node) {
                node.x = (node.x + tx) * kx;
                node.y = node.depth * ky;
            });
        }
        return root;
    }
    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
    // applied recursively to the children of v, as well as the function
    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
    // node v is placed to the midpoint of its outermost children.
    function firstWalk(v) {
        var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
        if (children) {
            executeShifts(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
                v.z = w.z + separation(v._, w._);
                v.m = v.z - midpoint;
            } else {
                v.z = midpoint;
            }
        } else if (w) {
            v.z = w.z + separation(v._, w._);
        }
        v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    // Computes all real x-coordinates by summing up the modifiers recursively.
    function secondWalk(v) {
        v._.x = v.z + v.parent.m;
        v.m += v.parent.m;
    }
    // The core of the algorithm. Here, a new subtree is combined with the
    // previous subtrees. Threads are used to traverse the inside and outside
    // contours of the left and right subtree up to the highest common level. The
    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
    // superscript o means outside and i means inside, the subscript - means left
    // subtree and + means right subtree. For summing up the modifiers along the
    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
    // nodes of the inside contours conflict, we compute the left one of the
    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
    // Finally, we add a new thread (if necessary).
    function apportion(v, w, ancestor) {
        if (w) {
            var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
            while(vim = nextRight(vim), vip = nextLeft(vip), vim && vip){
                vom = nextLeft(vom);
                vop = nextRight(vop);
                vop.a = v;
                shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
                if (shift > 0) {
                    moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
                    sip += shift;
                    sop += shift;
                }
                sim += vim.m;
                sip += vip.m;
                som += vom.m;
                sop += vop.m;
            }
            if (vim && !nextRight(vop)) {
                vop.t = vim;
                vop.m += sim - sop;
            }
            if (vip && !nextLeft(vom)) {
                vom.t = vip;
                vom.m += sip - som;
                ancestor = v;
            }
        }
        return ancestor;
    }
    function sizeNode(node) {
        node.x *= dx;
        node.y = node.depth * dy;
    }
    tree.separation = function(x) {
        return arguments.length ? (separation = x, tree) : separation;
    };
    tree.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [
            dx,
            dy
        ];
    };
    tree.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [
            dx,
            dy
        ] : null;
    };
    return tree;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/slice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value;
    while(++i < n){
        node = nodes[i], node.x0 = x0, node.x1 = x1;
        node.y0 = y0, node.y1 = y0 += node.value * k;
    }
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/squarify.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "phi": (()=>phi),
    "squarifyRatio": (()=>squarifyRatio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/dice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/slice.js [app-client] (ecmascript)");
;
;
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while(i0 < n){
        dx = x1 - x0, dy = y1 - y0;
        // Find the next non-empty node.
        do sumValue = nodes[i1++].value;
        while (!sumValue && i1 < n)
        minValue = maxValue = sumValue;
        alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
        beta = sumValue * sumValue * alpha;
        minRatio = Math.max(maxValue / beta, beta / minValue);
        // Keep adding nodes while the aspect ratio maintains or improves.
        for(; i1 < n; ++i1){
            sumValue += nodeValue = nodes[i1].value;
            if (nodeValue < minValue) minValue = nodeValue;
            if (nodeValue > maxValue) maxValue = nodeValue;
            beta = sumValue * sumValue * alpha;
            newRatio = Math.max(maxValue / beta, beta / minValue);
            if (newRatio > minRatio) {
                sumValue -= nodeValue;
                break;
            }
            minRatio = newRatio;
        }
        // Position and record the row orientation.
        rows.push(row = {
            value: sumValue,
            dice: dx < dy,
            children: nodes.slice(i0, i1)
        });
        if (row.dice) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
        value -= sumValue, i0 = i1;
    }
    return rows;
}
const __TURBOPACK__default__export__ = function custom(ratio) {
    function squarify(parent, x0, y0, x1, y1) {
        squarifyRatio(ratio, parent, x0, y0, x1, y1);
    }
    squarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return squarify;
}(phi);
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/round.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/squarify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/accessors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/constant.js [app-client] (ecmascript)");
;
;
;
;
function __TURBOPACK__default__export__() {
    var tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], round = false, dx = 1, dy = 1, paddingStack = [
        0
    ], paddingInner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"], paddingTop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"], paddingRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"], paddingBottom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"], paddingLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constantZero"];
    function treemap(root) {
        root.x0 = root.y0 = 0;
        root.x1 = dx;
        root.y1 = dy;
        root.eachBefore(positionNode);
        paddingStack = [
            0
        ];
        if (round) root.eachBefore(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        return root;
    }
    function positionNode(node) {
        var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
        if (node.children) {
            p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
            x0 += paddingLeft(node) - p;
            y0 += paddingTop(node) - p;
            x1 -= paddingRight(node) - p;
            y1 -= paddingBottom(node) - p;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            tile(node, x0, y0, x1, y1);
        }
    }
    treemap.round = function(x) {
        return arguments.length ? (round = !!x, treemap) : round;
    };
    treemap.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [
            dx,
            dy
        ];
    };
    treemap.tile = function(x) {
        return arguments.length ? (tile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$accessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])(x), treemap) : tile;
    };
    treemap.padding = function(x) {
        return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
    };
    treemap.paddingInner = function(x) {
        return arguments.length ? (paddingInner = typeof x === "function" ? x : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+x), treemap) : paddingInner;
    };
    treemap.paddingOuter = function(x) {
        return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
    };
    treemap.paddingTop = function(x) {
        return arguments.length ? (paddingTop = typeof x === "function" ? x : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+x), treemap) : paddingTop;
    };
    treemap.paddingRight = function(x) {
        return arguments.length ? (paddingRight = typeof x === "function" ? x : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+x), treemap) : paddingRight;
    };
    treemap.paddingBottom = function(x) {
        return arguments.length ? (paddingBottom = typeof x === "function" ? x : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+x), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function(x) {
        return arguments.length ? (paddingLeft = typeof x === "function" ? x : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+x), treemap) : paddingLeft;
    };
    return treemap;
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/binary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(parent, x0, y0, x1, y1) {
    var nodes = parent.children, i, n = nodes.length, sum, sums = new Array(n + 1);
    for(sums[0] = sum = i = 0; i < n; ++i){
        sums[i + 1] = sum += nodes[i].value;
    }
    partition(0, n, parent.value, x0, y0, x1, y1);
    function partition(i, j, value, x0, y0, x1, y1) {
        if (i >= j - 1) {
            var node = nodes[i];
            node.x0 = x0, node.y0 = y0;
            node.x1 = x1, node.y1 = y1;
            return;
        }
        var valueOffset = sums[i], valueTarget = value / 2 + valueOffset, k = i + 1, hi = j - 1;
        while(k < hi){
            var mid = k + hi >>> 1;
            if (sums[mid] < valueTarget) k = mid + 1;
            else hi = mid;
        }
        if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;
        var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
        if (x1 - x0 > y1 - y0) {
            var xk = value ? (x0 * valueRight + x1 * valueLeft) / value : x1;
            partition(i, k, valueLeft, x0, y0, xk, y1);
            partition(k, j, valueRight, xk, y0, x1, y1);
        } else {
            var yk = value ? (y0 * valueRight + y1 * valueLeft) / value : y1;
            partition(i, k, valueLeft, x0, y0, x1, yk);
            partition(k, j, valueRight, x0, yk, x1, y1);
        }
    }
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/sliceDice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/dice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/slice.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(parent, x0, y0, x1, y1) {
    (parent.depth & 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(parent, x0, y0, x1, y1);
}
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/resquarify.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/dice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/squarify.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = function custom(ratio) {
    function resquarify(parent, x0, y0, x1, y1) {
        if ((rows = parent._squarify) && rows.ratio === ratio) {
            var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
            while(++j < m){
                row = rows[j], nodes = row.children;
                for(i = row.value = 0, n = nodes.length; i < n; ++i)row.value += nodes[i].value;
                if (row.dice) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);
                else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
                value -= row.value;
            }
        } else {
            parent._squarify = rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squarifyRatio"])(ratio, parent, x0, y0, x1, y1);
            rows.ratio = ratio;
        }
    }
    resquarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return resquarify;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phi"]);
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cluster": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$cluster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "hierarchy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "pack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "packEnclose": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$enclose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "packSiblings": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "partition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$partition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "stratify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$stratify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemapBinary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemapDice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemapResquarify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$resquarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemapSlice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemapSliceDice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$sliceDice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "treemapSquarify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$cluster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/cluster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$hierarchy$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/hierarchy/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$siblings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/siblings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$pack$2f$enclose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/pack/enclose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$partition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/partition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$stratify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/stratify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/binary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$dice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/dice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$sliceDice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/sliceDice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$squarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/squarify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$treemap$2f$resquarify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/treemap/resquarify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cluster": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["cluster"]),
    "hierarchy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hierarchy"]),
    "pack": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pack"]),
    "packEnclose": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["packEnclose"]),
    "packSiblings": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["packSiblings"]),
    "partition": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["partition"]),
    "stratify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stratify"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "treemap": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemap"]),
    "treemapBinary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemapBinary"]),
    "treemapDice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemapDice"]),
    "treemapResquarify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemapResquarify"]),
    "treemapSlice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemapSlice"]),
    "treemapSliceDice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemapSliceDice"]),
    "treemapSquarify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["treemapSquarify"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$node_modules$2f$d3$2d$hierarchy$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/node_modules/d3-hierarchy/src/index.js [app-client] (ecmascript) <exports>");
}}),
}]);

//# sourceMappingURL=69ed5_4d041184._.js.map