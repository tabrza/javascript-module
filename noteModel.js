(function(exports){
  function Note(string){
    this.text = string
  }

  Note.prototype.store = function(){
    return this.text;
  };

  exports.note = Note;
})(this);
