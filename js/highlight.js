var languages = {
  javascript: /\b(function|return|var|this|new)\b/g, /* ... etc */
  assembly: /\b(mov|rep|inc|jmp|main)\b/g	  
};

function highlightAllCode() {
  var pres = document.body.getElementsByTagName("pre");    // gets element with the tag pre
  for (var i = 0; i < pres.length; i++) {                  // runs through that tag
    var pre = pres[i];                                     
    var lang = pre.getAttribute("data-language");
    var name = pre.getAttribute("class-proof");
    console.log('my name ' + name);
    if (languages.hasOwnProperty(lang))
      highlightCode(pre, languages[lang]);
  }
}
