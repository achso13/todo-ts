import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconCheck from "../assets/icons/icon-check.svg";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addTodos } from "../store/slices/todosSlice";

export default function Form() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const lastId =
      todos.length === 0 ? 1 : Number(todos[todos.length - 1].id + 1);

    if (title === "") {
      toast.warn("Todo cannot be empty!");
    } else {
      dispatch(
        addTodos({
          id: lastId,
          title: title,
          completed: checked,
        })
      );
      toast.success("Todo has been added!");
      setTitle("");
      setChecked(false);
    }
  };

  const handleChange = (e: any) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleFocus = (focus: boolean) => {
    setFocused(focus);
  };

  return (
    <>
      <ToastContainer />
      <form
        className="flex items-center gap-4 rounded-md bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-gray-200"
        onSubmit={handleSubmit}
      >
        <div
          className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-[100%] border border-gray-200 dark:border-gray-600 ${
            checked && "border-0 bg-blue-700 hover:bg-blue-500"
          }`}
          onClick={handleClick}
        >
          {checked && <img src={IconCheck} alt="checked" />}
        </div>

        {focused && (
          <p className="hidden whitespace-nowrap font-medium md:block">
            Currently typing
          </p>
        )}

        <input
          name="todo"
          type="text"
          placeholder="Create a new todo..."
          value={title}
          className="grow focus:outline-none dark:bg-gray-800"
          onFocus={(e) => handleFocus(true)}
          onBlur={(e) => handleFocus(false)}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
