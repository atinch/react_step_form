import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonelDetails from './FormPersonelDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''

    }

    //proceed the next step 
    nextStep = () => {
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

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonelDetails
                    nextStep={this.nextStep}
                    prevStep={this.previousStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                )
            case 3:
            return (
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.previousStep}
                values={values}
            />
            )
            case 4:
                return (
                    <Success/>
                )
            default:
        }
    }
}

export default UserForm
