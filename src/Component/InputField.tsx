import React, { useRef, useState } from "react";
import './style.css';
interface props{
    todo:string;
    settodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}
    

const InputField=({todo,settodo,handleAdd}:props ) => {

    // this useRef is used to hook the html file
    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input"
     onSubmit={(e) =>{
    handleAdd(e);
    inputRef.current?.blur();
    }}
    >
      <input
      ref={inputRef}
      type="input"
        value={todo}
        onChange={
            (e)=>settodo(e.target.value)
        }
      placeholder="Enter the task" className="input__box" />
      <button className="input_submit" type="submit">
        Go 
      </button>
    </form>
  );
}

export default InputField;
