import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearCompletedTodos } from "../store/slices/todosSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleClick = (activeButton: string) => {
    setActive(activeButton);
  };

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos());
    toast.success("Completed todos has been cleared.");
  };

  useEffect(() => {
    if (active === "Completed") {
      setFilteredTodos(todos.filter((item) => item.completed === true));
    } else if (active === "Active") {
      setFilteredTodos(todos.filter((item) => item.completed === false));
    } else if (active === "All") {
      setFilteredTodos(todos);
    }
  }, [todos, active]);

  return (
    <>
      <ToastContainer />
      <div className="mt-4 rounded-md bg-white py-4 shadow-lg dark:bg-gray-800">
        {filteredTodos.length === 0 ? (
          <p className="pb-4 text-center text-gray-600 dark:text-gray-400">
            Todo list is empty
          </p>
        ) : (
          <>
            {filteredTodos.map((item) => (
              <TodoItem key={item.id} todo={item} />
            ))}
          </>
        )}

        <hr className="dark:border-gray-600" />
        <div className="flex justify-between px-4 pt-4 font-light text-gray-500 dark:text-gray-400">
          <div>5 items left</div>
          <div className="hidden gap-4 font-medium md:flex">
            <button
              onClick={() => handleClick("All")}
              className={`${active === "All" && "text-blue-500"}`}
            >
              All
            </button>
            <button
              onClick={() => handleClick("Active")}
              className={`${active === "Active" && "text-blue-500"}`}
            >
              Active
            </button>
            <button
              onClick={() => handleClick("Completed")}
              className={`${active === "Completed" && "text-blue-500"}`}
            >
              Completed
            </button>
          </div>
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
      <div className="mt-4 block rounded-md bg-white p-4 shadow-lg dark:bg-gray-800 md:hidden">
        <div className="flex justify-center font-light text-gray-500 dark:text-gray-400">
          <div className="flex gap-4 font-medium">
            <button
              onClick={() => handleClick("All")}
              className={`${active === "All" && "text-blue-500"}`}
            >
              All
            </button>
            <button
              onClick={() => handleClick("Active")}
              className={`${active === "Active" && "text-blue-500"}`}
            >
              Active
            </button>
            <button
              onClick={() => handleClick("Completed")}
              className={`${active === "Completed" && "text-blue-500"}`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
