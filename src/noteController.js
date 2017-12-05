function changeWord(){
  var jungle = document.getElementById('app');
  jungle.innerHTML = 'howdy' ;
}
changeWord();




note = new Note();
noteList = new NoteList();
noteListView = new NoteListView();
noteList.addNote('marco');
noteList.addNote('marco2');
// console.log(noteList.allNotes())
console.log(noteListView.renderHtml(noteList.allNotes()))
var jungle = document.getElementById('list');
jungle.innerHTML = noteListView.renderHtml(noteList.allNotes());
