(function(exports) {

  //noteList = NoteList
  function NoteListView(noteList){
    this.noteList = noteList
  }


  NoteListView.prototype.renderHtml = function() {
    var list = [];
    for(var i = 0; i < this.noteList.length; i++){
      list.push(`<li><div> ${this.noteList[i].text.slice(0,19)} </div></li>`)
    }
    return ("<ul>" + list.join(' ') + "</ul>");
  };

  exports.NoteListView = NoteListView;
})(this);
