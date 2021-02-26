import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div class="container-fluid h-100">
                    <div class="login-container h-100 d-flex align-items-center justify-content-center">
                        <div class="login-form">
                            <div class="page-header mb-4" id="banner">
                                <div class="text-center">
                                    <a href="#"><img src="../shared/img/LOGO.png" /></a>
                                </div>
                            </div>
                            <div class="main-div">
                                <div class="panel mb-4">
                                    <h2 class="text-center">Sign in to your account</h2>
                                </div>
                                <form id="Login">
                                    <div class="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="login_email" class="form-control" id="login_email" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="login_password" class="form-control" id="login_password" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <div class="custom-control custom-checkbox">
                                            <input id="remember_me" class="custom-control-input" name="remember_me" type="checkbox" />
                                            <label for="remember_me" class="custom-control-label" > Remember me</label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <button onclick="alert('Email: ' + $('#login_email').val() + ', PW: ' + $('#login_password').val() + ', Remember: ' + $('#remember_me').prop('checked'));"
                                            type="submit" name="login_continue" id="login_continue" class="btn btn-primary">Continue</button>
                                    </div>
                                    <div class="forgot">
                                        <a href="">Forgot password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="footer">
                    <div class="container">
                        <div class="row text-center text-xs-center text-sm-center text-md-left">
                            <div class="col-xs-12 col-md-12 text-center">
                                <ul class="list-unstyled quick-links ml-auto">
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login;
