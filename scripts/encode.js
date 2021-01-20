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

            case '!': crypted_text += letters[chck(36, key)]; break;
            case '@': crypted_text += letters[chck(37, key)]; break;
            case '#': crypted_text += letters[chck(38, key)]; break;
            case '$': crypted_text += letters[chck(39, key)]; break;
            case '%': crypted_text += letters[chck(40, key)]; break;
            case '^': crypted_text += letters[chck(41, key)]; break;
            case '&': crypted_text += letters[chck(42, key)]; break;
            case '*': crypted_text += letters[chck(43, key)]; break;
            case '(': crypted_text += letters[chck(44, key)]; break;
            case ')': crypted_text += letters[chck(45, key)]; break;
            
            case '`': crypted_text += letters[chck(46, key)]; break;
            case '~': crypted_text += letters[chck(47, key)]; break;
            case '-': crypted_text += letters[chck(48, key)]; break;
            case '=': crypted_text += letters[chck(49, key)]; break;
            case '+': crypted_text += letters[chck(50, key)]; break;
            case '[': crypted_text += letters[chck(51, key)]; break;
            case ']': crypted_text += letters[chck(52, key)]; break;
            case '{': crypted_text += letters[chck(53, key)]; break;
            case '}': crypted_text += letters[chck(54, key)]; break;
            case '\\': crypted_text += letters[chck(55, key)]; break;
            
            case '|': crypted_text += letters[chck(56, key)]; break;
            case '\"': crypted_text += letters[chck(57, key)]; break;
            case '\'': crypted_text += letters[chck(58, key)]; break;
            case '<': crypted_text += letters[chck(59, key)]; break;
            case '>': crypted_text += letters[chck(60, key)]; break;
            case '/': crypted_text += letters[chck(61, key)]; break;
            case ',': crypted_text += letters[chck(62, key)]; break;
            case '.': crypted_text += letters[chck(63, key)]; break;
            case '?': crypted_text += letters[chck(64, key)]; break;
            case ';': crypted_text += letters[chck(65, key)]; break;
            case ':': crypted_text += letters[chck(66, key)]; break;
            case '_': crypted_text += letters[chck(67, key)]; break;
            case ' ': crypted_text += letters[chck(68, key)]; break;

            case 'A': crypted_text += letters[chck(69, key)]; break;
            case 'B': crypted_text += letters[chck(70, key)]; break;
            case 'C': crypted_text += letters[chck(71, key)]; break;
            case 'D': crypted_text += letters[chck(72, key)]; break;
            case 'E': crypted_text += letters[chck(73, key)]; break;
            case 'F': crypted_text += letters[chck(74, key)]; break;
            case 'G': crypted_text += letters[chck(75, key)]; break;
            case 'H': crypted_text += letters[chck(76, key)]; break;
            case 'I': crypted_text += letters[chck(77, key)]; break;
            case 'J': crypted_text += letters[chck(78, key)]; break;
            case 'K': crypted_text += letters[chck(79, key)]; break;
            case 'L': crypted_text += letters[chck(80, key)]; break;
            case 'M': crypted_text += letters[chck(81, key)]; break;
            case 'N': crypted_text += letters[chck(82, key)]; break;
            case 'O': crypted_text += letters[chck(83, key)]; break;
            case 'P': crypted_text += letters[chck(84, key)]; break;
            case 'R': crypted_text += letters[chck(85, key)]; break;
            case 'S': crypted_text += letters[chck(86, key)]; break;
            case 'T': crypted_text += letters[chck(87, key)]; break;
            case 'U': crypted_text += letters[chck(88, key)]; break;
            case 'W': crypted_text += letters[chck(89, key)]; break;
            case 'V': crypted_text += letters[chck(90, key)]; break;
            case 'X': crypted_text += letters[chck(91, key)]; break;
            case 'Y': crypted_text += letters[chck(92, key)]; break;
            case 'Z': crypted_text += letters[chck(93, key)]; break;
            case 'Q': crypted_text += letters[chck(94, key)]; break;
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
    temp = (index + key)%95;
    return temp;
}

inputCode.addEventListener("input", function(){
    encode(inputCode.value);
});