import { Component } from "../../../libs/component-decorators";

@Component({
    templateUrl: "wwwroot/components/general/header.html",
    selector: "app-header",
    providers: ["$rootScope","$route"]
})
export class HeaderComponent {
    constructor(private $rootScope, private $route) {
        $rootScope.$on("$viewContentLoaded", () => { this.currentPath = $route.current.$$route.originalPath; });
    }
    currentPath = null;
}