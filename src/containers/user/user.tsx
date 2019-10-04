import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'actions/index'
import { Button } from 'components/button'
import { userSelector } from 'selectors/user-selector'

export const User = ({ match }) => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    console.log(user)
    const handleClick = () => {
        dispatch(actions.fetchUserRequest())
    }
    console.log(match)

    return (
        <div>
            <Button text="Get user" onClick={handleClick} />
        </div>
    )
}

