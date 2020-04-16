const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
formdiv = document.getElementById('form');

function DeleteNode(id){
  ele = document.getElementById(id);
  let chkvalues = ele.getElementsByTagName('input');
  for(let chkvalue of chkvalues){
    if(!(chkvalue.checked)){
      val = parseInt(uncheckedCountSpan.innerHTML)-1;
      uncheckedCountSpan.innerHTML = val.toString();
    }
  }
  val = parseInt(itemCountSpan.innerHTML)-1;
  itemCountSpan.innerHTML = val.toString();
  // console.log(ele);
  ele.remove();
}

function chkValueUpdater(checked){
  console.log(checked)
  if (checked  == true){
    val = parseInt(uncheckedCountSpan.innerHTML)-1;
    uncheckedCountSpan.innerHTML = val.toString();
  }
  else{
    val = parseInt(uncheckedCountSpan.innerHTML)+1;
    uncheckedCountSpan.innerHTML = val.toString();
  }
  
}

function subclick(){
  element = document.getElementById('form1');
  //main logic
  newele = document.createElement('li');
  const d=new Date();//const is important here because d is getting overidden
  newele.id = d;
  newele.className = classNames.TODO_ITEM;

  text = document.createTextNode(element.Text.value);
  text.className = classNames.TODO_TEXT;

  chkbox = document.createElement("input");
  chkbox.type = 'checkbox';
  chkbox.className = classNames.TODO_CHECKBOX;
  chkbox.onchange = function(){chkValueUpdater(this.checked)};

  del = document.createElement("button");
  del.onclick = function(){DeleteNode(d)};
  del.innerHTML = 'DELETE';
  del.className = classNames.TODO_DELETE;


  newele.appendChild(text);
  newele.appendChild(chkbox);
  newele.appendChild(del);
  list.appendChild(newele);

  val = parseInt(itemCountSpan.innerHTML)+1;
  itemCountSpan.innerHTML = val.toString();

  val = parseInt(uncheckedCountSpan.innerHTML)+1;
  uncheckedCountSpan.innerHTML = val.toString();

  element.remove();
}
function newTodo() {
  // alert('New TODO button clicked!');
  formdiv.innerHTML="<form id='form1'><input type='text' name='Text'/><br><input type='button' onclick='subclick()' value='submit'/></form> ";
}


