import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  task: "",
  taskList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
/*     addValue: (state, action) => {
      state.task = action.payload;
    }, */
    addTask: (state, action) => {
      state.task = action.payload;
      const newTask = {
        id: _.uniqueId(),
        text: action.payload,
        isCompleted: false,
      };
      state.taskList.push(newTask);
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(({ id }) => id !== action.payload);
    },
    completedTask: (state, action) => {
      state.taskList = state.taskList.map((taskItem) => ({
        ...taskItem,
        isCompleted:
          taskItem.id === action.payload
            ? !taskItem.isCompleted
            : taskItem.isCompleted,
      }));
    },
  },
});

const { reducer, actions } = todoSlice;

// action creators
const { addTask, deleteTask, completedTask, addValue } = actions;

export { addTask, deleteTask, completedTask, addValue };
export default reducer;
