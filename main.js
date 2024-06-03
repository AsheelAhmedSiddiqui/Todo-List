// Starting variable
let userValue = document.getElementById("userValue");
let addBtn = document.getElementById("add");
let ol = document.getElementById("ol");

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  let listItem = document.createTextNode(userValue.value);
  li.appendChild(listItem);
  ol.appendChild(li);
  userValue.value = "";

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    ol.removeChild(li);
  });
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  li.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = listItem.textContent;
    li.replaceChild(editInput, listItem);
    editInput.addEventListener("blur", () => {
      listItem.textContent = editInput.value;
      li.replaceChild(listItem, editInput);
    });
  });

  let newDiv = document.createElement("div");
  newDiv.className = "btn-container";
  newDiv.appendChild(delBtn);
  newDiv.appendChild(editBtn);
  li.appendChild(newDiv);
});

userValue.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let li = document.createElement("li");
    let listItem = document.createTextNode(userValue.value);
    li.appendChild(listItem);
    ol.appendChild(li);
    userValue.value = "";
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    li.appendChild(delBtn);
    delBtn.addEventListener("click", () => {
      ol.removeChild(li);
    });
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    li.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = listItem.textContent;
      li.replaceChild(editInput, listItem);
      editInput.addEventListener("blur", () => {
        listItem.textContent = editInput.value;
        li.replaceChild(listItem, editInput);
      });
    });
    let newDiv = document.createElement("div");
    newDiv.className = "btn-container";
    newDiv.appendChild(delBtn);
    newDiv.appendChild(editBtn);
    li.appendChild(newDiv);
  }
});
