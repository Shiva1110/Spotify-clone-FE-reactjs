import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './Signup.css';

function Signup() {

    const submitForm = (e) => {
        e.preventDefault();
        validateInputs(undefined,formValues);
        const values = Object.values(formValues);
        const initialValues = Object.values(initialValue);
        const errors = Object.values(formErrors);
        if(!values.every((val, i) => val === initialValues[i]) && errors.every(val => val === '')) {
            alert('No Errors');
        } else {
            alert('Form is having Errors');
        }
    }

    const formChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        validateInputs(e);
    }

    const initialValue = {
        email: '',
        cemail: '',
        password: '',
        name: '',
        yob: '',
        mob: '0',
        dob: '',
        gender: ''
    }
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({
        email: '',
        cemail: '',
        password: '',
        name: '',
        yob: '',
        mob: '',
        dob: '',
        gender: ''
    });

    const validateInputs = (e, values) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e) {
            if(e.target.name === 'email') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: 'You need to enter your email.'
                    })
                } else if(!emailRegex.test(e.target.value)) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "This email is invalid. Make sure it's written like example@email.com"
                    })
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ''
                    })
                }
                if(formValues.cemail) {
                    if(e.target.value !== formValues.cemail) {
                        setFormErrors({
                            ...formErrors,
                            cemail: "The email addresses don't match."
                        })
                    } else {
                        setFormErrors({
                            ...formErrors,
                            cemail: ""
                        })
                    }
                }
            } else if(e.target.name === 'cemail') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: 'You need to confirm your email.'
                    })
                } else if(e.target.value !== formValues.email) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "The email addresses don't match."
                    })
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ''
                    })
                }
            } else if(e.target.name === 'password') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "You need to enter a password."
                    })
                } else if(e.target.value.length < 8) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "Your password is too short."
                    })
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ""
                    })
                }
            } else if(e.target.name === 'name') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "Enter a name for your profile."
                    })
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ""
                    })
                }
            } else if(e.target.name === 'yob') {
                if(!e.target.value || isNaN(e.target.value) || parseInt(e.target.value) <= 1899) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "Enter a valid year."
                    })
                } else if(parseInt(e.target.value) > 1899) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ""
                    })
                }
            } else if(e.target.name === 'mob') {
                if(e.target.value === '0') {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "Select your birth month."
                    })
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ""
                    })
                }
            } else if(e.target.name === 'dob') {
                if(!e.target.value || isNaN(e.target.value) || parseInt(e.target.value) > 31 || e.target.value.includes('.')) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "Enter a valid day of the month."
                    })
                } else if(parseInt(e.target.value) <= 31) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ""
                    })
                }
            } else if(e.target.name === 'gender') {
                if(!e.target.value) {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: "Select your gender."
                    })
                } else {
                    setFormErrors({
                        ...formErrors,
                        [e.target.name]: ""
                    })
                }
            }
        }
        if(values) {
            if(!values.email) {
                formErrors.email = 'You need to enter your email.';
            }
            if(!values.cemail) {
                formErrors.cemail = 'You need to confirm your email.';
            }
            if(!values.password) {
                formErrors.password = "You need to enter a password.";
            }
            if(!values.name) {
                formErrors.name = "Enter a name for your profile.";
            }
            if(!values.yob) {
                formErrors.yob = "Enter a valid year.";
            }
            if(values.mob === '0') {
                formErrors.mob = "Select your birth month.";
            }
            if(!values.dob) {
                formErrors.dob = "Enter a valid day of the month.";
            }
            if(!values.gender) {
                formErrors.gender = "Select your gender."
            }
            setFormErrors({
                ...formErrors
            });
        }
    }

    return (
        <div className='signup'>
            <div className='logo-info'>
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="" />
                <h2>Sign up for free to start listening.</h2>
            </div>
            <div className="btns">
                <button className='google-btn'>Sign up with Google</button>
            </div>
            <div className='line'>
                <div className="hr">
                    <span>or</span>
                </div>
            </div>
            <form onSubmit={submitForm} noValidate>
                <p>What's your email?</p>
                <input className={formErrors.email ? 'invalid': ''} placeholder='Enter your email.' type="email" onChange={formChange} value={formValues.email} onBlur={validateInputs} name='email' />
                {formErrors.email && <small><CloseIcon fontSize='small'/> {formErrors.email}</small>}
                <p>Confirm your email</p>
                <input className={formErrors.cemail ? 'invalid': ''} placeholder='Enter your email again.' type="email" onChange={formChange} value={formValues.cemail} onBlur={validateInputs} name='cemail' />
                {formErrors.cemail && <small><CloseIcon fontSize='small'/> {formErrors.cemail}</small>}
                <p>Create a password</p>
                <input className={formErrors.password ? 'invalid': ''} placeholder='Create a password.' type="password" onChange={formChange} value={formValues.password} onBlur={validateInputs} name='password'/>
                {formErrors.password && <small><CloseIcon fontSize='small'/> {formErrors.password}</small>}
                <p>What should we call you?</p>
                <input className={formErrors.name ? 'invalid': ''} placeholder='Enter a profile name.' type="text" onChange={formChange} value={formValues.name} onBlur={validateInputs} name='name'/>
                {formErrors.name ? <small><CloseIcon fontSize='small'/> {formErrors.name}</small> : <small style={{color: "black", paddingTop: "5px"}}>This appears in your profile.</small>}
                <p>What's your date of birth?</p>
                <div className='dob'>
                    <input maxLength="4" className={formErrors.yob ? 'invalid': ''} placeholder='YYYY' type="text" onChange={formChange} onBlur={validateInputs} value={formValues.yob} name='yob'/>
                    <select style={formValues.mob === '0' ? {color: "gray"} : {color: "black"}} className={formErrors.mob ? 'invalid': ''} name="mob" onChange={formChange} value={formValues.mob} onBlur={validateInputs}>
                        <option value="0" disabled>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <input maxLength="2" className={formErrors.dob ? 'invalid': ''} placeholder='DD' type="text" onChange={formChange} onBlur={validateInputs} value={formValues.dob} name='dob'/>
                </div>
                {formErrors.yob && <small><CloseIcon fontSize='small'/> {formErrors.yob}</small>}
                {formErrors.mob && <small><CloseIcon fontSize='small'/> {formErrors.mob}</small>}
                {formErrors.dob && <small><CloseIcon fontSize='small'/> {formErrors.dob}</small>}
                <p>What's your gender?</p>
                <div className="gender">
                    <label htmlFor="option_male"><input type="radio" id='option_male' name='gender' onChange={formChange} value='male'/> Male</label>
                    <label htmlFor="option_female"><input type="radio" id='option_female' name='gender' onChange={formChange} value='female'/> Female</label>
                    <label htmlFor="option_non"><input type="radio" id='option_non' name='gender' onChange={formChange} value='non-binary'/> Non-binary</label>
                </div>
                {formErrors.gender && <small style={{padding: "0"}}><CloseIcon fontSize='small'/> {formErrors.gender}</small>}
                <div className="terms">
                    <p>By clicking on sign-up, you agree to Spotify's <a href="/">Terms and Conditions of Use</a>.</p>
                    <br />
                    <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="/">Spotify's Privacy Policy</a>.</p>
                </div>
                <div className='btns'>
                    <button className='signup-btn' type='Submit'>Sign Up</button>
                </div>
            </form>
            <p>Have an account? <Link to="/login">Log in</Link>.</p>
        </div>
    )
}

export default Signup;
