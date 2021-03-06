console.log('This is Magic Notes ')
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {

    let addTxt = document.getElementById('addTxt');

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = "";
    console.log(notesObj)
    showNotes();
})

function showNotes() {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach((element, index) => {

        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title"> Note ${index+1} </h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
            </div>
        </div>`
    });

    let notesElm = document.getElementById('notes');

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else
    {
        notesElm.innerHTML=`Nothing to  show! Use 'Add a Note' Section above to add notes `
    }

}

// Function for delete the notes 

function deleteNote(index) {
    console.log('Im delete',index)

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();

}


// For searching the notes 

let search=document.getElementById('searchTxt');
search.addEventListener('input', ()=>{

    let inputVal=search.value.toLowerCase();
    console.log('Input Event Fires!', inputVal);

    let noteCards=document.getElementsByClassName('noteCard')

    Array.from(noteCards).forEach((element)=>{
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display='none';
        }
        // console.log(cardTxt)
    })
})



