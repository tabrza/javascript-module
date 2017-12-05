function returnNoteListView() {
  var noteList = new NoteList();
  var note = new Note('Marco');
  var noteListView = new NoteListView();

  noteList.addNote(note);
  noteList.addNote(note);
  var allNotes = noteList.allNotes()
  console.log(allNotes + "OVER HEEERE")
  var renderedNotes = noteListView.renderHtml(allNotes)
  var renderedTestNote = "<li><div> Marco </div></li>"
  var describe = "The note is rendered in HTML"
  assert.isEqual(describe, renderedNotes, renderedTestNote )

}
returnNoteListView();
