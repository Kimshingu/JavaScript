let todos = [
  {id:1, title:'Watching Two broken girl$', done:false}
];

// 배열에 추가하는 함수
function addTodo(title){
  let id = todos.length+1;
  let todo = {
    id,
    title,
    done: false
  };
  var test= todos.push(todo);
}


// 배열에의 데이터를 조회하는 함수
function getTodos(){
  return todos;
}

// 배열의 객체의 done 값을 변경하는 함수
  function changeDone(id){
    todos[id-1].done = !todos[id-1].done;
  }
  
// 배열안에 해당 객체를 삭제하는 함수
  function deleteTodo(id){
    todos.splice(id-1,1);
  }
  
// addTodo('tedtsdg');
// console.log(todos);
// changeDone(1);
// console.log(todos);
// changeDone(1);
// console.log(todos);
