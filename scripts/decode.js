let input = document.getElementById("inputDecode");
let outputDecode = document.getElementById("outputDecode");

let decode = (input) => {
    let message = input.split('');
    let key = getKey(message).toString();
    let chars = new Array();

    for(let i = 0; i < message.length; i++){
        if(i > key.length) chars.push(message[i]);
    }

    key = getKey(message);

    let decrypted_text = "";
    
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
            case 'a': decrypted_text += letters[dchck(0, key)]; break;
            case 'b': decrypted_text += letters[dchck(1, key)]; break;
            case 'c': decrypted_text += letters[dchck(2, key)]; break;
            case 'd': decrypted_text += letters[dchck(3, key)]; break;
            case 'e': decrypted_text += letters[dchck(4, key)]; break;
            case 'f': decrypted_text += letters[dchck(5, key)]; break;
            case 'g': decrypted_text += letters[dchck(6, key)]; break;
            case 'h': decrypted_text += letters[dchck(7, key)]; break;
            case 'i': decrypted_text += letters[dchck(8, key)]; break;
            case 'j': decrypted_text += letters[dchck(9, key)]; break;
            case 'k': decrypted_text += letters[dchck(10, key)]; break;
            case 'l': decrypted_text += letters[dchck(11, key)]; break;
            case 'm': decrypted_text += letters[dchck(12, key)]; break;
            case 'n': decrypted_text += letters[dchck(13, key)]; break;
            case 'o': decrypted_text += letters[dchck(14, key)]; break;
            case 'p': decrypted_text += letters[dchck(15, key)]; break;
            case 'r': decrypted_text += letters[dchck(16, key)]; break;
            case 's': decrypted_text += letters[dchck(17, key)]; break;
            case 't': decrypted_text += letters[dchck(18, key)]; break;
            case 'u': decrypted_text += letters[dchck(19, key)]; break;
            case 'w': decrypted_text += letters[dchck(20, key)]; break;
            case 'v': decrypted_text += letters[dchck(21, key)]; break;
            case 'x': decrypted_text += letters[dchck(22, key)]; break;
            case 'y': decrypted_text += letters[dchck(23, key)]; break;
            case 'z': decrypted_text += letters[dchck(24, key)]; break;
            case 'q': decrypted_text += letters[dchck(25, key)]; break;

            case '1': decrypted_text += letters[dchck(26, key)]; break;
            case '2': decrypted_text += letters[dchck(27, key)]; break;
            case '3': decrypted_text += letters[dchck(28, key)]; break;
            case '4': decrypted_text += letters[dchck(29, key)]; break;
            case '5': decrypted_text += letters[dchck(30, key)]; break;
            case '6': decrypted_text += letters[dchck(31, key)]; break;
            case '7': decrypted_text += letters[dchck(32, key)]; break;
            case '8': decrypted_text += letters[dchck(33, key)]; break;
            case '9': decrypted_text += letters[dchck(34, key)]; break;
            case '0': decrypted_text += letters[dchck(35, key)]; break;

            case '-': decrypted_text += ' '; break;
            case '^': decrypted_text += '.'; break;
            case '\"': decrypted_text += ','; break;
        }
    }

    console.clear();
    console.log("input: " + input);
    console.log("chars: " + chars);
    console.log("key" + key);
    console.log("decrypted message: " + decrypted_text);

    if(decrypted_text == "") outputDecode.textContent = "decoded message...";
    else outputDecode.textContent = decrypted_text;
}

let dchck = (index, key) => {
    let k = index;
    for(let i = key; i > 0; i--){
        if(k == 0) k = 36;
        k--;
    }
    return k;
}

let getKey = (message) => {
    let s = "";
    for(let i = 0; i < message.length; i++){
        if(message[i] != ':') s += message[i];
        else break;
    }
    let k = parseInt(s);
    console.log(k);
    return k;
}

input.addEventListener("input", function(){
    decode(input.value)
})