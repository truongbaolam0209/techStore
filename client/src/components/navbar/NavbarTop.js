import React from 'react';
import styled from 'styled-components';
import { IoIosCart, IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';



const NavbarTop = props => {
    return (
        <React.Fragment>
            <NavTopBox>
                <nav className="nav-top">
                    <label className="logo-image">HENDO</label>
                    <ul>
                        <li>
                            <div className="search-box">
                                <input type="text" placeholder="Search on Hendo ..." className="search-placeholder" />
                                <div className="search-btn"><i className="fa fa-search" /></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <IoIosCart />
                                <div className="icon-text">My Account</div>
                            </div>
                        </li>
                        <li>
                            <Link to='/login'>
                                <IoMdCart />
                                <div className="icon-text">Logout</div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/admin'>
                                <IoMdCart />
                                <div className="icon-text">Admin</div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/upload'>
                                <IoMdCart />
                                <div className="icon-text">Upload</div>
                            </Link>
                        </li>
                        <li>
                            <div>
                                <div><i className="fas fa-cart-arrow-down" /></div>
                                <div className="icon-text">Cart</div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </NavTopBox>
        </React.Fragment>
    );
};
export default NavbarTop;







const NavTopBox = styled.div`
    width: 100%;
    background: white;

   .nav-top {
    height: 65px;
    width: 1200px;
    margin: auto;
    }
    .nav-top ul {
        float: right;
        text-align: center;
        margin: 0;
        height: 100%;
    }
    .nav-top ul li {
        display: inline-block;
        margin: 0 5px;
        padding: 7px 6px 0 0;
        vertical-align: middle;
    }
    .nav-top ul li a {
        color: white;
        font-size: 15px;
    }
    .nav-top a div {
        height: 16px;
        color: black;
    }
    ul li i {
        color: var(--grey);
    }


    label.logo-image {
        color: var(--pink);
        line-height: 80px;
        font-weight: bold;
        font-size: 30px;
    }
    .check-btn {
        color: white;
        float: right;
        font-size: 40px;
        display: none;
    }

    .search-box {
        /* height: 40px; */
        border-radius: 40px;
        padding: 10px;
        /* transform: translate(-50%, -50%); */
        background: var(--grey);
        margin-right: 20px;
    }
    .search-placeholder {
        border: none;
        background: none;
        outline: none;
        /* float: left; */
        padding: 0 0 0 10px;
        color: black;
        font-size: 16px;
        /* transition: 0.6s; */
        line-height: 20px;
        width: 200px;
        transition: 0.5s;
    }
    .search-btn {
        border-radius: 50%;

        float: right;
        width: 40px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fa-search {
        color: white;
    }
`;
