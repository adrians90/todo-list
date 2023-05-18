import { compareAsc, format, parseISO, startOfToday } from "date-fns";
import { clearForm } from "./dom-manip";
import { saveToDoToLocal } from "./manage-local-storage.js";

//creating an array for ToDo

let toDoArray = [];

//factory function to create to do list

export const createToDo = () => {
  let Title = document.getElementById("Title").value;
  let Description = document.getElementById("Description").value;
  let DueDate = document.getElementById("DueDate").value;
  let Priority = document.getElementById("Priority").value;

  //check to see if empty fields exist
  //if (Title == "" || Description == "" || DueDate == "") {
  // alert("Title, Description and Due Date are required fields!");
  // return;
  //}

  //Check to see if a pre-date was entered
  if (parseISO(DueDate) < startOfToday()) {
    alert("You have entered a date that has already passed!");
    console.log("due date", parseISO(DueDate));
    console.log("date now", startOfToday());
    return;
  }

  //Loop over the nodelist for check list items from the DOM and format to string
  const nodeListCheckList = document.querySelectorAll("li");
  let CheckListArray = [];
  for (let i = 0; i < nodeListCheckList.length; i++) {
    //strip off the 'x' from the end of each li and then push to temp array
    let strippedCheckList = nodeListCheckList[i].textContent.replace(
      "\u00D7",
      ""
    );
    CheckListArray.push(strippedCheckList);
  }

  //Strip off the checklist array and convert to string with commas
  let CheckList = CheckListArray.join(", ");

  console.log("Called createToDo module...creating todo now");
  console.log({ Title, Description, DueDate, Priority, CheckList });
  console.log("Pushing this object to the toDoArray...");
  //TODO: remove below lines of code if array is not needed
  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
  console.log(toDoArray);

  // Call storage module and push object to local storage
  saveToDoToLocal({ Title, Description, DueDate, Priority, CheckList });

  //reset the form after successful submission

  clearForm();
  return { Title, Description, DueDate, Priority, CheckList };
};
