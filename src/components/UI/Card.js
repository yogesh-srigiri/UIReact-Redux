import React from 'react';


const Card = (props) => {
    return (
        <div className="card m-2" style={{ width: 300, height: 200, maxHeight: 200, maxWidth: 300 }}>
            <div className="card-body">
                <p className="card-text">ID : {props.id}</p>
                <p className="card-text">NAME : {props.name}</p>
                <p className="card-text">VALUE : {props.value} </p>
            </div>





        </div>
    )
}



export default Card;