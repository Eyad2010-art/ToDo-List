import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';
import not_tick from '../assets/not_tick.png';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-2 sm:my-3 gap-2 sm:gap-3">
      
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer overflow-hidden"
      >
        <img
          src={isComplete ? tick : not_tick}
          alt=""
          className="w-6 sm:w-7 flex-shrink-0"
        />

        <p
          className={`
            text-slate-700
            ml-3 sm:ml-4
            text-sm sm:text-[17px]
            decoration-slate-500
            ${isComplete ? "line-through" : ""}
            truncate
          `}
          title={text}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="Delete"
        className="w-3 sm:w-3.5 cursor-pointer flex-shrink-0"
      />
    </div>
  );
};

export default Todoitems;
