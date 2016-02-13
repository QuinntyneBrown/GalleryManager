import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';

export class Store<T> extends BehaviorSubject<T> {
    constructor(initialState) {
        super(initialState);
    }
}


export class Dispatcher {
    constructor() {

    }
}