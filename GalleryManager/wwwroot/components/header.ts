export class HeaderComponent {
    constructor(private $rootScope, private $route) {
        $rootScope.$on("$viewContentLoaded", () => { this.currentPath = $route.current.$$route.originalPath; });
    }
    currentPath = null;
}