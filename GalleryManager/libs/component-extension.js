var originalAngularModule = angular.module;
var componentStyles = {};
angular.module = function () {
    var m = originalAngularModule.apply(this, arguments);
    m.component = function (options) {
        var styles;
        if (options.selector) {
            var componentNameCamelCase = options.selector.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });
        }
        var directiveDefinitionObject = {
            restrict: options.restrict || "E",
            template: angular.isArray(options.template) ? options.template.join(" \n ") : options.template,
            templateUrl: options.templateUrl,
            replace: options.replace || true,
            scope: options.scope || {},
            bindToController: options.bindToController || {},
            transclude: options.transclude,
            controllerAs: "vm",
            controller: componentNameCamelCase + "Component"
        };
        options.component.$inject = options.providers;
        if (options.inputs && options.inputs.length > 0) {
            for (var i = 0; i < options.inputs.length; i++) {
                directiveDefinitionObject.bindToController[options.inputs[i]] = "=";
            }
        }
        if ((options.component && options.component.styles) || options.styles) {
            styles = options.styles ? options.styles : options.component.styles;
            styles = angular.isArray(styles) ? styles.join(" \n ") : styles;
        }
        directiveDefinitionObject.compile = function () {
            return {
                pre: function (scope, element, attributes, controller, transcludeFn) {
                    if (options.transclude)
                        transcludeFn(scope, function (clone) {
                        });
                    if (styles && !componentStyles[options.selector]) {
                        componentStyles[options.selector] = true;
                        function addStyleTagToHead() {
                            var style = document.createElement("style");
                            style.setAttribute("data-selector", options.selector);
                            style.appendChild(document.createTextNode(styles));
                            document.head.appendChild(style);
                        }
                        if (document.readyState === "complete" || document.readyState === 'interactive') {
                            addStyleTagToHead();
                        }
                        else {
                            function onDocumentLoad() {
                                addStyleTagToHead();
                                window.removeEventListener("DOMContentLoaded", onDocumentLoad);
                            }
                            window.addEventListener("DOMContentLoaded", onDocumentLoad);
                        }
                    }
                    var $injector = element.injector();
                    var store = $injector.get("store");
                    var safeDigest = $injector.get("safeDigest");
                    if (scope.vm && scope.vm.storeOnChange) {
                        store.subscribe(function (state) {
                            scope.vm.storeOnChange(state);
                            safeDigest(scope);
                        });
                    }
                },
                post: function (scope) {
                    if (options.transclude && scope.vm.$transclude)
                        scope.vm.$transclude(scope, function (clone) {
                            scope.vm.clone = clone;
                        });
                    if (scope.vm && scope.vm.onInit)
                        scope.vm.onInit();
                    if (scope.vm.dispose)
                        scope.$on("$destroy", function () {
                            scope.vm.dispose();
                        });
                }
            };
        };
        m.directive(componentNameCamelCase, [function () { return directiveDefinitionObject; }]);
        m.controller(options.componentName ? options.componentName : componentNameCamelCase + "Component", options.component);
    };
    return m;
};
