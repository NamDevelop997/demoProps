import React from 'react'

export default function PropsChild(props) {
    return (
        <div >
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={props.src} alt={props.fullName} />
                    <div className="card-body">
                        <h5 className="card-title">{props.fullName}</h5>
                        <p className="card-text">{props.price} $</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            
        </div>


    )
}
