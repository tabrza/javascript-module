function NoteListModelTest(){
  var noteList = new NoteList();
  var describe = "has note list"
  assert.isObjectType(describe, noteList.notes, []);
}

function addNoteTest(){
  var noteList = new NoteList();
  var describe = "adds a note";
  noteList.addNote("check");
  assert.isInstanceOf(describe, noteList.notes[0], Note)
}

// function returnNotes(){
//   var noteList = new NoteList();
//   var describe = 'returns not list'
//
//
// }

NoteListModelTest();
addNoteTest();
