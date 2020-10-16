import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeTitleText,
    selectHome
} from './homeSlice'

const Home = () => {
    const home = useSelector(selectHome);
    const dispatch = useDispatch();
    const [titleState, setTitleState] = useState('')

    return (
        <div>
            <h1>{home.title}</h1>
            <input
                type='text'
                value={titleState}
                onChange={
                    e => setTitleState(e.target.value)
                }
            />
            <button
                type='button'
                onClick={
                    () => dispatch(changeTitleText(titleState))
                }
            >
                Mudar
            </button>
        </div>
    )
}

export default Home