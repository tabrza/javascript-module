  function NoteListDouble(){
    this.notes= []
  };

  function NoteDouble(string){
    this.text = string;
  }

  NoteListDouble.prototype = {
    addNote: function(string){
      var noteDouble = new NoteDouble(string);
      this.notes.push(noteDouble)
    },

    allNotes: function(){
      return this.notes;
    }
  }

  var noteListDouble = new NoteListDouble();
  noteListDouble.addNote('Marco');
  var allNotes = noteListDouble.allNotes();
  var noteListView = new NoteListView(allNotes);


  function returnNoteListView(){
    var renderedNotes = noteListView.renderHtml()
    var renderedTestNote = "<ul><li><div> Marco </div></li></ul>"
    var describe = "The note is rendered in HTML"
    assert.isEqual(describe, renderedNotes, renderedTestNote)
  }

  function returnNoteListLength20(){
    var noteListDouble = new NoteListDouble();
    noteListDouble.addNote('1235678901234567890extra');
    var allNotes = noteListDouble.allNotes();
    var noteListView = new NoteListView(allNotes);
    var renderedNotes = noteListView.renderHtml()
    var renderedTestNote = "<ul><li><div> 1235678901234567890 </div></li></ul>"
    var describe = "The note is rendered in HTML"
    assert.isEqual(describe, renderedNotes, renderedTestNote)
  }

returnNoteListView();
returnNoteListLength20()
