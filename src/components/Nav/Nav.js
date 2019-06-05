import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render (){
        return (
            <div className="nav">
                <ul>
                    <li><Link to='/view_shift'>List of Shifts</Link></li>
                    <li><Link to='create_shift'>Create Shift</Link></li>
                </ul>
                
                
            </div>
        );
    }

}

export default Nav;