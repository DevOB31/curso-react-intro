import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue.trim() === "") return;
    addTodo(newTodoValue);
    setNewTodoValue("");
    setOpenModal(false);
  };

  return (
    <form className='CreateTodoForm' onSubmit={handleSubmit}>
      <textarea
        placeholder='Escribe tu nueva tarea'
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
      ></textarea>
      <button type='submit'>Agregar</button>
      <button type='button' onClick={() => setOpenModal(false)}>
        Cancelar
      </button>
    </form>
  );
}
