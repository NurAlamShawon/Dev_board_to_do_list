function remaining_task() {
  const remaining_tasks = document.getElementById("remaining_tasks");
  const remaining = parseFloat(remaining_tasks.innerText);
  const value = remaining - 1;
  remaining_tasks.innerText = value;
  if(value===0){
    alert("Congratulation you have completed all the task");
    
  }else{
    alert("Board update successfully");
  }
}

function total_complete() {
  const total_task = document.getElementById("total_task");
  const total = parseFloat(total_task.innerText);
  const value = total + 1;
  total_task.innerText = value;
}

function disable(button) {
  button.disabled = true;
}

function delete_history() {
  const history = document.getElementById("history");
  history.innerHTML = "";
  console.log("bhai kaz kore na?");
}

function add_paragraph(para, title) {
  const title_text= title.innerText;
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  console.log(hours);
  console.log(title_text);
  console.log(minutes);
  console.log(seconds);

  if(hours<12){
    para.innerHTML += `
    <p class="bg"> You have completed the task ${title_text} at ${hours}:${minutes}:${seconds} am </p>`;
  }else{
    para.innerHTML += `
    <p class="bg"> You have completed the task ${title_text} at ${hours}:${minutes}:${seconds} pm </p>`;
  }
 
}
