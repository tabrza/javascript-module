function returnNoteListView() {
  var noteList = new NoteList();
  var note = new Note();
  var noteListView = new NoteListView();

  noteList.addNote('Marco');
  noteList.addNote('marco2');
  var allNotes = noteList.allNotes()
  console.log(allNotes + "OVER HEEERE")
  var renderedNotes = noteListView.renderHtml(allNotes)
  var renderedTestNote = "<li><div> Marco </div></li>"
  var describe = "The note is rendered in HTML"
  assert.isEqual(describe, renderedNotes, renderedTestNote )

}
returnNoteListView();
