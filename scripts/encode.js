let inputCode = document.getElementById("inputCode");
let outputCode = document.getElementById("outputCode");

let encode = (input) => {
    let message = input.split('');
    let key = "";
    let chars = new Array();

    //separating a key from the rest of the input
    for(let i = 0; i < message.length; i++){
        if(message[i] != ':' && !isNaN(message[i])) key += message[i];
        else break;
    }
    
    //creating 'chars' array from the 'message' array
    for(let i = 0; i < message.length; i++){
        if(i > key.length) chars.push(message[i])
    }

    key = parseInt(key);
    
    console.clear();
    console.log("input:  " + input)
    console.log("array:  " + message);
    console.log("key:    " + key + ", type: " + typeof key);
    console.log("chars:  " + chars);


    let crypted_text = "";
            
                //  0    1    2    3    4    5    6    7    8    9
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j',
                //   10   11   12   13   14   15   16   17   18   19
                    'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u',
                //   20   21   22   23   24   25
                    'w', 'v', 'x', 'y', 'z', 'q',
                //   26   27   28   29   30   31   32   33   34   35
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    for(let i = 0; i < chars.length; i++){
        switch(chars[i]){
            case 'a': crypted_text += letters[chck(0, key)]; break;
            case 'b': crypted_text += letters[chck(1, key)]; break;
            case 'c': crypted_text += letters[chck(2, key)]; break;
            case 'd': crypted_text += letters[chck(3, key)]; break;
            case 'e': crypted_text += letters[chck(4, key)]; break;
            case 'f': crypted_text += letters[chck(5, key)]; break;
            case 'g': crypted_text += letters[chck(6, key)]; break;
            case 'h': crypted_text += letters[chck(7, key)]; break;
            case 'i': crypted_text += letters[chck(8, key)]; break;
            case 'j': crypted_text += letters[chck(9, key)]; break;
            case 'k': crypted_text += letters[chck(10, key)]; break;
            case 'l': crypted_text += letters[chck(11, key)]; break;
            case 'm': crypted_text += letters[chck(12, key)]; break;
            case 'n': crypted_text += letters[chck(13, key)]; break;
            case 'o': crypted_text += letters[chck(14, key)]; break;
            case 'p': crypted_text += letters[chck(15, key)]; break;
            case 'r': crypted_text += letters[chck(16, key)]; break;
            case 's': crypted_text += letters[chck(17, key)]; break;
            case 't': crypted_text += letters[chck(18, key)]; break;
            case 'u': crypted_text += letters[chck(19, key)]; break;
            case 'w': crypted_text += letters[chck(20, key)]; break;
            case 'v': crypted_text += letters[chck(21, key)]; break;
            case 'x': crypted_text += letters[chck(22, key)]; break;
            case 'y': crypted_text += letters[chck(23, key)]; break;
            case 'z': crypted_text += letters[chck(24, key)]; break;
            case 'q': crypted_text += letters[chck(25, key)]; break;

            case '1': crypted_text += letters[chck(26, key)]; break;
            case '2': crypted_text += letters[chck(27, key)]; break;
            case '3': crypted_text += letters[chck(28, key)]; break;
            case '4': crypted_text += letters[chck(29, key)]; break;
            case '5': crypted_text += letters[chck(30, key)]; break;
            case '6': crypted_text += letters[chck(31, key)]; break;
            case '7': crypted_text += letters[chck(32, key)]; break;
            case '8': crypted_text += letters[chck(33, key)]; break;
            case '9': crypted_text += letters[chck(34, key)]; break;
            case '0': crypted_text += letters[chck(35, key)]; break;

            case ' ': crypted_text += '-'; break;
            case '.': crypted_text += '^'; break;
            case ',': crypted_text += '\"'; break;
        }
    }

    console.log("output: " + crypted_text);

    if(inputCode.value == ""){
        outputCode.textContent = "key:message...";
    } else {
        outputCode.textContent = key + ":" + crypted_text;
    }
}

let chck = (index, key) =>{
    let temp;
    temp = (index + key)%36;
    return temp;
}

inputCode.addEventListener("input", function(){
    encode(inputCode.value);
});