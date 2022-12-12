import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./todo.module.scss";
import { /* addValue, */ addTask } from "../../store/slices/todoSlice";
import List from "../TodoLists";

const TODO_SCHEMA = Yup.object({
  task: Yup.string()
    .min(4, "Too Short!")
    .max(45, "Too Long!")
    .required("Entered your task"),
});

const TodoList = (props) => {
  const { task, taskList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const submitHandler = (values, formikBag) => {
    dispatch(addTask(values.task));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{ task, taskList }}
      onSubmit={submitHandler}
      validationSchema={TODO_SCHEMA}
    >
      <Form>
        <Field className={styles.input} type="text" name="task" />
        <button className={styles.btn} type="submit">
          Add
        </button>
        <ErrorMessage
          value={task}
          name="task"
          component="div"
          className={styles.error}
        />
        {taskList.length === 0 || (
          <List tasksList={taskList} dispatch={dispatch} />
        )}
      </Form>
    </Formik>
  );
};

export default TodoList;
