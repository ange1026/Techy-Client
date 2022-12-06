import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ChangePassword = (props) => {
    // constructor(props) {
    // 	super(props)

    // 	this.state = {
    // 		oldPassword: '',
    // 		newPassword: '',
    // 	}
    // }
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigate = useNavigate()

    const onChangePassword = (event) => {
        event.preventDefault()

        const { msgAlert, user } = props
        console.log('the user', user)


        const passwords = { oldPassword, newPassword }

        changePassword(passwords, user)
            .then(() =>
                msgAlert({
                    heading: 'Change Password Success',
                    message: messages.changePasswordSuccess,
                    variant: 'success',
                })
            )
            .then(() => navigate('/'))
            .catch((error) => {
                setOldPassword('')
                setNewPassword('')
                msgAlert({
                    heading: 'Change Password Failed with error: ' + error.message,
                    message: messages.changePasswordFailure,
                    variant: 'danger',
                })
            })
    }



    return (
        //make sure you're consistent through your code -- if you're going to use single quotes in one place, use them everywhere
        <div className="password-container">
            <div className='password-div'>
                <div className='row' style={{ marginTop: '70px' }}>
                    <div className='col-sm-5 col-md-8 mx-auto mt-auto'>
                        <h3>Change Password</h3>
                        <Form onSubmit={onChangePassword}>
                            <Form.Group controlId='oldPassword'>
                                <Form.Control
                                    required
                                    name='oldPassword'
                                    value={oldPassword}
                                    type='password'
                                    placeholder='Old Password'
                                    onChange={e => setOldPassword(e.target.value)}
                                    style={{ marginBottom: '10px' }}
                                />
                            </Form.Group>
                            <Form.Group controlId='newPassword'>
                                <Form.Control
                                    required
                                    name='newPassword'
                                    value={newPassword}
                                    type='password'
                                    placeholder='New Password'
                                    onChange={e => setNewPassword(e.target.value)}
                                    style={{ marginBottom: '10px' }}
                                />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangePassword