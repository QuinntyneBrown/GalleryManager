import { IAppState } from "./store";

angular.module("invokeAsync", []).value("invokeAsync", options => {
    var store = angular.element(document.body).injector().get("store");
    var $q = angular.element(document.body).injector().get("$q");


    if (angular.isFunction(options)) { options = { action: options } };
    var deferred = $q.defer();
    var actionId = options.params ? options.action(options.params) : options.action();
    var subscription = store.subscribe(function (state: IAppState) {
        if (state.lastModifiedByActionId == actionId) {
            subscription.dispose();
            deferred.resolve();
        }
    });
    return deferred.promise;
});