function calculate(){
    var userInput = document.getElementById('screenone').innerText;
    var result = eval(userInput);
    document.getElementById('screentwo').innerText = result;
}

var screendiv = document.getElementById('screenone')
var resultdiv = document.getElementById('screentwo')

function editscreen(data){
    if(data == 'C'){
        screendiv.innerText = '';
        resultdiv.innerText = '';
        return
    }
    if(data == 'Delet'){
        var textlength = screendiv.innerText.length;
        screendiv.innerText = screendiv.innerText.slice(0, textlength -1);
        return
    }
    screendiv.innerText += data
}