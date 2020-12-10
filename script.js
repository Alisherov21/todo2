
var id = 0;
var data = {};
if (window.localStorage.data){
    data = JSON.parse(window.localStorage.data)
    getElementsFromStorage();
}else {
    id = 0;
    data = {};
}

function getElementsFromStorage() {
    Object.keys(data).forEach(key => {
        var li = document.createElement("li");
        li.setAttribute("id", key);

        var inputValue = data[key]
        var t = document.createTextNode(inputValue);

        li.appendChild(t);
        document.getElementById("MainList").appendChild(li); 
        
        var span = document.createElement("SPAN");
        
        span.setAttribute("onclick", "remove(" + key + ")");
        
        var img = document.createElement("IMG");
        img.setAttribute("src", '12.png');
        
        
        span.className = "close";
        span.appendChild(img);
        li.appendChild(span);
        id = key
    });
}

function newElement() {
    
    id++
    var li = document.createElement("li");
    li.setAttribute("id", id);

    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    
    if (inputValue === '') {
        alert("The field is Empty as your Ex's Heart!!!");
    } else {
        document.getElementById("MainList").appendChild(li); 
        data = JSON.parse(window.localStorage.data)
        data[id] = inputValue
        window.localStorage.data = (data, JSON.stringify(data))
    }
    
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    
    span.setAttribute("onclick", "remove(" + id + ")");
    var img = document.createElement("IMG");
    img.setAttribute("src", '12.png');

    
    
    span.className = "close";
    span.appendChild(img);
    li.appendChild(span);
}


function remove(id){
    var data = JSON.parse(window.localStorage.data);
    delete data[id]
    window.localStorage.data = (data, JSON.stringify(data))

  var li = document.getElementById(id)
  document.getElementById("MainList").removeChild(li);
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   newElement()
  }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    save()
  }
}, false);

function save() {	
	var checkbox = document.getElementById("checkbox");
    localStorage.setItem("checkbox", checkbox.checked);	
}

//for loading
var checked = JSON.parse(localStorage.getItem("checkbox"));
    document.getElementById("checkbox").checked = checked;
