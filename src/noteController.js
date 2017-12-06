(function(exports){

  function NoteController(noteList){
    this.noteList = noteList;
  }

  NoteController.prototype.changeWord = function() {
    var jungle = document.getElementById('app');
    jungle.innerHTML = 'howdy' ;

  };

  NoteController.prototype.printList = function(){
    var noteListView = new NoteListView(this.noteList);
    var render = noteListView.renderHtml()
    var oops = document.getElementById('list');
    oops.innerHTML =  render;
  }

  exports.NoteController = NoteController;
})(this);
