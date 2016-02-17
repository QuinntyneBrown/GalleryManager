/// <reference path="../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InitialStateProvider = (function () {
    function InitialStateProvider() {
        var _this = this;
        this.configure = function (value) { return _this.initialState = value; };
        this.$get = function () { return _this.initialState; };
    }
    return InitialStateProvider;
})();
var ReducersProvider = (function () {
    function ReducersProvider() {
        var _this = this;
        this.reducers = [];
        this.configure = function (value) { return _this.reducers.push(value); };
        this.$get = function () { return _this.reducers; };
    }
    return ReducersProvider;
})();
var Store = (function (_super) {
    __extends(Store, _super);
    function Store(dispatcher, initialState, reducers) {
        var _this = this;
        _super.call(this, initialState);
        this.reducers = reducers;
        this.onDispatcherNext = function (action) {
            for (var i = 0; i < _this.reducers.length; i++) {
                _this.state = _this.reducers[i](_this.state, action);
            }
            _this.state = _this.setLastTriggeredByActionId(_this.state, action);
            _this.onNext(_this.state);
        };
        this.setLastTriggeredByActionId = function (state, action) {
            state.lastTriggeredByActionId = action.id;
            return state;
        };
        this.state = initialState;
        dispatcher.subscribe(function (action) { return _this.onDispatcherNext(action); });
    }
    return Store;
})(Rx.BehaviorSubject);
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        var _this = this;
        _super.call(this);
        this.dispatch = function (action) { return _this.onNext(action); };
    }
    return Dispatcher;
})(Rx.Subject);
angular.module("store", [])
    .service("store", ["dispatcher", "initialState", "reducers", Store])
    .service("dispatcher", [Dispatcher])
    .provider("reducers", ReducersProvider)
    .provider("initialState", InitialStateProvider)
    .value("guid", guid)
    .run(["store", function (store) { }]);
