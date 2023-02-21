import React ,{useState} from "react";
import Button from '../UI/Button'
import Card from "../UI/Card";
import ErrorModal  from "./ErrorModal";
import classes from './AddUser.modules.css';

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] =useState('');
  const [enteredAge, setEnteredAge] =useState('');
  const [error, setError]=useState();
;    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'please enter a vaild name and age (non-empty value).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a vaild age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandeler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const userAge = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };
    return(
        <div>
      {error &&<ErrorModal 
      title={error.title} 
      message={error.message}
       onConfirm={errorHandler}>
        </ErrorModal>
        };
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input 
            id="username" 
            type="text"
            value={enteredUserName} 
            onChange={userNameChangeHandeler}
            ></input>
            <label htmlFor="age">Age (Year)</label>
            <input
             id="age" 
             type="number"
             value={enteredAge} 
             onChange={userAge}>
             </input>
            <Button type="sumbit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}
export default AddUsers