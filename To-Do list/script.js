function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    var date = new Date();
    var dateTimeString = formatDate(date);
    var listItem = createListItem(task, dateTimeString);
    listItem.addEventListener("click", onTaskClick);
    document.getElementById("taskList").appendChild(listItem);
    input.value = "";
  }
  
  function createListItem(task, dateTimeString) {
    var listItem = document.createElement("li");
    listItem.innerHTML = task + "<span>" + dateTimeString + "</span>" + "<button class='edit-btn'>Edit</button>" + "<button class='remove-btn'>Remove</button>";
    return listItem;
  }
  
  function onTaskClick(event) {
    var target = event.target;
    if (target.classList.contains("edit-btn")) {
      onEditClick(target.parentElement);
    } else if (target.classList.contains("remove-btn")) {
      onRemoveClick(target.parentElement);
    } else {
      onToggleDoneClick(target);
    }
  }
  
  function onToggleDoneClick(listItem) {
    listItem.classList.toggle("done");
    var span = listItem.querySelector("span");
    var date = new Date();
    var dateTimeString = formatDate(date);
    span.innerHTML = dateTimeString;
  }
  
  function onEditClick(listItem) {
    var taskText = listItem.firstChild.textContent;
    var newText = prompt("Enter new task text", taskText);
    if (newText === null) {
      return;
    }
    var span = listItem.querySelector("span");
    var date = new Date();
    var dateTimeString = formatDate(date);
    listItem.innerHTML = newText + "<span>" + dateTimeString + "</span>" + "<button class='edit-btn'>Edit</button>" + "<button class='remove-btn'>Remove</button>";
    listItem.addEventListener("click", onTaskClick);
  }
  
  function onRemoveClick(listItem) {
    if (confirm("Are you sure you want to remove this task?")) {
      listItem.remove();
    }
  }
  
  function formatDate(date) {
    var year = date.getFullYear();
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    var hours = padZero(date.getHours());
    var minutes = padZero(date.getMinutes());
    var seconds = padZero(date.getSeconds());
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  }
  
  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }
  