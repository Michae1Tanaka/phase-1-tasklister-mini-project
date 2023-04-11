document.addEventListener("DOMContentLoaded", () => {
  //assigns the form to a vairble
  const form = document.getElementById('create-task-form');
  
  //assigns the user's input to a variable
  const input = document.getElementById('new-task-description')

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    createTasks(input.value)
  })
 
});

//creates a list counter
let listCounter = 0;

function createTasks (todo){
  //creates a li element for the tasks
  let listOfTasks = document.createElement('li');

  //increments the listCounter Variable
  listCounter++;

  //create a class attribute for lists
  listOfTasks.setAttribute('id', 'list-' + listCounter);
  
  //assigns the ul element to a variable
  let tasks = document.getElementById('tasks');
  
  //creates a delete button for the list of tasks
  let theDeleteButton = document.createElement('button');

  //create an id for the button
  theDeleteButton.setAttribute('id','btn')

  //creates the text of the tasks
  listOfTasks.textContent = ` ${todo} `;

  //adds the new list of tasks as a child of the ul element
  tasks.appendChild(listOfTasks);

  //adds delete button as a child of li element we created
  listOfTasks.appendChild(theDeleteButton);

  //makes the delete button an 'x'
  theDeleteButton.textContent = 'x';

  //deletes to-do when clicking the 'x' button
  theDeleteButton.addEventListener('click',()=>listOfTasks.remove());

  //create dropdown menu
  let dropDown = document.createElement('select');

  //give id attribute to select element
  dropDown.setAttribute('id','Priority_Level')

  //attach dropdown menu to list
   listOfTasks.prepend(dropDown)

  //gives option choices for dropdown menu
  let dropDownChoices = ['Priority Level','Low','Medium','High'];

  //creates option elements for dropdown 
  for(let i = 0; i < dropDownChoices.length; i++){
    let option = document.createElement('option');
    option.value = dropDownChoices[i];
    dropDown.value = option.value
    option.text = dropDownChoices[i];
    dropDown.appendChild(option)
  }


//assign click event to select element
dropDown.addEventListener('change',(e)=>{
  if(dropDown.value === 'Low'){
    listOfTasks.style.color = "green"
  } else if (dropDown.value === 'Medium'){
    listOfTasks.style.color = 'yellow'
  } else if (dropDown.value === 'High'){
    listOfTasks.style.color = 'red'
  }
} )
}