(function(exports) {

  function NoteListView(){

  }

  NoteListView.prototype.renderHtml = function(notes) {
    var list = []
    for(var i = 0; i < notes.length; i++){
      list.push("<li><div> " + notes[i].text + " </div></li>")
    }
    return list.join(' ')
  };

  exports.NoteListView = NoteListView;
})(this);
