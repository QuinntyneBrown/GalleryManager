export class LoginComponent {

    constructor(private $location, private invokeAsync, private userActionCreator) { }
    
    tryToLogin = () => {
        this.invokeAsync({
            action: this.userActionCreator.tryToLogin,
            params: { username: this.username, password: this.password }
        }).then(results => {
            this.$location.path("/gallery-list");
        });    
    }

    username;
    password;
}

