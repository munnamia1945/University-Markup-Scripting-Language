function addTask() {

    let task = document.getElementById("task").value.trim();

    if (task === "") {
        return;
    }


    let item = document.createElement("li");
    item.textContent = task;

    item.onclick = function() {
        item.remove();
    };


    document.getElementById("taskList").appendChild(item);
    document.getElementById("task").value = "";
}
