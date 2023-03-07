import { useState } from "react";
import IconCheck from "../assets/icons/icon-check.svg";
import IconCross from "../assets/icons/icon-cross.svg";
import { useAppDispatch } from "../hooks";
import { deleteTodos, updateTodos } from "../store/slices/todosSlice";
import { todos } from "../store/types/todosType";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  todo: todos;
}

export default function TodoItem({ todo }: props) {
  const dispatch = useAppDispatch();
  const { id, title, completed } = todo;

  const [checked, setChecked] = useState(completed);
  const handleClick = () => {
    dispatch(
      updateTodos({
        id,
        title,
        completed: !checked,
      })
    );
    setChecked(!checked);
  };

  const handleDelete = () => {
    dispatch(deleteTodos(id));
    toast.success(`Todo "${title}" have been deleted.`);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center gap-4 px-4 pb-4 text-gray-700 dark:text-gray-200">
        <div
          className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-[100%] border border-gray-200 dark:border-gray-600 ${
            checked && "border-0 bg-blue-700 hover:bg-blue-500"
          }`}
          onClick={handleClick}
        >
          {checked && <img src={IconCheck} alt="checked" />}
        </div>
        <span className={`${checked && "text-gray-500 line-through"}`}>
          {title}
        </span>
        <button className="ml-auto" onClick={handleDelete}>
          <img src={IconCross} alt="delete" />
        </button>
      </div>
    </>
  );
}
