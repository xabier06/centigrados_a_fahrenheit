
function myFunction() {
    let text = document.getElementById("myInput").value;
        text = Number(text)
        text = (text * 9/5) + 32
    document.getElementById("demo").innerHTML = "Fahrenheit: " + text;
  }