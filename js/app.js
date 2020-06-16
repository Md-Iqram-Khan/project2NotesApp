showNotes()
const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click',(e)=>{

    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')

    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    addTxt.value = ""
    //console.log(notesObj)
    showNotes()
})

//function to show notes from locastorage

function showNotes(){
    let notes = localStorage.getItem('notes')

    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }
    let html = ""
    notesObj.forEach((elements,index)=>{
        html+=`
        <div class="noteCard mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${elements}</p>
          <button id="${index}"  onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>`
    });
    let noteselement = document.getElementById('notes')
    if(notesObj.length != 0){
        noteselement.innerHTML = html

    }else{
        noteselement.innerHTML = "Noting to show.Please Add a Note..."
    }
}

//function to delete a note from locastorage

function deleteNotes(index){
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    showNotes()
}

const search = document.getElementById('searchTxt')
search.addEventListener('input',()=>{
    let inputvalue = search.value.toLowerCase()
    let noteCard = document.getElementsByClassName('noteCard')
    Array.from(noteCard).forEach((element)=>{
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        if(cardTxt.includes(inputvalue)){
            element.style.display = "block"
        }else{
            element.style.display = "none"

        }
    })

})










