let count=1;
document.querySelector("#btn").addEventListener("click", function addTask(e) {
  let text = document.getElementById("text").value;
  
  if (text != "") {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", `taskadded`);
    newDiv.textContent = `Task ${count}- ${text}`;

    document.querySelector(".tasks").append(newDiv);
   
   
    count++;
    const newbtn = document.createElement("BUTTON");
    newbtn.setAttribute("class", "newbtn");
    newbtn.textContent = `remove`;
    document.querySelector(".tasks div:last-child ").append(newbtn);

    let currentele = document.querySelectorAll(".newbtn");
    for (let i = 0; i < currentele.length; i++) {
      currentele[i].onclick = function () {
        this.parentNode.remove();
        alert("Do You Want To Remove Task")
      };
    }
    document.getElementById("text").value="";
  } else alert("PLEASE ENTER A TODO ");

});
