import React from "react";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUserFriends, FaUserAlt, FaUserTie } from "react-icons/all.js";
import { userSignIn, userSignUp } from "../api/auth";


function Login() {
  const [showSignup, setShowSignup] = useState(true);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("CUSTOMER");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  //redirect
  useEffect(() => {
    //here itslf weather the token is present or not
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");

    if (!token || !userType) {
      return;
    }
    console.log(userType);
    console.log(token);

    window.location.href = `/${userType}`;
  }, []);

  //-----onClick event for change the login page and signIn page----
  const toggleSignup = () => {
    clearState();
    setShowSignup(!showSignup);
  };

  // Clear the input
  const clearState = () => {
    setUserId("");
    setPassword("");
    setUserName("");
    setUserEmail("");
    setError(false);
    setMessage("");
  };

  const userTypeChange = (e) => {
    setUserType(e);
  };
  /*---------------On Submit function for Signin page------------*/
  const onSignUp = (e) => {
    const data = {
      name: userName,
      userId: userId,
      email: userEmail,
      userType: userType,
      password: password,
    };
    e.preventDefault();
    //------Validation-------------
    if (userId.length < 5) {
      setError(true);
      setMessage("UserId should be of 5 to 10 characters");
      return;
    } else if (password.length < 5 || password.length > 12) {
      setError(true);
      setMessage("Password should be between 5 and 12 characters");
      return;
    }
    //API call
    userSignUp(data)
      .then((res) => {
        console.log(res);
        setError(false);
        setMessage("SignUp successful");
        window.location.href = "/";
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setError(true);
          setMessage(err.response.data.message);
        }
      });
  };

  const onLogin = (e) => {
    const data = { userId, password };

    e.preventDefault();

    userSignIn(data)
      .then((res) => {
        if (res.data.message) {
          setError(true);
          setMessage(res.data.message);
          return;
        }

        setError(false);
        setMessage("Login Successful");
        console.log("In res");

        //to stord userdetails in loacal storage of browser
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("userStatus", res.data.userStatus);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userType", res.data.userType);
        window.location.href = `/${res.data.userType}`;
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status) {
          console.log(err);
          setError(true);
          setMessage(err.response.data.message);
        } else if (err.message) {
          setError(true);
          setMessage(err.message);
        }
      });
  };
  const updateSignUpData = (e) => {
    const { id, value } = e.target;

    if (id === "userId") {
      setUserId(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "email") {
      setUserEmail(value);
    } else {
      setUserName(value);
    }
  };
  // starting from
  return (
    <div
      style={{
        backgroundImage: "url('img/3.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div>
        <h1 style={{ color: "#fff", margin: "20px",fontSize:"3rem"}}>
          <span style={{color:"black"}}>CRM APPLICATION</span>
        </h1>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            Shadow: "0 0 40px 20px #fff",
            backdropFilter: "blur(3px)",
            borderWidth: "1px",
            borderColor: "rgb(33, 232, 254)",
            width: 30 + "rem",
          }}
          className="card p-3 rounded-4 shadow-lg"
        >
          <h2 className="text-center text-white">
            {showSignup ? "SIGN UP" : "LOG IN"}
          </h2>

          <form onSubmit={showSignup ? onSignUp : onLogin}>
            <div className="input-group">
              <input
                className="form-control m-2"
                type="text"
                id="userId"
                value={userId}
                placeholder="Enter the UserId..."
                onChange={updateSignUpData}
              />
            </div>
            {showSignup && (
              <>
                <div className="input-group">
                  <input
                    className="form-control m-2"
                    type="text"
                    id="userName"
                    value={userName}
                    placeholder="Enter the UserName..."
                    onChange={updateSignUpData}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="form-control m-2"
                    type="email"
                    id="email"
                    value={userEmail}
                    placeholder="Enter the Email..."
                    onChange={updateSignUpData}
                  />
                </div>
              </>
            )}
            <div className="input-group">
              <input
                className="form-control m-2"
                type="password"
                id="password"
                value={password}
                placeholder="Enter the Password..."
                onChange={updateSignUpData}
              />
            </div>
            <div className="d-flex justify-content-center alig-itmes-center mt-2 ">
              {showSignup && (
                <DropdownButton
                  title={userType}
                  id="userId"
                  variant="light"
                  align="mid"
                  onSelect={userTypeChange}
                >
                  <Dropdown.Item eventKey="CUSTOMER">
                    <FaUserFriends size={18} style={{ color: "black" }} />
                    Customer
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ENGINEER">
                    <FaUserTie size={15} style={{ color: "black" }} /> Engineer
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="ADMIN">
                    <FaUserAlt size={14} style={{ color: "black" }} /> Admin
                  </Dropdown.Item>
                </DropdownButton>
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="input-group">
                <input
                  className="btn btn-primary form-control text-white m-2"
                  type="submit"
                  value={showSignup ? "Sign Up" : "Log In"}
                />
              </div>
            </div>
            <div
              className="text-center text-white m-2"
              style={{ cursor: "pointer" }}
              onClick={toggleSignup}
            >
              {showSignup
                ? "Already have an account ? "
                : "Don't have an account ? "}
              <span
                style={{ color: "white", textDecoration: "underline" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#FF00FF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
                onClick={toggleSignup}
              >
                {showSignup ? "Log In" : "Sign Up"}
              </span>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center  ${
                error ? "text-danger" : "text-warning"
              }`}
            >
              {message}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
