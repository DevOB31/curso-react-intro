import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../TodoContext/index.js";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <>
      <button
        className='CreateTodoButton'
        onClick={(e) => {
          setOpenModal(true);
        }}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
