/**
  {
    "api":1,
    "name":"iOS Localizables to Android Strings",
    "description":"Converts iOS Localizables to Android Strings",
    "author":"Manuel Kunz (https://github.com/KunzManuel)",
    "icon":"quote",
    "tags":"string, android, ios"
  }
**/

function main(input) {
    let lines = input.fullText.split('\n')
    var result = []
    lines.forEach(element => {
      if(element !== "") {
        var regex = /"(.*?)"/g
        var matches = [];
        var match = regex.exec(element);
        while (match != null) {
            matches.push(match[1]);
            match = regex.exec(element);
        }
        result.push("<string name=\"" + matches[0] + "\">" + matches[1] + "</string>")
      }      
    })   
    input.fullText = result.join('\n')
}
