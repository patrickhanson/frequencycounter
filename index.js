document.getElementById("countButton").onclick = function() {
    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    
    letterCounts = {};
    
    for(let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    for(letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

    let typedWords = document.getElementById("textInput").value;
    typedWords = typedWords.toLowerCase();
    typedWords = typedWords.replace(/[^a-z'\s]+/g, "");
    words = typedWords.split(/\s/);

    wordCounts = {};

    for(let i = 0; i < words.length; i++) {
        currentWord = words[i];
        if(wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++
        }
    }

    for(words in wordCounts) {
        let span = document.createElement("span");
        let wordContent = document.createTextNode('"' + words + "\": " + wordCounts[words] + ", ");
        span.appendChild(wordContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
}

