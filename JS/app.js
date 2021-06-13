// console.log('OM NAMAY SIVAY');
showNote();

let addBTn = document.getElementById('addBtn');


addBTn.addEventListener('click', function (e) {
    console.log('working');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    addTxt.value = "";
    console.log(notesObj);
    showNote();
})


function showNote() {
    let html = "";
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function (element, index) {


        html += `
    <div class="notesCard card my-3 mx-3" style="width: 18rem;">
           
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text"> ${element}</p>
      <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div> `



    })
    let elem = document.getElementById('notes');
    if (notesObj.length != 0) {
        elem.innerHTML = html;
    }
    else {
        elem.innerHTML = 'Nothing to show here';
    }

}
// function to delete

// ************



function deleteNotes(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    // console.log("I am deleting " + index);
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNote();

}
// Search Function
let search = document.getElementById('searchTxt');


search.addEventListener('input', function () {
    
    let inputVal=search.value.toLowerCase();
    // console.log("This is working " +inputVal);
    
    let noteCard=document.getElementsByClassName('notesCard');
    Array.from(noteCard).forEach(function(element){
        let carTxt=element.getElementsByTagName('p')[0].innerText;

        // console.log("working");
        if (carTxt.includes(inputVal)) {
            element.style.display="block";
            
        } else {
            element.style.display="none";
            let elem =document.getElementById('notes');
            elem.innerHTML="Nothing to show here...Sorry Fucker"
        }

    })



})







