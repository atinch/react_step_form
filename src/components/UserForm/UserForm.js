import React, { Component, Fragment } from 'react'
import FormUserDetails from '../FormUserDetails'
import FormPersonelDetails from '../FormPersonelDetails';
import Confirm from '../Confirm';
import Success from '../Success';




class UserForm extends Component {

	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		selectedDate: new Date('2019-03-01'),
		occupation: '',
		city: '',
		bio: '',
		emailError: '',
		firstNameError: '',
		lastNameError: ''
	}
	
	validate = () => {
		let isError = false;
		let errors = {};

		if(this.state.firstName.length < 3 ) {
			errors.firstNameError = 'username is so short';
			isError = true;
		} 
		if(this.state.lastName.length < 3 ) {
			errors.lastNameError = 'lastname is so short';
			isError = true;
		} 
		if(this.state.email.length < 5) {
			errors.emailError = 'email needs to be at least 10 characters long';
			isError = true;
		} 
		if(this.state.email.indexOf('@') === -1) {
			errors.emailError = 'email is not valid';
			isError = true;
		} 
			if(isError) {
			this.setState({
				...errors
			})

		}
		return isError;
	}
	//proceed the next step 
	nextStep = () => {
		const err = this.validate();
		console.log(this.state.firstNameError);
		
		if (err) return false;

		const { step } = this.state;
		this.setState({
			step: step + 1
		})
	};
	//proceed the previous step 
	previousStep = () => {
		const { step } = this.state;
		this.setState({
			step: step === 1 ? 1 : step - 1
		})
	};

	//handle field changes
	handleChange = input => e => {
		this.setState({ [input]: e.target.value })
	}

	handleDateChange = date => {
		this.setState({ selectedDate: date });
	};

	render() {
		const { step } = this.state;
		const { firstName, lastName, email, selectedDate, occupation, city, bio, emailError, firstNameError, lastNameError } = this.state;
		const values = { firstName, lastName, email, selectedDate, occupation, city, bio, emailError, firstNameError, lastNameError }
		return (
			<Fragment>
				{step === 1 &&
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						handleDateChange={this.handleDateChange}
						values={values}
					/>
				}
				{step === 2 &&
					<FormPersonelDetails
						nextStep={this.nextStep}
						prevStep={this.previousStep}
						handleChange={this.handleChange}
						values={values}
					/>
				}
				{
					step === 3 &&
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.previousStep}
						values={values}
					/>
				}
				{step === 4 && <Success />}
			</Fragment>

		)
	}
}

export default UserForm
