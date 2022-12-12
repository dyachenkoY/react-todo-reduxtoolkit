import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./todoLists.module.scss";
import { deleteTask, completedTask } from "../../store/slices/todoSlice";

const List = ({ tasksList, dispatch }) => {
  const newList = tasksList.map(({ id, text, isCompleted }) => (
    <li
      className={!isCompleted ? styles.liNotCompleted : styles.liCompleted}
      key={id}
      id={id}
      onDoubleClick={() => dispatch(completedTask(id))}
    >
      {text}
      <span
        onClick={() => dispatch(deleteTask(id))}
        className={styles.iconSpan}
      >
        <FaTrashAlt className={styles.icon} />
      </span>
    </li>
  ));
  return (
    <>
      <ul className={styles.ul}>{newList}</ul>
    </>
  );
};

export default List;
