import { createToDo } from "./create-to-do.js";
import { blankProjectLoad } from "./blank-project-load.js";
import "./style.css";
import {
  displayDefaultProject,
  displayTheForm,
  addItemToCheckList,
  clearForm,
} from "./dom-manip.js";

//Load on first land

blankProjectLoad();

//call DOM manipulation module to load default project
//displayDefaultProject();

//click events module

let clickEventsModule = (function () {
  //click event for displaying the form
  const addNewToDo = document.querySelector(".add-todo-button");
  addNewToDo.addEventListener("click", displayTheForm);

  //click event for adding an item to the checklist on the form
  const addToCheckList = document.querySelector(".add-to-checklist");
  addToCheckList.addEventListener("click", addItemToCheckList);

  //click event to clear the form
  const clearButton = document.querySelector(".reset-button");
  clearButton.addEventListener("click", clearForm);

  //click event to submit a new todo form to project

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", createToDo);
})();

//call create-to-do.js module file and apply some objects/properties

//const myToDo = createToDo(
//"Grocery Run",
//"Go get Groceries",
//"15/6/2023",
//"Low",
//"meat",
//"milk"
//);
//const myToDo2 = createToDo(
//"homework",
//"Do Odin Project work",
//"20/6/2023",
//"medium"
//);
//console.log("Show me properties on myToDo from index.js.....", myToDo);
//console.log("Show me properties on myToDo from index.js.....", myToDo2);
