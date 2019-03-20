import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import List, { ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export default class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm" ></AppBar>
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={values.firstName}
                        />
                          <ListItem
                        primaryText="Last Name"
                        secondaryText={values.lastName}
                        />
                          <ListItem
                        primaryText="Email"
                        secondaryText={values.email}
                        />
                          <ListItem
                        primaryText="Occupation"
                        secondaryText={values.occupation}
                        />
                          <ListItem
                        primaryText="City"
                        secondaryText={values.city}
                        />
                          <ListItem
                        primaryText="Bio"
                        secondaryText={values.bio}
                        />
                       
                    </List>
                    <br/>
                    <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton 
                    label="Continue & Complete"
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
    button : {
        margin:15
    }
}

