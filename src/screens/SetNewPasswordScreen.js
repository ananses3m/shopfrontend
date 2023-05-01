import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { updatePassword } from '../actions/userActions';

const SetNewPasswordScreen = ({ match, history }) => {
    const userId = match.params.id;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const userUpdatePassword = useSelector(state => state.userUpdatePassword);
    const { loading, error, success, user } = userUpdatePassword;

    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


    useEffect(() => {
        if (success) {
            history.push(`/login`);
        }

        if (userInfo) {
            history.push('/');
          }
    }, [dispatch, history, user, success, error, userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updatePassword({ id: userId, password }, match.params.token))
        }
    }

    return (
        <FormContainer>
            <h1>Enter New Password</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Password updated</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter new password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='my-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm new password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-3'>Reset</Button>
            </Form>
        </FormContainer>
    )
}

export default SetNewPasswordScreen
