function returnNoteListView() {

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
  console.log('ALL NOTES', allNotes)
  var noteListView = new NoteListView(allNotes);
  var renderedNotes = noteListView.renderHtml()
  var renderedTestNote = "<li><div> Marco </div></li>"
  var describe = "The note is rendered in HTML"
  assert.isEqual(describe, renderedNotes, renderedTestNote)

}
returnNoteListView();
