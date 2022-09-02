import TaskManager from "../TaskManager";
export const taskReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EMPTY_FIELDS":
      return {
        ...state,
        isAlertOpen: true,
        AlertContent: "Please fill up name & date",
        alertClass: "danger",
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        isAlertOpen: false,
        alertClass: "danger",
      };
    case "SUBMIT_ITEM":
      const newtask = [...state.tasks, payload];
      return {
        ...state,
        tasks: newtask,
        isAlertOpen: true,
        alertClass: "success",
        AlertContent: "Submit item success!!",
      };
    case "EDIT_OPEN":
      return {
        ...state,
        isModalOpen: true,
        modaltype: payload.editTaskHandler,
        modaltitle: "Edit this task?",
        modalcontent: "Do you want to edit this task?",
        modakbtnName: "Edit",
        taskID: payload.taskID,
      };
    case "DELETE_OPEN":
      return {
        ...state,
        isModalOpen: true,
        modaltype: payload.delTaskHandler,
        modaltitle: "Delete this task?",
        modalcontent: "Do you want to delete this task?",
        modakbtnName: "Delete",
        taskID: payload.taskID,
      };
    case "DEL_ITEM":
      return {
        ...state,
        isModalOpen: false,
        isEditing: false,
        taskID: null,
        isAlertOpen: true,
        alertClass: "danger",
        AlertContent: "Delete this item success!!",
        tasks: payload,
      };
    case "EDIT_ITEM":
      return {
        ...state,
        isModalOpen: false,
        isEditing: true,
        taskID: payload,
      };
    case "EditSUBMIT_ITEM":
      return {
        ...state,
        isEditing: false,
        isAlertOpen: true,
        alertClass: "success",
        AlertContent: "Edit item success!!",
        tasks: payload,
      };
    case "CLOSE_MODAL": {
      return { ...state, isModalOpen: false, isEditing: false };
    }
    case "TASK_COMPLETE":
      return {
        ...state,
        isEditing: false,
        isAlertOpen: true,
        alertClass: "success",
        AlertContent: "Complete item success!!",
        tasks: payload,
      };
    default:
      return state;
  }
};
