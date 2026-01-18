import { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const inputRef = useRef(null);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false
    };

    setTodoList(prev => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className="
        bg-white
        place-self-center
        w-full sm:w-11/12 md:w-3/4 lg:w-1/3
        max-w-xl
        flex flex-col
        p-4 sm:p-6 md:p-7
        min-h-[500px] sm:min-h-[550px]
        rounded-xl
        shadow-lg
      "
    >

      {/* Header */}
      <div className="flex items-center mt-4 sm:mt-7 gap-2">
        <img className="w-7 sm:w-8" src={todo_icon} alt="Todo Icon" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          To-Do List
        </h1>
      </div>

      {/* Input */}
      <div className="flex items-center my-5 sm:my-7 bg-gray-200 rounded-full overflow-hidden">
        <input
          ref={inputRef}
          className="
            bg-transparent border-0 outline-none
            flex-1 h-12 sm:h-14
            pl-4 sm:pl-6 pr-2
            placeholder:text-slate-600
            text-sm sm:text-base
            truncate
          "
          type="text"
          placeholder="Add your task"
        />

        <button
          onClick={add}
          className="
            rounded-full
            bg-orange-600
            px-5 sm:px-8
            h-12 sm:h-14
            text-white
            text-sm sm:text-lg
            font-medium
            hover:bg-orange-700
            transition-colors
            whitespace-nowrap
          "
        >
          ADD +
        </button>
      </div>

      {/* Todo List */}
      <div className="flex flex-col gap-3 overflow-y-auto">
        {todoList.map(item => (
          <Todoitems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isCompleted}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>

    </div>
  );
};

export default Todo;
