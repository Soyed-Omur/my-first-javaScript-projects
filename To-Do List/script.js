const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let editTodo = null;
// Function to add to do
const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert('You must write something in your to do');
        return ture;
    }

    if(addBtn.value === "Edit"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else{

        //creting p tag
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = inputText;
        li.appendChild(p);

        

        //creating editBtn
        const editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.classList.add('btn', 'editBtn');
        li.appendChild(editBtn);


        //creating deleteBtn
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add('btn', 'deleteBtn');
        li.appendChild(deleteBtn);


        todoList.appendChild(li);
        inputBox.value = "";
}
}

// Function to update : (Edit/Delete) to do
const updateTodo = (i)=>{
    if(i.target.innerHTML === "Remove"){
        todoList.removeChild(i.target.parentElement);
    }

    if(i.target.innerHTML === "Edit"){
        inputBox.value = i.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = i;
    }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);