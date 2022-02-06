import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { authentication } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory()
    const SignInWithFirebase = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then(({user})=>{
      console.log(user,"userrr")
      sessionStorage.setItem('Auth Token', user.accessToken)
      history.push('/Home')
    })
    .catch((err)=>{
     console.log(err);
    })
  }
  
  return (
    <Container>
      <Row className='justify-content-md-center my-5'>
        <Col sm={8}>
          <Button onClick={SignInWithFirebase} variant="dark"  type='submit' className='mr-1'>Sign in</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
