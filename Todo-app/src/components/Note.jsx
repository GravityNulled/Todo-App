import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="bg-yellow-300 m-8 rounded-xl h-[200px]">
      <p className="text-xl p-2 overflow-hidden whitespace-pre-wrap">{text}</p>
      <div className="flex justify-between items-center p-2 mx-2 mt-[100px]">
        <p>{date}</p>
        <HiOutlineTrash
          className="cursor-pointer"
          onClick={() => handleDelete(id)}
          size={20}
        />
      </div>
    </div>
  );
};

export default Note;
