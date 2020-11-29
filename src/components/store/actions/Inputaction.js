

export const ADD_INPUT = 'ADD_INPUT';


export const addInput = (id, name, value) => {
    return {
        type: ADD_INPUT,
        userData: { id, name, value }

    }


}
