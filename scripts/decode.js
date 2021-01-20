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
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
                //   36   37   38   39   40   41   42   43   44   45
                    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
                //   46   47   48   49   50   51   52   53   54   55
                    '`', '~', '-', '=', '+', '[', ']', '{', '}', '\\',
                //   56   57    58    59   60   61   62   63   64   65   66   67   68
                    '|', '\"', '\'', '<', '>', '/', ',', '.', '?', ';', ':', '_', ' ',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U',
                    'W', 'V', 'X', 'Y', 'Z', 'Q'];

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

            case '!': decrypted_text += letters[dchck(36, key)]; break;
            case '@': decrypted_text += letters[dchck(37, key)]; break;
            case '#': decrypted_text += letters[dchck(38, key)]; break;
            case '$': decrypted_text += letters[dchck(39, key)]; break;
            case '%': decrypted_text += letters[dchck(40, key)]; break;
            case '^': decrypted_text += letters[dchck(41, key)]; break;
            case '&': decrypted_text += letters[dchck(42, key)]; break;
            case '*': decrypted_text += letters[dchck(43, key)]; break;
            case '(': decrypted_text += letters[dchck(44, key)]; break;
            case ')': decrypted_text += letters[dchck(45, key)]; break;

            case '`': decrypted_text += letters[dchck(46, key)]; break;
            case '~': decrypted_text += letters[dchck(47, key)]; break;
            case '-': decrypted_text += letters[dchck(48, key)]; break;
            case '=': decrypted_text += letters[dchck(49, key)]; break;
            case '+': decrypted_text += letters[dchck(50, key)]; break;
            case '[': decrypted_text += letters[dchck(51, key)]; break;
            case ']': decrypted_text += letters[dchck(52, key)]; break;
            case '{': decrypted_text += letters[dchck(53, key)]; break;
            case '}': decrypted_text += letters[dchck(54, key)]; break;
            case '\\': decrypted_text += letters[dchck(55, key)]; break;

            case '|': decrypted_text += letters[dchck(56, key)]; break;
            case '\"': decrypted_text += letters[dchck(57, key)]; break;
            case '\'': decrypted_text += letters[dchck(58, key)]; break;
            case '<': decrypted_text += letters[dchck(59, key)]; break;
            case '>': decrypted_text += letters[dchck(60, key)]; break;
            case '/': decrypted_text += letters[dchck(61, key)]; break;
            case ',': decrypted_text += letters[dchck(62, key)]; break;
            case '.': decrypted_text += letters[dchck(63, key)]; break;
            case '?': decrypted_text += letters[dchck(64, key)]; break;
            case ';': decrypted_text += letters[dchck(65, key)]; break;
            case ':': decrypted_text += letters[dchck(66, key)]; break;
            case '_': decrypted_text += letters[dchck(67, key)]; break;
            case ' ': decrypted_text += letters[dchck(68, key)]; break;

            case 'A': decrypted_text += letters[dchck(69, key)]; break;
            case 'B': decrypted_text += letters[dchck(70, key)]; break;
            case 'C': decrypted_text += letters[dchck(71, key)]; break;
            case 'D': decrypted_text += letters[dchck(72, key)]; break;
            case 'E': decrypted_text += letters[dchck(73, key)]; break;
            case 'F': decrypted_text += letters[dchck(74, key)]; break;
            case 'G': decrypted_text += letters[dchck(75, key)]; break;
            case 'H': decrypted_text += letters[dchck(76, key)]; break;
            case 'I': decrypted_text += letters[dchck(77, key)]; break;
            case 'J': decrypted_text += letters[dchck(78, key)]; break;
            case 'K': decrypted_text += letters[dchck(79, key)]; break;
            case 'L': decrypted_text += letters[dchck(80, key)]; break;
            case 'M': decrypted_text += letters[dchck(81, key)]; break;
            case 'N': decrypted_text += letters[dchck(82, key)]; break;
            case 'O': decrypted_text += letters[dchck(83, key)]; break;
            case 'P': decrypted_text += letters[dchck(84, key)]; break;
            case 'R': decrypted_text += letters[dchck(85, key)]; break;
            case 'S': decrypted_text += letters[dchck(86, key)]; break;
            case 'T': decrypted_text += letters[dchck(87, key)]; break;
            case 'U': decrypted_text += letters[dchck(88, key)]; break;
            case 'W': decrypted_text += letters[dchck(89, key)]; break;
            case 'V': decrypted_text += letters[dchck(90, key)]; break;
            case 'X': decrypted_text += letters[dchck(91, key)]; break;
            case 'Y': decrypted_text += letters[dchck(92, key)]; break;
            case 'Z': decrypted_text += letters[dchck(93, key)]; break;
            case 'Q': decrypted_text += letters[dchck(94, key)]; break;
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
        if(k == 0) k = 95;
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