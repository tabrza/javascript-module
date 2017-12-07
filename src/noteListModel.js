(function(exports){

  function NoteList(){
    this.notes = []
    this.id = 0;
  }

  NoteList.prototype.addNote = function(string){
    noteId = this.id
    var note = new Note(string, noteId)
    this.id ++
    this.notes.push(note)

  }

  NoteList.prototype.allNotes = function(){
    return this.notes;
  }

  exports.NoteList = NoteList;
})(this);
