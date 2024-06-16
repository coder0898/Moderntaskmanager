import React from "react";

const Card = ({ title, priority }) => {
  return (
    <>
      <article className="task_card">
        <p className="task_text">{title}</p>

        <div className="task_card_bottom_line">
          <div className="task_card_tags">{priority}</div>
          <div className="task_delete">
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
