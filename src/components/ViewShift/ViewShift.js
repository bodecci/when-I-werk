import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from 'react-redux';


moment.locale('en');
BigCalendar.momentLocalizer(moment);

class ViewShift extends Component {

    componentDidMount() {
        this.getShift();
    }

    getShift = () => {
        const action = {type: 'FETCH_SHIFT'};
        this.props.dispatch(action);
    }

    render () {

        const localizer = BigCalendar.momentLocalizer(moment);
        return (
            <div>
                
                <h1>View Shift Page</h1>
                <pre>{JSON.stringify(this.props.shiftList)}</pre>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (ViewShift);