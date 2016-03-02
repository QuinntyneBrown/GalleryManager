import { CanActivate, Component } from "../../../libs/component-decorators";
import { TabActionCreator } from "../../actions";

@Component({
    templateUrl: "wwwroot/components/shared/tab-title.html",
    selector: "tab-title",
    providers: ["tabActionCreator"]
})
export class TabTitleComponent {
    constructor(private $attrs: angular.IAttributes, private tabActionCreator: TabActionCreator) {}    
    storeOnChange = state => { }
    ngOnInit = () => this.tabActionCreator.tabChildLoaded();
    onTabTitleClick = () => this.tabActionCreator.setCurrentTab({
        tabName: (<any>this.$attrs).$$element[0].getAttribute("tabs-name"),
        index: (<any>this.$attrs).$$element[0].getAttribute("index")
    });
}