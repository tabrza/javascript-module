(function(exports){

  function NoteList(){
    this.notes = []
  }

  NoteList.prototype.addNote = function(string){
    var note = new Note(string)
    this.notes.push(note)
  }

  NoteList.prototype.allNotes = function(){
    notes = this.notes;
    // for(var i = 0; i < notes.length; i++){
    //   return notes[i];
    // }
    return notes;
  }

  exports.NoteList = NoteList;
})(this);
