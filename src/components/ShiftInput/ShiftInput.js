import React, { Component } from  'react';
import { connect } from 'react-redux';


class ShiftInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newShift: {
                shiftDate: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    }

    handleChange = propertyName => event => {
        this.setState({
            newShift: {
                ...this.state.newShift, 
                [propertyName]: event.target.value
            }
        })
    }

    render () {
        console.log('this is this.state: ', this.state);
        
        return (
            <div>
                <form>
                    <input type="text" 
                            placeholder="First Name" 
                            value={this.state.newShift.firstName} 
                            onChange={this.handleChange('firstName')} />
                    <input type="text" 
                            placeholder="Last Name" 
                            value={this.state.newShift.lastName}
                            onChange={this.handleChange('lastName')} />
                    <input type="text" 
                            placeholder="Email" 
                            value={this.state.newShift.email}
                            onChange={this.handleChange('email')} />
                    <input type="date" value={this.state.newShift.shiftDate}
                    onChange={this.handleChange('shiftDate')} />
                    <input type="Submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ShiftInput;