import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    }
    dispatch(updateTodo(payload));
    setEditable(false);
  };
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
      {editable ? (
        <input
          type="text"
          defaultValue={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          style={{
            width: "80%",
            border: "none",
            borderBottom: "1px solid lightgrey",
            outline: "none",
            padding: "5px",
          }}
        />
      ) : (
        <p style={{ width: "80%" }}>{content}</p>
      )}
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "10px" }}
        />
        {editable ? (
          <FaCheck className="icons" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit onClick={() => setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  );
};

export default Todo;
