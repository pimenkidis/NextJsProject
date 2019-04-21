import React, { Component } from 'react';
import Nav from './bagian/Nav';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            d: {
                email: '',
                password: ''
            }

        })
    }
   
    onChange() {
        this.setState({
            d: {
                email: this.refs.email.value,
                password: this.refs.password.value
            }
        })
    }
    login() {
        Axios.post("http://sampeweweh.dx.am/index.php/tps/login", this.state.d).then((response) => {
            if (response.data.length === 0) { console.log("gagal"); }
            else {
                localStorage.setItem("user", JSON.stringify(response.data));
               // console.log(JSON.parse(localStorage.getItem("user")));
                var aa = JSON.parse(localStorage.getItem("user"))
                console.log(aa[0].nama)
                window.location.href = "/admin/AdmBeranda";
            }

        })
    }
    logout()
    {
        console.log(JSON.parse(localStorage.getItem("user")))
        localStorage.clear();
        console.log(JSON.parse(localStorage.getItem("user")))
    }
    render() {
        return (
            <div>
                <Nav />
                Login
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" ref="email" onChange={this.onChange.bind(this)}
                                    className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                <small id="helpId" className="form-text text-muted">Help text</small>
                                <label>Password</label>
                                <input type="text" ref="password" onChange={this.onChange.bind(this)}
                                    className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                                <small id="helpId" className="form-text text-muted">Help text</small>
                            </div>
                            <button onClick={this.login.bind(this)} type="button" className="btn btn-success">Login</button>
                            <button onClick={this.logout.bind(this)} type="button" className="btn btn-success">Logout</button>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Login;