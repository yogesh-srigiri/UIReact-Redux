import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from './UI/Card';
import Input from './UI/Input';




const Main = (props) => {

    const [showInput, setShowInput] = useState(true)
    const [showCart, setShowCart] = useState(true)

    const toggleInput = () => {
        setShowInput(!showInput)
    }

    const toggleCart = () => {
        setShowCart(!showCart)
    }

    const userInputs = useSelector(state => state.UserInputs.userData)





    return (
        <div>
            <div>
                {
                    showInput &&
                    <div>
                        <Input toggleInput={toggleInput} />
                    </div>
                }
                <button className="btn btn-success" onClick={toggleInput} >Add Row</button>
            </div>
            <div>
                <button className="btn btn-light" onClick={toggleCart}>Create Card</button>
                {
                    showCart &&
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            userInputs.map((user) => {


                                return <Card key={user.id} id={user.id} name={user.name} value={user.value} />

                            })
                        }

                    </div>
                }
            </div>

        </div>

    )
}



export default Main;