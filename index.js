var container = document.getElementById('container');
var todoList = document.getElementById('todo-list');
var input = document.getElementById('input');
var addButton = document.getElementById('add-button');
var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function(){
    todoList.innerHTML = ""
});

input.addEventListener('keyup', function(e){
   if(e.keyCode === 13){
    addItem()
   }
});

addButton.addEventListener('click', function(){
  addItem();
});

function addItem(){
    if(input.value !== ""){
    var li = document.createElement('li');
    var removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.addEventListener('click', function(){
        this.parentNode.remove()
    });

    li.innerHTML = input.value;
    li.appendChild(removeBtn);
    li.classList.add('li');
    li.addEventListener('click', function(){
        if(li.classList.contains('lineThrough')){
            li.classList.remove('lineThrough');
        } else {
            li.classList.add('lineThrough');
        }
    });
    todoList.appendChild(li);
    input.value = "";
    }
}







