import { IDispatcher } from "../../libs/store";

export class TabActionCreator {
    constructor(private dispatcher: IDispatcher) { }

    setCurrentTab = options => this.dispatcher.dispatch(new SetCurrentTabAction(options.tabName, options.index));

    tabChildLoaded = () => this.dispatcher.dispatch(new TabChildLoadedAction());
}


export class SetCurrentTabAction { constructor(public tabName: string, public index: number) { } }

export class TabChildLoadedAction { constructor() { } }
