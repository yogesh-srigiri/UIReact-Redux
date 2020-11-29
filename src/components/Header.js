import React from 'react';

import { Link, Route } from 'react-router-dom';
import Main from './Main';
import Chart from './Chart';


const Header = () => {
    return (
        <div>
            <Link className="btn btn-light" to="/">Input</Link>
            <Link className="btn btn-light" to="/chart">Chart</Link>
            <div>

                <Route path="/" component={Main} exact />
                <Route path="/chart" component={Chart} />

            </div>
        </div>

    )
}


export default Header;