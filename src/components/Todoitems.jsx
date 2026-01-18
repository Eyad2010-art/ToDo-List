import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';
import not_tick from '../assets/not_tick.png';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div 
        onClick={() => toggle(id)} 
        className="flex flex-1 items-center cursor-pointer overflow-hidden"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7 flex-shrink-0" />
        <p 
          className={`
            text-slate-700 ml-4 text-[17px] decoration-slate-500 
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
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
