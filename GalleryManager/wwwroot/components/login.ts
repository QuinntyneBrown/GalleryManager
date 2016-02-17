export class LoginComponent {

    constructor() {

    }
    
    static canActivate = () => [
        "$q", $q => {
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        }
    ]

}

