import * as components from "./components";
var app = (<any>angular.module("components", [ "store" ]));
for (var componentName in components) { app.component(components[componentName].config); }