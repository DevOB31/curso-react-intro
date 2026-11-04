import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteIcon = (props) => {
  const { className, onClick } = props;
  return <MdDelete className={className} onClick={onClick} />;
};

export { DeleteIcon };
