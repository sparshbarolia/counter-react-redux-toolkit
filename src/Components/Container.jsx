import React from 'react'

function Container(props) {
    return (
        <>
            <div className="card m-auto" style={{width: "70%"}}>
                    <div className="card-body">
                        {props.children}
                    </div>
            </div>
        </>
    )
}

export default Container
