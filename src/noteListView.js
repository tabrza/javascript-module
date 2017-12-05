(function(exports) {

  function NoteListView(){

  }

  NoteListView.prototype.renderHtml = function(notes) {
    for(var i = 0; i < notes.length; i++)
    return "<li><div> " + notes[i].text.text + " </div></li>"

    console.log("<li><div>" + notes[i].text.text + "</div></li>")
    console.log(notes[0].text.text)

  };

  exports.NoteListView = NoteListView;
})(this);
