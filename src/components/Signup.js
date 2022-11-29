import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,Label, Input} from 'reactstrap';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from "react-router-dom";

function Singup(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Inscription
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
  
          Inscription
      
        <ModalBody>



        <Form>

        <FormGroup>
    <Label
      for="Name"
      hidden
    >
      Name
    </Label>
    <Input
      id="nameinput"
      name="ame"
      placeholder="Name"
      type="text"
    />
  </FormGroup>
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

  <FormGroup>
    <Label
      for="City"
      hidden
    >
      city
    </Label>
    <Input
      id="cityinput"
      name="city"
      placeholder="City"
      type="text"
    />
  </FormGroup>

  <FormGroup>
    <Label
      for="age"
      hidden
    >
      age
    </Label>
    <Input
      id="ageinput"
      name="city"
      placeholder="Age"
      type="number"
    />
  </FormGroup>




  <FormGroup tag="fieldset">
    <legend>
      Genre
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
       Man 
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
        Woman
      </Label>
    </FormGroup>
    <FormGroup
      check
      disabled
    >
     
      
    </FormGroup>
  </FormGroup>
  



  {' '}
  <Button  color="primary" outline>
  <Link to="/Profil">connexion</Link>
  </Button>
</Form>


         
        </ModalBody>
        <ModalFooter>
        
           <Button color="primary" onClick={toggle}>
            Cancel
          </Button> 
        </ModalFooter>
      </Modal>
    </div>
  );
}

Singup.propTypes = {
  className: PropTypes.string,
};

export default Singup;