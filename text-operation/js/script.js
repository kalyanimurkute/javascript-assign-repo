function countWords() {
      let text = document.getElementById("textInput").value.trim();
      let words = text.split(/\s+/).filter(word => word.length > 0);
      document.getElementById("result").innerHTML = "Total Words: " + words.length;
    }

    function countCharacters() {
      let text = document.getElementById("textInput").value;
      document.getElementById("result").innerHTML = "Total Characters: " + text.length;
    }

    function toUppercase() {
      let textArea = document.getElementById("textInput");
      textArea.value = textArea.value.toUpperCase();
    }

    function toLowercase() {
      let textArea = document.getElementById("textInput");
      textArea.value = textArea.value.toLowerCase();
    }

    function clearText() {
      document.getElementById("textInput").value = "";
      document.getElementById("result").innerHTML = "";
    }