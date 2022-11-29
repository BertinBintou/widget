import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from "react-router-dom";

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,

  } from 'reactstrap';

  const Signin =(props)=> {

   
   return <div>


        <Form>
            <FormGroup>
                <Label
                    for="exampleEmail"
                    hidden
                >
                    Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                    for="examplePassword"
                    hidden
                >
                    Password
                </Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
            </FormGroup>
            {' '}
            <Button color="primary" outline>
            <Link to="/profil">connexion</Link>
            </Button>
        </Form>




        </div>

  };


  export default Signin;