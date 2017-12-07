  function NoteListDouble(){
    this.notes= []
    this.id = 0
  };

  function NoteDouble(string){
    this.text = string;
    this.id = 0;
  }

  NoteListDouble.prototype = {
    addNote: function(string){
      var noteDouble = new NoteDouble(string);
      this.id ++
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
    var renderedTestNote = '<ul><li><div><a href="#notes/0"> Marco </a></div></li></ul>'
    var describe = "The note is rendered in HTML"
    assert.isEqual(describe, renderedNotes, renderedTestNote)
  }

  function returnNoteListLength20(){
    var noteListDouble = new NoteListDouble();
    noteListDouble.addNote('1235678901234567890extra');
    var allNotes = noteListDouble.allNotes();
    var noteListView = new NoteListView(allNotes);
    var renderedNotes = noteListView.renderHtml()
    var renderedTestNote = '<ul><li><div><a href="#notes/0"> 1235678901234567890 </a></div></li></ul>'
    var describe = "The note is rendered in HTML"
    assert.isEqual(describe, renderedNotes, renderedTestNote)
  }

returnNoteListView();
returnNoteListLength20()
