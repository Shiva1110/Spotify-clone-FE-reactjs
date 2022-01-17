import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import './Login.css';

function Login() {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/signup');
    }

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        remember: true
    });

    const [showErrorBanner, setShowErrorBanner] = useState(false);

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    });

    const formChanges = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        validateInputs(e);
    }

    const validateInputs = (e, values) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e) {
            if(e.target.name === 'email') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: 'Please enter your Spotify email address.'
                    });
                } else if(!emailRegex.test(e.target.value)) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: 'Please enter a valid email address.'
                    });
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ''
                    });
                }
            } else if (e.target.name === 'password') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: 'Please enter your password.'
                    });
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ''
                    });
                }
            }
        }
        if(values) {
            if(!values.email) {
                formErrors.email = 'Please enter your Spotify email address.';
            }
            if(!values.password) {
                formErrors.password = "Please enter your password.";
            }
            setFormErrors({
                ...formErrors
            });
        }
    }

    const logInSubmit = (e) => {
        e.preventDefault();
        validateInputs(undefined, formValues);
        const errors = Object.values(formErrors);
        if(errors.every(val => val === '')) {
            setShowErrorBanner(false);
            alert('logged in\n\n'+JSON.stringify(formValues));
        } else {
            setShowErrorBanner(true);
        }
    }

    return (
        <div className='login'>
            <div className='header-img'>
                <img  src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="" />
            </div>
            <div className="main-content">
                <div className="top-content">
                    <p>To coninue, log in to Spotify.</p>
                    {showErrorBanner && <div className="error">
                        <InfoIcon/> <p>Incorrect Email or password.</p>
                    </div>}
                    <button>Continue with Google</button>
                </div>
                <div className='line' style={{width: "100%", paddingLeft: "0"}}>
                    <div className="hr">
                        <span style={{padding: "0 20px", color: "black"}}>OR</span>
                    </div>
                </div>
                <form onSubmit={logInSubmit} noValidate>
                    <p>Email address</p>
                    <input className={formErrors.email ? 'invalid': ''} placeholder='Email address' type="email" name='email' onChange={formChanges} value={formValues.email} onBlur={validateInputs}/>
                    {formErrors.email && <small><InfoIcon fontSize='small' style={{marginRight: "5px"}}/> {formErrors.email}</small>}
                    <p>Password</p>
                    <input className={formErrors.password ? 'invalid': ''} placeholder='Password' type="password" name='password' onChange={formChanges} value={formValues.password}/>
                    {formErrors.password && <small><InfoIcon fontSize='small' style={{marginRight: "5px"}}/> {formErrors.password}</small>}
                    <span>Forgot your password?</span>
                    <div className="btn-rem">
                        <label><input type="checkbox" onChange={() => formValues.remember = !formValues.remember} defaultChecked={formValues.remember}/> Remember me</label>
                        <button type='Submit'>Log In</button>
                    </div>
                </form>
                <div className='line' style={{width: "100%", paddingLeft: "0"}}>
                    <div className="hr"></div>
                </div>
                <div className="last-content">
                    <p>Don't have an account?</p>
                    <button onClick={navigateTo}>Sign up for spotify</button>
                </div>
            </div>
        </div>
    )
}

export default Login
