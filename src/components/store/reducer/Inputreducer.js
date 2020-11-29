import InputModel from '../../models/input';
import { ADD_INPUT } from '../actions/Inputaction';

const user = [new InputModel('TestId', 'TestName', 'TestValue')]


const Initialstate = {

    userData: user
}

export default (state = Initialstate, action) => {
    switch (action.type) {
        case ADD_INPUT:
            const newUser = [
                new InputModel(
                    Math.floor(Math.random() * 100000000),
                    action.userData.name,
                    action.userData.value

                )]
            return {
                ...state,
                userData: state.userData.concat(newUser)
            }
        default:
            return state
    }

}