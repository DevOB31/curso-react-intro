import { useContext, useState } from "react";
import "./TodoSearch.css";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div className='TodoSearch-container'>
      <input
        placeholder='Cortar cebolla'
        className='TodoSearch'
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      {searchValue.length > 0 && (
        <span className='TodoSearch-clear' onClick={() => setSearchValue("")}>
          <AiOutlineClose />
        </span>
      )}
    </div>
  );
}

export { TodoSearch };
