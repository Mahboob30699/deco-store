import { FormInput, SubmitBtn } from '../component';
import {Form, Link} from 'react-router-dom';
import React from 'react';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h4 className='text-center text-3xl font-bold'>
        Register
      </h4>
      <FormInput
          type="text"
          label="User Name"
          name="username"
         
        />
        <FormInput
          type="email"
          label="Email"
          name="identifier"
         
        />
        <FormInput
          type="password"
          label="Password"
          name="Password"
          
        />
        
         <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already registered?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary captilized"
          >
            Login 
          </Link>
        </p>
      </Form>
      
    </section>
  )
}

export default Register
