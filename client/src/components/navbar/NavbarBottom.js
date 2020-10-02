import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarBottom = props => {
    return (
        <React.Fragment>
            <NavTopBottom>
                <nav className="nav-bottom">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/mobile">Mobile & Smart Tech</Link>
                        </li>
                        <li>
                            <Link to='/'>TV & Home Theatre</Link>
                        </li>
                        <li>
                            <Link to='/'>Computer & Gaming</Link>
                        </li>
                        <li>
                            <Link to='/'>Gift Voucher</Link>
                        </li>
                        <li>
                            <Link to='/'>Corporate</Link>
                        </li>
                    </ul>
                </nav>
            </NavTopBottom>
        </React.Fragment>
    );
};
export default NavbarBottom;






const NavTopBottom = styled.div`
    width: 100%;
    background: var(--dark1);


    .nav-bottom {
    height: 40px;
    width: 1200px;
    margin: auto;
    }
    .nav-bottom ul {
        text-align: center;
        margin: 0;
        height: 100%;
    }
    .nav-bottom ul li {
        display: inline-block;
        padding: 7px 7px 0 0;
        vertical-align: middle;
    }
    .nav-bottom ul li a {
        color: white;
        font-size: 17px;
        transition: 0.3s;
        padding: 0 20px;
    }
    .nav-bottom ul li a:hover {
        color: var(--pink);
        cursor: pointer;
    }
`;