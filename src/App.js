//import logo from './logo.svg';
//import './App.css';
import {useState} from "react";
import Todo from './components/Todo.js';
import Inprogress from './components/Inprogress.js';
import Done from './components/Done.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [inputList, setInputList] = useState("");
  const [texterror, settexterror] = useState("");
  const [items, setItems] = useState([]);
  const [itemsinProgress, setItemsinProgress] = useState([]);
  const [itemsinDone, setItemsinDone] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = (e) => {
    if(inputList.length===0){
      settexterror("Please add some text")
    }
    else{
      setItems((oldItems) => {
        return [...oldItems,inputList];
      });
      setInputList("");
      settexterror("")
   }
  };
  
  const deleteItems = (id,confirmation=false) => {
    if(confirmation===true){
      if(window.confirm("Are you sure ? ")){
        //console.log("deleted");
        setItems((oldItems) => {
          return oldItems.filter((arrElem, index) => {
            //return arrElem !== itemvalue;
            return index !== id;
          })
        })
      }
    }
    else{
      setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
          //return arrElem !== itemvalue;
          return index !== id;
        })
      })
    }
  };

  const deleteItemss = (id,confirmation=false) => {
    if(confirmation===true){
      if(window.confirm("Are you sure ? ")){
        //console.log("deleted");
        setItemsinProgress((oldItems) => {
          return oldItems.filter((arrElem, index) => {
            //return arrElem !== itemvalue;
            return index !== id;
          })
        })
      }
    }
    else{
      setItemsinProgress((oldItems) => {
        return oldItems.filter((arrElem, index) => {
          //return arrElem !== itemvalue;
          return index !== id;
        })
      })
    }
  };

  const deleteItemsss = (id,confirmation=false) => {
    if(confirmation===true){
      if(window.confirm("Are you sure ? ")){
        //console.log("deleted");
        setItemsinDone((oldItems) => {
          return oldItems.filter((arrElem, index) => {
            //return arrElem !== itemvalue;
            return index !== id;
          })
        })
      }
    }
    else{
      setItemsinDone((oldItems) => {
        return oldItems.filter((arrElem, index) => {
          //return arrElem !== itemvalue;
          return index !== id;
        })
      })
    }
  };
  
  const saveInprogress = (value,index) => {
    //console.log("deleted");
    setItemsinProgress((oldItem) => {
      return [...oldItem,value];
    });
    deleteItems(index)
  };

  const saveIndone = (value,index) => {
    //console.log("deleted");
    setItemsinDone((oldItems) => {
      return [...oldItems,value];
    });
    deleteItemss(index)
  };

  return (
    <div className="container-fluid bg-dark">
      <div className=" bg-white ">
        <nav className="navbar navbar-expand-sm bg-light">
          LOGO
        </nav>
        <div className="justify-content-center form-group row m-3">
              
              <div className="col-sm-5">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Add item here....." 
                value={inputList} 
                onChange={itemEvent}
                />
                <small className="text-danger" >{texterror}</small>         
              </div>

              <div className="col-sm-2">
                <button  
                className="btn btn-success" 
                onClick={listOfItems}>
                  Add
                </button>        
              </div>
              
              
        </div>
        <div className=" row ">
          <div className="col-sm-4">
            <Todo 
            items={items} 
            deleteItems={deleteItems} 
            saveInprogress={saveInprogress}/>       
          </div>
          <div className="col-sm-4 ">
            <Inprogress 
            progressItems={itemsinProgress} 
            deleteItemss={deleteItemss} 
            saveIndone={saveIndone}/>   
          </div>
          <div className="col-sm-4">
            <Done 
            doneItems={itemsinDone}
            deleteItemsss={deleteItemsss}
            /> 
          </div>
        </div>
      </div>
    </div>
   

  );
}

export default App;
