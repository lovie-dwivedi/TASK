import React from 'react'

export default function Done(props) {
    return (
        <div>
            <h3 className="text-center">DONE</h3>
            <br/>
            <div>
                {props.doneItems.map( (itemvalue, index) => {
                    return <div className="row m-1" key={index} id={index}>
                        <div className="col-sm-6" > {itemvalue} </div>
                        <div className="col-sm-2">
                            <button  className="btn btn-danger btn-sm" 
                            onClick={() => {props.deleteItemsss(index,true);}}>
                                Remove
                            </button>        
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
