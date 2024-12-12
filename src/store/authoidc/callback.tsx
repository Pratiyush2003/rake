import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAuthCallback } from './actions'
import { AppDispatch } from '..'

const Callback = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(handleAuthCallback())
            .unwrap()
            .then(() => {
                navigate('/')
            })
    }, [dispatch, navigate]);
    return <div>Loading...</div>
}

export default Callback