  function pageContainsList(){
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
    var noteController = new NoteController(allNotes);
    var noteListView = new NoteListView(allNotes);
    var render = noteListView.renderHtml();
    noteController.printList()
    assert.isEqual("list item produced on page", document.getElementById('list').innerHTML, "<ul><li><div> Marco </div></li></ul>");
  }

  pageContainsList();
