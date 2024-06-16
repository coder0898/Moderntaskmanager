import React from "react";

const Card = ({ index, title, priority, handleDelete }) => {
  return (
    <>
      <article className="task_card" key={index}>
        <p className="task_text">{title}</p>

        <div className="task_card_bottom_line">
          <div className="task_card_tags">{priority}</div>
          <button className="task_delete" onClick={() => handleDelete(index)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </article>
    </>
  );
};

export default Card;
