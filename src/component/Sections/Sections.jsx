import React from "react";
import "./Sections.css";
import Card from "../Card/Card";
import SectionHead from "../Header/SectionHead";

const Sections = ({ headTitle, task, status, handleDelete }) => {
  return (
    <>
      <section>
        <div>
          <SectionHead headTitle={headTitle} />
        </div>
        {task.map(
          (item, index) =>
            item.status === status && (
              <Card
                key={index}
                index={index}
                title={item.task}
                priority={item.priority}
                handleDelete={handleDelete}
              />
            )
        )}
        {/* {task &&
          task.map((item, index) => {
            return item.status === status && <Card />;
          })} */}
      </section>
    </>
  );
};

export default Sections;
