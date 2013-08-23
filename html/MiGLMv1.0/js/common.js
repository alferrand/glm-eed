// if (!String.prototype.endsWith) {
//   Object.defineProperty(String.prototype, 'endsWith', {
//     enumerable: false,
//     configurable: false,
//     writable: false,
//     value: function (searchString, position) {
//       position = position || this.length;
//       position = position - searchString.length;
//       return this.lastIndexOf(searchString) === position;
//     }
//   });
// }

if (!String.prototype.endsWithGlm) {
  Object.defineProperty(String.prototype, 'endsWithGlm', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (searchString, position) {
      var regex = /\@glm.edu.co$/;
      var option = regex.test(searchString);
      return option;

    }
  });
}

if (!String.prototype.endsWithOutlook) {
  Object.defineProperty(String.prototype, 'endsWithOutlook', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (searchString, position) {
      var regex = /\@hotmail.com$/;
      var option = regex.test(searchString);
      return option;

    }
  });
}

if (!String.prototype.endsWithGoogle) {
  Object.defineProperty(String.prototype, 'endsWithGoogle', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (searchString, position) {
      var regex = /\@gmail.com$/;
      var option = regex.test(searchString);
      return option;

    }
  });
}

if (!String.prototype.endsWithYahoo) {
  Object.defineProperty(String.prototype, 'endsWithYahoo', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function (searchString, position) {
      var regex = /\@yahoo.com$/;
      var option = regex.test(searchString);
      return option;

    }
  });
}