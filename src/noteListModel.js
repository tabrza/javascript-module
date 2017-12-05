(function(exports){

  function NoteList(){
    this.notes = []
  }

  NoteList.prototype.addNote = function(string){
    var note = new Note(string);
    this.notes.push(note)
  }


  exports.NoteList = NoteList;
})(this);
