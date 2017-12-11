function NoteDouble(string, noteId){
  this.text = string;
  this.id = noteId;
}

function NoteListDouble(){
  this.notes= []
  this.id = 0
};

NoteListDouble.prototype = {
  addNote: function(string){
    var noteDouble = new NoteDouble(string, this.id);
    this.id++
    this.notes.push(noteDouble)
  },

  allNotes: function(){
    return this.notes;
  }
}

  function setup(){
    var noteListDouble = new NoteListDouble();
    noteListDouble.addNote('Marco');
    noteListDouble.addNote('testinggggggggggggg');
    noteListDouble.addNote('Mar12345678901234567890co');

    var allNotes = noteListDouble.allNotes();
    var noteListView = new NoteListView(noteListDouble.notes);

    var noteController = new NoteController(noteListDouble);
    var render = noteListView.renderHtml();

    noteController.printList();

    window.addEventListener("hashchange", function() {
      noteController.moo();
    });

  }

  function pageContainsList() {
    setup();
    assert.isEqual("list item produced on page", document.getElementById('list').innerHTML, '<ul><li><div><a href="#notes/0"> Marco </a></div></li></ul>');
  }

  function changeHTMLForEachNote(){
    setup();
    assert.isTrue("HTML tag for each note",window.location.href.includes("#notes/0"))
  }

  function selectNote(){
    setup();
    var currentID = location.hash.split("#notes/")[1];
    noteController.moo();
    assert.isEqual("list item produced on page", document.getElementById('app').innerHTML, 'Marco');

  }

  pageContainsList();
  changeHTMLForEachNote();
  selectNote();
