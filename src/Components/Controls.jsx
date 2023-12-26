import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';

function Controls() {
    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }
    
    const handleAdd = () => {
        dispatch(counterActions.add({
            num: inputElement.current.value 
        }));
        inputElement.current.value="";    //after submision form khali hojaye
    }
    
    const handleSubtract = () => {
        dispatch(counterActions.subtract(inputElement.current.value));
        inputElement.current.value="";    //after submision form khali hojaye
    }
    
    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle());
    }


    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button 
                    type="button" 
                    className="btn btn-outline-success btn-lg px-4 gap-3"
                    onClick={handleIncrement}
                >
                    <b>+1</b>
                </button>
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-lg px-4"
                    onClick={handleDecrement}
                >
                    <b>-1</b>
                </button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                <div className="input-group input-group-lg">
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-lg" 
                        placeholder='Enter number here'
                        ref={inputElement}
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-outline-success btn-lg px-4"
                    onClick={handleAdd}
                >
                    <b>Add</b>
                </button>
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-lg px-4"
                    onClick={handleSubtract}
                >
                    <b>Subtract</b>
                </button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                <button 
                    type="button" 
                    className="btn btn-outline-warning btn-lg px-4"
                    onClick={handlePrivacyToggle}
                >
                    <b>Privacy Toggle</b>
                </button>
            </div>
        </>
    )
}

export default Controls
