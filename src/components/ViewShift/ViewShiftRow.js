import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ViewShift from './ViewShift';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class ViewShiftRow extends Component {


    render() {
        return (
             <TableRow>
              <CustomTableCell align="left"><div>{this.props.shiftList.Employee_ID}</div></CustomTableCell>
              <CustomTableCell align="left">{this.props.shiftList.First_Name}</CustomTableCell>
              <CustomTableCell align="left">{this.props.shiftList.Last_Name}</CustomTableCell>
              <CustomTableCell align="left">{this.props.shiftList.Start_Time}</CustomTableCell>
              <CustomTableCell align="left">{this.props.shiftList.End_Time}</CustomTableCell>
            </TableRow>

        )
    }
}

export default ViewShiftRow;