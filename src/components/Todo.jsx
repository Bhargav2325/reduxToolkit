import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, clearTodos } from "../features/todo/todoSlice";
import { AiTwotoneDelete } from "react-icons/ai";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="text-[#fff0f0c5] border-gray-500 border px-6 py-2 rounded-[20px] underline text-lg my-2">
          Todos
        </div>
      </div>
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 mx-10 py-2 rounded"
          key={todo.id}
        >
          <div className="text-white uppercase"> {todo.text}</div>
          <button
            className=" bg-red-500 border-0 py-2 px-1 hover:bg-red-600 focus:outline-none text-lg text-white hover:text-white rounded"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            <AiTwotoneDelete size={20} />
          </button>
        </li>
      ))}
      <div className="flex justify-center items-center my-5">
        <button
          type="reset"
          className="flex justify-center items-center text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={() => dispatch(clearTodos())}
        >
          Clear All Todos
        </button>
      </div>
    </>
  );
};

export default Todo;
