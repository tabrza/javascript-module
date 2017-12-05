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

function returnAllNotesTest(){
  var noteList = new NoteList();
  var describe = 'returns note list'
  noteList.addNote('test')
  console.log(noteList.allNotes().text)
  assert.isEqual(noteList.allNotes().text === 'test')
}

NoteListModelTest();
addNoteTest();
returnAllNotesTest();
