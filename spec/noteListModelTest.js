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
  assert.isEqual(noteList.allNotes().text === 'test')
}

function incrementsIdTest(){
  var noteList = new NoteList();
  var describe = 'returns id of 0'
  noteList.addNote('test')
  noteList.addNote('test')
  assert.isEqual(describe, noteList.notes[0].id, 0)
}

NoteListModelTest();
addNoteTest();
returnAllNotesTest();
incrementsIdTest();
