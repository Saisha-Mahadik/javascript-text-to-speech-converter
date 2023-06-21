function audio(){
    var x = document.querySelector("textarea").value
    var y = new SpeechSynthesisUtterance(x)
    speechSynthesis.speak(y)
}

