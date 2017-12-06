(function(exports){

function SingleNote(note){
  this.note = note;
}

SingleNote.prototype.printSingleNote = function(){
  var outcome = "<div>" + this.note.text + "</div>"
  // return outcome
  var id = document.getElementById('singleItem');
  id.innerHTML = outcome

}


exports.SingleNote = SingleNote
})(this);
