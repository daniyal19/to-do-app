function addTodo() {
    var todoInput = document.getElementById("todoInput");

    if (todoInput.value) {
        var liELement = document.createElement("li");

        var ulElement = document.getElementById("itemsData");

        // create delete btn element with DOM
        var DelbtnElement = document.createElement("button");

        var DelbtnText = document.createTextNode("Delete");

        DelbtnElement.setAttribute("onclick", "deleteSingleTodo(this)");

        DelbtnElement.setAttribute("class", "deletebtn");

        DelbtnElement.appendChild(DelbtnText);

        //   create Edit button element with DOM

        var EditbtnElement = document.createElement("button");

        var EditbtnText = document.createTextNode("Edit");

        EditbtnElement.appendChild(EditbtnText);

        EditbtnElement.setAttribute("onclick", "EditSingleTodo(this)");

        EditbtnElement.setAttribute("class", "Editbtn");

        // var liElement = document.createElement("li");

        // var ulElement = document.getElementById("itemsData");

        var liText = document.createTextNode(todoInput.value);

        liELement.appendChild(liText);

        ulElement.appendChild(liELement);
        
        liELement.appendChild(DelbtnElement);

        liELement.appendChild(EditbtnElement);

        console.log(liELement);

        todoInput.value = "";
    } else {
        alert("required input field");
    }
}

function deleteAllTodos() {
    var ulElement = document.getElementById("itemsData");
    ulElement.innerHTML = "";
}

function deleteSingleTodo(e) {
    e.parentNode.remove();
}

function EditSingleTodo(e) {
    var userInput = prompt("Enter Updated value");

    e.parentNode.firstChild.nodeValue = userInput;
}