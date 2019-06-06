import React, { Component } from  'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class ShiftInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newShift: {
                email: '',
                firstName: '',
                lastName: '',
                shiftStart: '',
                shiftEnd: '',
                timeStart: '08:00',
                timeEnd: '17:00'
            }
        }
    }

    addNewShift = (event) => {
        
        console.log('Form Submitted');
        event.preventDefault();
        console.log('newShift:', this.state.newShift);

        this.props.dispatch({type: 'ADD_SHIFT', payload: this.state.newShift});
        // swal("Good Job!", "Shift created", "success");
        this.setState({
            newShift: {
                email: '',
                firstName: '',
                lastName: '',
                shiftStart: '',
                shiftEnd: '',
            }
        });
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
        // console.log('this is this.state: ', this.state);
        
        return (
            <div>
                <form onSubmit={this.addNewShift}>
                    <p>First Name:<input type="text" 
                            placeholder="First Name" 
                            value={this.state.newShift.firstName} 
                            onChange={this.handleChange('firstName')} /></p>
                    <p>Last Name: <input type="text" 
                            placeholder="Last Name" 
                            value={this.state.newShift.lastName}
                            onChange={this.handleChange('lastName')} /></p>
                    <p>Email: <input type="text" 
                            placeholder="Email" 
                            value={this.state.newShift.email}
                            onChange={this.handleChange('email')} /></p>
                            <br></br>
                    <p>Start Shift: <input type="date" value={this.state.newShift.shiftStart}
                    onChange={this.handleChange('shiftStart')} />
                                    <input type="time" value={this.state.newShift.timeStart}
                    label="Time Start" onChange={this.handleChange('timeStart')} />
                    </p>
                    
                    <p>End Shift: <input type="date" value={this.state.newShift.shiftEnd}
                    label="End Shift" onChange={this.handleChange('shiftEnd')} />
                                <input type="time" value={this.state.newShift.timeEnd}
                    label="Time End" onChange={this.handleChange('timeEnd')} />
                    </p>
                    
                    <Button className="button" variant="contained" color="green" 
                        type = "Submit">
                Submit</Button>
                </form>
            </div>
        )
    }
}

export default connect() (ShiftInput);