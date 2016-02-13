/// <reference path="../../typings/tsd.d.ts" />

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


export class Store<IAppState> extends Rx.BehaviorSubject<IAppState> implements IStore {
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

export class Dispatcher<T> extends Rx.Subject<T> implements IDispatcher {
    constructor() {
        super()
    }

    dispatch = action => this.onNext(action);

}