import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const [editable, setEditable] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginTop: "25px",
      }}
    >
      <div>{content}</div>
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "10px" }}
        />
        {editable ? (
          <FaCheck className="icons" />
        ) : (
          <FaRegEdit onClick={()=>setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  );
};

export default Todo;
