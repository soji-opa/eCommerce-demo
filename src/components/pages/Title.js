import React from 'react'

export default function Title({ name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text__title">
                <h1 className = "font-weight-bold">
                {name} <strong className="text__blue">{ title }</strong>
                </h1>
            </div>
        </div>
    )
}
