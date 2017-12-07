(function(exports){
  function Note(string, noteId){
    this.text = string
    this.id = noteId
  }

  Note.prototype.store = function(){
    return this.text;
  };

  exports.Note = Note;
})(this);
