var languages = {
  javascript: /\b(function|return|var|this|new)\b/g /* ... etc */
};

function highlightAllCode() {
  var pres = document.body.getElementsByTagName("pre");    // gets element with the tag pre
  for (var i = 0; i < pres.length; i++) {                  // runs through that tag
    var pre = pres[i];                                     
    var lang = pre.getAttribute("data-language");
    var name = pre.getAttribute("class-proof");
    var classHW = pre.getAttribute("stuff");
    console.log('my name ' + name);
    console.log('In class test ' + classHW);
    if (languages.hasOwnProperty(lang))
      highlightCode(pre, languages[lang]);
  }
}
