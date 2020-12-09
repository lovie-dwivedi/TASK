import React from 'react'

export default function Inprogress(props) {
    return (
        <div>
            <h3 className="text-center">IN PROGRESS</h3>
            <br/>
            <div>
                {props.progressItems.map( (itemvalue, index) => {
                    return <div className="row m-1" key={index} id={index}>
                        <div className="col-sm-6" > {itemvalue} </div>
                        <div className="col-sm-2">
                            <button  className="btn btn-danger btn-sm" 
                            onClick={() => {props.deleteItemss(index,true);}}>
                                Remove
                            </button>        
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2">
                            <button  className="btn btn-success btn-sm" 
                            onClick={() => {props.saveIndone(itemvalue,index);}}>
                                Done
                            </button>        
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
