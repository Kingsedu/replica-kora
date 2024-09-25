// import { useState, useEffect } from "react";
import koraLogo from "../../assets/icons/koraLogo.svg";
import { Link } from "react-router-dom";

const SignInForm = () => {

    // const navigate = useNavigate();

    //? setting up the useState in the function;
    // const [ error, setError ] = useState(true);
    
    // const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);
    // const [ hasStartedTyping, setHasStartedTyping ] = useState(false)
    // //? function for this signUp section;
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log("the form was submitted successfully");
    //     if(details.email && detail.password ){
    //         navigate('/dashbord')
    //     }
    // }
    // const isValidEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }
    // const handleOnchangeEmail = (e) =>{
    //     let emailValue = e.target.value;
    //     setHasStartedTyping(true)
    //     if(isValidEmail(emailValue)){
    //     setError(false)
    //     }
    //     else{
    //         setError(true)
    //     }
    //     setEmail(emailValue)
    // }

    // const handleOnchangePassword = (e) =>{
    //     setHasStartedTyping(true)
    //     const password = e.target.value
    //     setPassword(password)
    // }
    return (
        <div className="auth_main body_main">
            <div className="auth_header">
                <img src={koraLogo} alt="log"/>
            </div>
            <div className="headings">
                <h2>Log into your account</h2>
            </div>
            <div className="auth_content">
                <form action="#" autoComplete="off" className="login_form">
                {/* {  hasStartedTyping && error && (
                    <div className="feedback-reg danger">Invalid email address</div>
                )} */}
                <div className="input_wrap">
                    <label>Email Address</label>
                    <input type="text"/>
                </div>
                <div className="input_wrap last-child">
                    <label>Password</label>
                    <input/>
                </div>
                <div className="des"><Link>Forgot Password?</Link></div>
                <div className="input_wrap auth_btn">
                    <button 
                    type="submit"
                    disabled>
                    Log in
                    </button>
                </div>
                <div className="body_main">
                    <div>
                        if you dont have an account <Link> Sign up</Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
    }

export default SignInForm
