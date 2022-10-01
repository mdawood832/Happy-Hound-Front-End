import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			username: '',
			password: ''
		});
	}

    render() {
        return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					
					

					<div className="username">
						<input
							type="text"
							placeholder="Enter your username"
							name="username"
							value={this.state.username}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;