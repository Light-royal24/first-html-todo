
const list = document.querySelector("#Todo ul");

// delete todo
list.addEventListener("click", function(e){
    if(e.target.className == 'close'){
        const li = e.target.parentElement;
        list.removeChild(li);
    };
});

// check todo
const listed = document.querySelector("ul");
const lis = document.querySelector("#Todo ul");

listed.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    };
    
}, false);

lis.addEventListener("click", function(e){
    if(e.target.className == 'name'){
       const target = e.target;
       const parent = target.parentElement;
       parent.classList.toggle('checked')
    };
});


// add new Todo
const addTodo =document.querySelector('#addTodo');

addTodo.addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.querySelector("#text");
    const inputvalue = input.value.trim();
    const ul = document.querySelector("#myUl")

     // create elemment
     const li = document.createElement('li');
     const todoNames = document.createElement('span');
     const deleteTodo = document.createElement('span'); 

      //add class name
      todoNames.className = 'name';
      deleteTodo.className = 'close'
      
     // add content 
     deleteTodo.textContent = 'x';
     todoNames.textContent = inputvalue;
     
     //append to dom
        li.appendChild(todoNames);
        li.appendChild(deleteTodo);

    //   appennd to ul 
     if (inputvalue === "") {
        return;
    } else {
    ul.appendChild(li);   
    }

    input.value = '';
    
    });
