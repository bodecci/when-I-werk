import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from 'react-redux';
import ViewShiftRow from './ViewShiftRow';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';


// declarations for table styles
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


// moment.locale('en');
// BigCalendar.momentLocalizer(moment);

class ViewShift extends Component {

    componentDidMount() {
        this.getShift();
    }

    getShift = () => {
        const action = {type: 'FETCH_SHIFT'};
        this.props.dispatch(action);
    }

    render () {
        // const localizer = BigCalendar.momentLocalizer(moment);
        return (
            <div>
                
                <h1>View Shift Page</h1>
                {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
    <Paper>
      <Table>
        <TableHead>
          <TableRow position="fixed">
            <CustomTableCell align="left">Emp ID</CustomTableCell>
            <CustomTableCell align="left">First Name</CustomTableCell>
            <CustomTableCell align="left">Last Name</CustomTableCell>
            <CustomTableCell align="left">Start </CustomTableCell>
            <CustomTableCell align="left">End </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
                 { this.props.reduxState.shiftList.map((shiftList, id) => {
                      return (<ViewShiftRow history={this.props.history}
                                 key={id} shiftList={shiftList} />);
                    }) 
                    }
        </TableBody>
        </Table>
        </Paper>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps) (ViewShift);