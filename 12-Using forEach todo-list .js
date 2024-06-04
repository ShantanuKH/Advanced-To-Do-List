const todolist = [
    {
        name:'Shantanu',
        dueDate:'2002-12-04'
        },
        {name:'Khadse',
        dueDate:'2002-12-04',
    }
    ]; //Empty Array

renderTodolist();

function renderTodolist(){

    let todolistHTML =  ''; 



    // using forEach
    todolist.forEach(function(todoObject, index){
        
        const{name, dueDate} = todoObject; //Shortcut is given below -> Called destructing
         
        const html =`
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button 
        class="delete-todo-button js-todo-delete-button"> Delete </button>    
        `;  //It is called generating the HTML
        todolistHTML+=html;

    });
   

    
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;


    // It will select all the Delete buttons on the page that has class js-todo-delete-button
  document.querySelectorAll('.js-todo-delete-button') .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click' ,() => {todolist.splice(index, 1);
        renderTodolist();})
    })
}


document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
    addTodo()});


  
    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });





    function addTodo(){
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value

        const dateInputElement = document.querySelector('.js-due-Date-input');
        const dueDate = dateInputElement.value
        

        todolist.push({
            // name: name,
            // dueDate: dueDate
            name,
            dueDate
        });
       

        inputElement.value ='';

        renderTodolist();
};