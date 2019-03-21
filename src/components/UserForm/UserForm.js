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
		errors: {},
		formErrors: {email: ''}
	}

	validate = () => {
		let isError = false;
		const errors = {};

		if(this.state.email.length < 10) {
			errors.email = 'email needs to be at least 10 characters long'
			isError = true;
		}
		if(isError) {
			this.setState({
				...this.state,
				...errors
			})

		}
		return isError;
	}
	//proceed the next step 
	nextStep = () => {
		const err = this.validate();
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
		const { firstName, lastName, email, selectedDate, occupation, city, bio, emailError } = this.state;
		const values = { firstName, lastName, email, selectedDate, occupation, city, bio, emailError }
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
