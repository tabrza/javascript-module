// var Note = require("./noteModel.js").note;


  function testStoreNote() {
    var note = new Note('string');
    var describe = 'Its fine!'
    assert.isTrue(describe, note.store() === 'string');
  };

  function testNoteTextProperty() {
    var note = new Note('string');
    var describe = 'Text is a property!'
    assert.isTrue(describe, note.text === 'string');
  };

testStoreNote();
testNoteTextProperty();
