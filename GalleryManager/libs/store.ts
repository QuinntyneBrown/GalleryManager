/// <reference path="../typings/tsd.d.ts" />

export interface IAppState {

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

class Store<IAppState> extends Rx.BehaviorSubject<IAppState> implements IStore {
    constructor(dispatcher: IDispatcher, initialState: IAppState, private reducers: any[]) {
        super(initialState);
        dispatcher.subscribe(this.onDispatcherNext);
    }

    onDispatcherNext = (action) => {
        for (var i = 0; i < this.reducers.length; i++) {
            this.state = this.reducers[i](this.state, action);
        }
        this.onNext(this.state);
    }

    state: IAppState;

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
    .run(["store", store => { } ]);
