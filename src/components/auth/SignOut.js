import { useNavigate } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
    const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() =>
                msgAlert({
                    heading: 'Signed Out Successfully',
                    message: messages.signOutSuccess,
                    variant: 'success',
                })
            )
            .finally(() => navigate('/'))
            .finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

    return (
        <>
            <div className='signout-container'>
                <div className='row'>
                    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                        <h2>Are you sure you want to sign out?</h2>
                        <small>We hate to see you go...</small><br />

                        <Button variant='danger' onClick={onSignOut} className='signout-button'>
                            Sign Out
                        </Button>
                        <Button variant='warning' onClick={onCancel}>
                            Cancel
                        </Button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignOut
