import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import setCurrentUser from "../../actions/currentUser";
import decode from 'jwt-decode'
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let User = useSelector((state) => state.currentUserReducer);

  const handleLogOut = ()=>{
    dispatch({type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 <  new Date().getTime()){
        handleLogOut()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);



  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search...." />
          <img
            src={search}
            alt="search-png"
            width="18"
            className="search-icon"
          />
        </form>
        {User === null ? (
          <Link to="/auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="13px"
              py="8px"
              borderRadius="50%"
            >
              <Link style={{ textDecoration: "none", color: "white" }} to={`/user/${User?.result._id}`}>
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogOut}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};
