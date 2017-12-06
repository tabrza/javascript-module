(function(exports) {

  //noteList = NoteList
  function NoteListView(noteList){
    this.noteList = noteList
    console.log("notelist", this.noteList )
  }


  NoteListView.prototype.renderHtml = function() {
    var list = [];
    for(var i = 0; i < this.noteList.length; i++){
      list.push("<li><div> " + this.noteList[i].text + " </div></li>")
    }
    return list.join(' ');
  };

  exports.NoteListView = NoteListView;
})(this);
