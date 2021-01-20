let copyEncoded = document.getElementById("copyEncoded");
let copyDecoded = document.getElementById("copyDecoded");

let encoded_text = document.getElementById("outputCode");
let decoded_text = document.getElementById("outputDecode");

copyEncoded.addEventListener("click", function(){
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(encoded_text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copied div content to clipboard");
});

copyDecoded.addEventListener("click", function(){
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(decoded_text);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copied div content to clipboard");
});