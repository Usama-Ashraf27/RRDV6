import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"
import "yup-phone";
// import Navbar from '../RRDV6/Navbar';

const Formjs = () => {
    const defaultValue = {
        name: "",
        email: "",
        number: "",
        password: "",
        gender: "",
        hobby: [],
        date: ""
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("Please Enter your Name").min(3),
        email: yup.string().required("Please Enter your Email").email("Please Enter Valid Email"),
        number: yup.string()
            .matches(/^\d{10}$/, 'Phone number must be 10 digits')
            .required('Phone number is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        gender: yup.string().required("Please Select Gender"),
        hobby: yup.array()
            .min(1, 'Select at least one hobby')
            .required('Select at least one hobby'),
        date: yup.date()
            .typeError('Enter a valid date')
            .required('Date is required'),

    })

    const handleSubmit = (values) => {
        console.log("values", values)
    }
    return (<>
        
        <div>
            <div className="container">
                <div className="col-md-12 text-center mt-5" >
                    <h1>Form Validation with Formik & Yup</h1>
                    <Formik initialValues={defaultValue} validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        {({ values }) => (
                            <Form>
                                <div className='col-md-12 mt-4'>
                                    <Field type="text" name="name" placeholder="Enter Your Name" className="form-control" />
                                    <p className='text-danger'>
                                        <ErrorMessage name='name' />
                                    </p>
                                </div>
                                <div className='col-md-12 mt-4'>   <Field type="text" name="email" placeholder="Enter Your Email" className="form-control" />
                                    <p className='text-danger'>
                                        <ErrorMessage name='email' />
                                    </p>
                                </div>
                                <div className='col-md-12 mt-4'>
                                    <Field type="tel" name="number" placeholder="Enter Your Number" className="form-control" />
                                    <p className='text-danger'>
                                        <ErrorMessage name='number' />
                                    </p>
                                </div>
                                <div className='col-md-12 mt-4'>  <Field type="text" name="password" placeholder="Enter Your Password" className="form-control" />
                                    <p className='text-danger'>
                                        <ErrorMessage name='password' />
                                    </p>
                                </div>
                                {/* <div className='col-md-12 mt-4'>
                        <Field component="select" name="gender" placeholder="Select Your Gender"  className="form-control">
                        <option value="Please Select" disabled>Please Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </Field>
                        <p className='text-danger'>
                            <ErrorMessage name='gender'/>
                        </p>
                        </div> */}
                                <div className='col-md-12 mt-4' >
                                    <label className='mx-2'>
                                        <Field type="radio" name="gender" value="Male" >
                                        </Field>
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="Female">
                                        </Field>
                                        FeMale
                                    </label>
                                    <p className='text-danger'>
                                        <ErrorMessage name='gender' />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <div>
                                        <label>
                                            <Field
                                                type="checkbox"
                                                name="hobby"
                                                value="Cricket"

                                            />
                                            Cricket
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <Field
                                                type="checkbox"
                                                name="hobby"
                                                value="Programming"

                                            />
                                            Programming
                                        </label>
                                    </div>
                                    <p className={values.hobby.length > 0 ? '' : 'text-danger'}>
                                        <ErrorMessage name="hobby" />
                                    </p>
                                </div>

                                <div>
                                    <label>
                                        Date:
                                        <Field
                                            type="date"
                                            name="date"
                                            className="form-control"
                                        />
                                    </label>
                                    <p className="text-danger">
                                        <ErrorMessage name="date" />
                                    </p>
                                </div>

                                <button className='btn btn-success mt-2' type='submit'>Submit</button>
                            </Form>
                        )}
                    </Formik></div></div>
                    </div></>
    )
}

export default Formjs
