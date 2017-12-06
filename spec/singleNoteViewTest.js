
  window.onload = function(){
    function viewingSingleNote(){

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


      var noteDouble = new NoteDouble('hello')
      var singleNote = new SingleNote(noteDouble)
      singleNote.printSingleNote();
      console.log("printnote", singleNote.printSingleNote())
      console.log("html",document.getElementById('singleItem').innerHTML)
      assert.isEqual("prints single note",  document.getElementById('singleItem').innerHTML, "<div>hello</div>")
    }

    viewingSingleNote();
  }
