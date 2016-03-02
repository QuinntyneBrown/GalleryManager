import { CanActivate, Component } from "../../../libs/component-decorators";
import { TabActionCreator } from "../../actions";

@Component({
    templateUrl: "wwwroot/components/shared/tab-content.html",
    selector: "tab-content",
    providers: ["tabActionCreator"]
})
export class TabContentComponent {
    constructor(private tabActionCreator: TabActionCreator) { }
    storeOnChange = state => { }
    ngOnInit = () => this.tabActionCreator.tabChildLoaded();    
}