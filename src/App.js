import React, { useContext } from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import TodosEmpty from "./Components/TodosEmpty/TodosEmpty";
import TodosError from "./Components/TodosError/TodosError";
import TodosLoading from "./Components/TodosLoading/TodosLoading";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Components/Modal/Modal";
import { TodoForm } from "./Components/TodoForm/Todoform";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    openModal,
  } = useContext(TodoContext);

  let content;

  if (totalTodos === 0) {
    content = (
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        No tienes Todos anotados.
      </h1>
    );
  } else if (completedTodos === totalTodos) {
    content = (
      <h1 style={{ justifyContent: "center", display: "flex" }}>
        Excelente, completaste todos los Todos!!!
      </h1>
    );
  } else {
    content = <TodoCounter />;
  }

  return (
    <>
      {content}
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <TodosEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton />
    </>
  );
}

export default App;
