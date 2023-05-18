// factory function to create blank project array list

export const blankProjectLoad = () => {
  console.log(
    "called blankProjectLoad module...creating blank project array now"
  );
  let projectsArray = [];
  console.log("pushing the title name of project to projectsArray....");
  let projectTitle = "Default Project";
  projectsArray.push({ projectTitle });
  console.log(projectsArray);
  return { projectsArray, projectTitle };
};
