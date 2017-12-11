(function(exports){

  function NoteController(noteList){
    this.noteList = noteList;
  }

  NoteController.prototype.changeWord = function() {
    var jungle = document.getElementById('app');
    jungle.innerHTML = 'howdy' ;

  };

  NoteController.prototype.printList = function(){
    var noteListView = new NoteListView(this.noteList.notes);
    var render = noteListView.renderHtml()
    var oops = document.getElementById('list');
    oops.innerHTML =  render;
  }

  NoteController.prototype.moo = function(){
    showNote(getNoteFromUrl(window.location, this.noteList));

    function getNoteFromUrl(location, noteList) {
      var currentStringID = location.hash.split("#notes/")[1];
      var currentID = parseInt(currentStringID)
      return noteList.notes[currentID].text
    };

    function showNote(note) {
      document
      .getElementById("app")
      .innerHTML = note;
    };
  }

  exports.NoteController = NoteController;
})(this);


var noteList = new NoteList();
noteList.addNote('test1');
noteList.addNote('test2');
noteList.addNote('test3');
var noteController = new NoteController(noteList);
noteController.printList()
var callback = noteController.moo;
window.addEventListener("hashchange", callback);
