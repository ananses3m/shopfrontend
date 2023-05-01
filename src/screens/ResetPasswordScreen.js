import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { passwordResetEmail } from '../actions/userActions';

const ResetPasswordScreen = ({ history }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userPasswordResetEmail = useSelector(
    (state) => state.userPasswordResetEmail
  );
  const { loading, error, success } = userPasswordResetEmail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }

    if (email && success) {
      setMessage('Check your inbox for password reset link');
    }
  }, [email, success, userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(passwordResetEmail(email));
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      {message && <Message variant="success">{message}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email and check inbox after submission"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-3">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ResetPasswordScreen;
