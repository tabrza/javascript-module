var assert = {
  isTrue: function(describe, assertionToCheck){
    if (!assertionToCheck){
      throw new Error("assertion failed: " + assertionToCheck + "is not truthy");
    } else {
      console.log(describe)
    }
  },

  isObjectType: function(describe, val1, val2){
    if(val1.constructor === val2.constructor){
      console.log(describe)
    } else {
      throw new Error("assertion failed: " + val1 + "is not an object type as " + val2);
    }
  },

  isInstanceOf: function(describe, val, objectType){
    if(val instanceof objectType){
      console.log(describe)
    } else {
      throw new Error("assertion failed: " + val + "is not an instance of " + objectType);
    }
  }
};
