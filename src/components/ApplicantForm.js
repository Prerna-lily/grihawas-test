import React, { useEffect, useContext, useState, useRef } from 'react';  // Corrected import!
import { useForm } from 'react-hook-form';
import './ApplicantForm.css';
import { useNavigate } from 'react-router-dom';
import logoOrange from './images/logo y.png';
import { FormContext } from '../FormContext';

const ApplicantForm = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm();
    const navigate = useNavigate();

    const [addSecondApplicant, setAddSecondApplicant] = useState(false);
    const formRef = useRef(null); // Create a ref for the form

    useEffect(() => {
        // Initialize the form with data from the context
        reset(formData);
        setAddSecondApplicant(formData.addSecondApplicant || false);
    }, [formData, reset]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleAddSecondApplicantChange = (e) => {
        const newValue = e.target.checked;
        setAddSecondApplicant(newValue);
        setValue('addSecondApplicant', newValue);
    };

    useEffect(() => {
        if (addSecondApplicant) {
            setValue('secondPan', getValues('pan'));
            setValue('secondAadhar', getValues('aadhar'));
        } else {
            setValue('secondPan', '');
            setValue('secondAadhar', '');
        }
    }, [addSecondApplicant, setValue, getValues]);

    useEffect(() => {
        // If addSecondApplicant is true and pan/aadhar exist, populate the second applicant fields
        if (addSecondApplicant && getValues('pan') && getValues('aadhar')) {
            setValue('secondPan', getValues('pan'));
            setValue('secondAadhar', getValues('aadhar'));
        }
    }, [addSecondApplicant, getValues, setValue]);

    const onSubmit = (data) => {
        updateFormData(data);
        navigate('/registration/flat-details');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToHome = () => {
        navigate('/');
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.scrollTo(0, 0);
    };

    const sharedInputProps = {
        type: 'text',
        className: 'input-field',
        required: true,
    };

    const isValidDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return !isNaN(date.getTime());
        } catch (e) {
            return false;
        }
    };

    const isAdult = (dateString) => {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    };

    return (
        <div className="applicantFormWithHeaderFooter">
            <div style={{ marginTop: '20px' }}>
                <form className="applicant-form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <div className="logo-container">
                        <a onClick={() => navigate('/')}>
                            <img src={logoOrange} alt="Logo" className="logo" />
                        </a>
                    </div>
                    <br />
                    <h2>SOLE/FIRST APPLICANT'S DETAILS:</h2>

                    <div className="form-grid">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    {...register('firstName', { required: true })}
                                    className="input-field first-name-field"
                                />
                                {errors.firstName && <p className="error">First name is required</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    {...register('lastName', { required: true })}
                                    className="input-field last-name-field"
                                />
                                {errors.lastName && <p className="error">Last name is required</p>}
                            </div>
                        </div>
                         {/* Add Father's Name Field */}
                         <div className="form-group full-width">
                                <label htmlFor="fatherName">Father's Name</label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    {...register('fatherName', { required: true })}
                                    className="input-field father-name-field"
                                />
                                {errors.fatherName && <p className="error">Father's name is required</p>}
                            </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dob"
                                    {...register('dob', {
                                        required: "Date of birth is required",
                                        validate: {
                                            isValid: (value) => isValidDate(value) || "Please enter a valid date",
                                            isOldEnough: (value) => isAdult(value) || "Must be at least 18 years old",
                                        },
                                    })}
                                    className="input-field"
                                    required
                                />
                                {errors.dob && <p className="error">{errors.dob.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender <br /></label>
                                <select
                                    id="gender"
                                    name="gender"
                                    {...register('gender', { required: true })}
                                    className="input-field"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && <p className="error">Gender is required</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Mobile No.</label>
                                <div className="phone-input">
                                    <span>+91</span>
                                    <input
                                        type="tel"
                                        id="phone"
                                        {...register('phone', {
                                            required: true,
                                            pattern: /^[0-9]{10}$/,
                                        })}
                                        className="input-field"
                                        required
                                        placeholder="Phone Number"
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="error">
                                        Phone number is required and must be 10 digits.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                })}
                                className="input-field"
                                required
                            />
                            {errors.email && <p className="error">Valid email is required</p>}
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="address">Residential Address</label>
                            <input
                                id="address"
                                {...register('address', { required: true })}
                                {...sharedInputProps}
                                className="input-field"
                                required
                            />
                            {errors.address && <p className="error">Address is required</p>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input id="state" {...register('state', { required: true })} {...sharedInputProps} />
                                {errors.state && <p className="error">State is required</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City <br /></label>
                                <input id="city" {...register('city', { required: true })} {...sharedInputProps} />
                                {errors.city && <p className="error">City is required</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="pin">PIN Code</label>
                                <input id="pin" {...register('pin', { required: true, pattern: /^[0-9]{6}$/ })} {...sharedInputProps} />
                                {errors.pin && <p className="error">Valid PIN code is required</p>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="pan">PAN No.</label>
                                <input id="pan" {...register('pan', { required: true, pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/ })} {...sharedInputProps} />
                                {errors.pan && <p className="error">Valid PAN number is required</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="aadhar">Aadhar No.</label>
                                <input type="text" id="aadhar" {...register('aadhar', { required: true, pattern: /^[0-9]{12}$/ })} className="input-field" required />
                                {errors.aadhar && <p className="error">Valid Aadhar number is required</p>}
                            </div>
                        </div>
                    </div>
                    {/* Hidden input to specify applicant type */}
                    <input type="hidden" {...register('applicantType')} value={addSecondApplicant ? 'First and Second' : 'First'} />

                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={addSecondApplicant}
                                onChange={handleAddSecondApplicantChange}
                            />
                            Add Joint/Second Applicants Details
                        </label>
                    </div>

                    {addSecondApplicant && (
                        <>
                            <h3>Joint/Second Applicant’s Details:</h3>
                            <div className="form-grid">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="secondFirstName">First Name</label>
                                        <input id="secondFirstName" {...register('secondFirstName', { required: addSecondApplicant })} {...sharedInputProps} />
                                        {errors.secondFirstName && <p className="error">First name is required</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondLastName">Last Name</label>
                                        <input id="secondLastName" {...register('secondLastName', { required: addSecondApplicant })} {...sharedInputProps} />
                                        {errors.secondLastName && <p className="error">Last name is required</p>}
                                    </div>
                                </div>
                                {/* Add Father's Name Field for Second Applicant */}
                                <div className="form-group full-width">
                                        <label htmlFor="secondFatherName">Father's Name</label>
                                        <input
                                            type="text"
                                            id="secondFatherName"
                                            {...register('secondFatherName', { required: addSecondApplicant })}
                                            className="input-field father-name-field"
                                        />
                                        {errors.secondFatherName && <p className="error">Father's name is required</p>}
                                    </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="secondDob">D.O.B.</label>
                                        <input type="date" id="secondDob" {...register('secondDob', { required: addSecondApplicant })} className="input-field" />
                                        {errors.secondDob && <p className="error">Date of birth is required</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondGender">Gender</label>
                                        <select id="secondGender" name="secondGender" {...register('secondGender', { required: addSecondApplicant })} className="input-field">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        {errors.secondGender && <p className="error">Gender is required</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondPhone">Mobile No.</label>
                                        <div className="phone-input">
                                            <span>+91</span>
                                            <input
                                                type="tel"
                                                id="secondPhone"
                                                {...register('secondPhone', {
                                                    required: addSecondApplicant,
                                                    pattern: /^[0-9]{10}$/,
                                                })}
                                                className="input-field"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        {errors.secondPhone && (
                                            <p className="error">
                                                Phone number is required and must be 10 digits.
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="secondEmail">Email ID</label>
                                    <input
                                        type="email"
                                        id="secondEmail"
                                        {...register('secondEmail', {
                                            required: addSecondApplicant,
                                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        })}
                                        className="input-field"
                                    />
                                    {errors.secondEmail && <p className="error">Valid email is required</p>}
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="secondAddress">Residential Address</label>
                                    <input
                                        id="secondAddress"
                                        {...register('secondAddress', { required: addSecondApplicant })}
                                        {...sharedInputProps}
                                        className="input-field"
                                    />
                                    {errors.secondAddress && <p className="error">Address is required</p>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="secondState">State</label>
                                        <input id="secondState" {...register('secondState', { required: addSecondApplicant })} {...sharedInputProps} />
                                        {errors.secondState && <p className="error">State is required</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondCity">City</label>
                                        <input id="secondCity" {...register('secondCity', { required: addSecondApplicant })} {...sharedInputProps} />
                                        {errors.secondCity && <p className="error">City is required</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondPin">PIN Code</label>
                                        <input id="secondPin" {...register('secondPin', { required: addSecondApplicant, pattern: /^[0-9]{6}$/ })} {...sharedInputProps} />
                                        {errors.secondPin && <p className="error">Valid PIN code is required</p>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="secondPan">PAN No.</label>
                                        <input id="secondPan" {...register('secondPan', { required: addSecondApplicant, pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/ })} {...sharedInputProps} />
                                        {errors.secondPan && <p className="error">Valid PAN number is required</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondAadhar">Aadhar No.</label>
                                        <input type="text" id="secondAadhar" {...register('secondAadhar', { required: addSecondApplicant, pattern: /^[0-9]{12}$/ })} className="input-field" />
                                        {errors.secondAadhar && <p className="error">Valid Aadhar number is required</p>}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="button-container">
                        <button type="submit" className="next-button">
                            Next
                        </button>
                        <button type="button" className="back-button" onClick={handleBackToHome}>
                            Back to Home
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicantForm;