import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputModel from '../models/input';
import * as inputActions from '../store/actions/Inputaction';



const Input = (props) => {

    const initialUser = new InputModel()

    const [user, setUser] = useState(initialUser)



    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })

    }

    const addUsers = () => {

        dispatch(inputActions.addInput(user.id, user.name, user.value))
        resetForm()
    }

    const resetForm = () => {
        user.id = "";
        user.name = '';
        user.value = '';
    }

    return (
        <div className="container">
            <form className="form-group" onSubmit={(e) => {
                e.preventDefault()

            }}>
                <input required className="form-control m-1" placeholder="name" onChange={handleInputChange} name='name' value={user.name} />
                <input required className="form-control m-1" placeholder="value" onChange={handleInputChange} name='value' value={user.value} />
                <span className="d-flex justify-content-around mt-2">

                    <button type="submit" className="btn btn-info" onClick={addUsers} >Add</button>
                    <button className="btn btn-danger" onClick={props.toggleInput}>X</button>

                </span>
            </form>

        </div>
    )


}


export default Input;