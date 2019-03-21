import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

//import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';


export default class FormUserDetails extends Component {

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	handleDateChange = date => {
		this.props.handleDateChange(date);
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter User Details" ></AppBar>
					<TextField
						hintText="Enter your first name"
						floatingLabelText="First Name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/> <br />

					<TextField
						hintText="Enter your last name"
						floatingLabelText="Last Name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/> <br />

					<TextField
						hintText="Enter your email"
						floatingLabelText="Email"
						onChange={handleChange('email')}
						defaultValue={values.email}
						//errorText = {values.emailError}
					/>
					<br />

					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker 
							margin="normal"
							label="Select Date"
							format={"dd/MM/yyyy"}
							value={values.selectedDate}
							onChange={this.handleDateChange}
						/>
					</MuiPickersUtilsProvider>
					<br />

					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
					/>

				</React.Fragment>

			</MuiThemeProvider>
		)
	}
}

const styles = {
	button: {
		margin: 15
	}
}

