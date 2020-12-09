import React from 'react'

export default function Todo(props) {

    

    return (
        <div>
            <h3 className="text-center">TODO</h3>
            <br/>
            <div>
                {props.items.map( (itemvalue, index) => {
                    return <div className="row m-1" key={index} id={index}>
                        <div className="col-sm-4" > {itemvalue} </div>
                        <div className="col-sm-2">
                            <button  className="btn btn-danger btn-sm" 
                            onClick={() => {props.deleteItems(index,true);}}>
                                Remove
                            </button>        
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2">
                            <button  className="btn btn-success btn-sm" 
                            onClick={() => {props.saveInprogress(itemvalue,index);}}>
                                Continue
                            </button>        
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
