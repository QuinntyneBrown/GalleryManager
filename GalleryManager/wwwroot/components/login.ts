export class LoginComponent {
    constructor(private invokeAsync, private loginRedirect, private userActionCreator) { }
    
    tryToLogin = () => {
        this.invokeAsync({
            action: this.userActionCreator.tryToLogin,
            params: { username: this.username, password: this.password }
        }).then(results => {
            this.loginRedirect.redirectPreLogin();
        });    
    }

    username = "quinntyne@hotmail.com";
    password = "password";
}

