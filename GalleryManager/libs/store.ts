/// <reference path="../typings/tsd.d.ts" />

export interface IAppState {
    lastTriggeredByActionId: any;
}

export type AppState = {
    lastTriggeredByActionId: any;
}

export interface IDispatcher {
    dispatch(action): any;
    subscribe(onNext): void;
}

export interface IStore {
    onNext(action);
    subscribe(onNext);
}

class InitialStateProvider implements ng.IServiceProvider {
    initialState;
    configure = value => this.initialState = value;
    $get = () => this.initialState;
}

class ReducersProvider implements ng.IServiceProvider {
    reducers = [];
    configure = value => this.reducers.push(value);
    $get = () => this.reducers;
}

class Store<T> extends Rx.BehaviorSubject<T> implements IStore {
    constructor(dispatcher: IDispatcher, initialState: T, private reducers: any[]) {
        super(initialState);
        this.state = initialState;
        dispatcher.subscribe(action => this.onDispatcherNext(action));
    }

    onDispatcherNext = (action) => {        
        for (var i = 0; i < this.reducers.length; i++) {
            this.state = this.reducers[i](this.state, action);
        }
        this.state = this.setLastTriggeredByActionId(this.state, action);
        this.onNext(this.state);
    }

    setLastTriggeredByActionId = (state, action) => {        
        state.lastTriggeredByActionId = action.id;
        return state;
    }

    state: T;

}

function guid () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

class Dispatcher<T> extends Rx.Subject<T> implements IDispatcher {
    constructor() { super() }
    
    dispatch = action => this.onNext(action);

}

angular.module("store", [])
    .service("store", ["dispatcher", "initialState", "reducers", Store])
    .service("dispatcher", [Dispatcher])
    .provider("reducers", ReducersProvider)
    .provider("initialState", InitialStateProvider)
    .value("guid",guid)
    .run(["store", store => { } ]);

