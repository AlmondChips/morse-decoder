const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
	' ':' ',
};

const binaryToMorse = {
	'10':'.',
	'11':'-',
	'00':'',
	
}

function decode(expr) {
    const exprLength = expr.length;
	const attemptCount = exprLength/10;

	let result = '';

	 for (let i = 0, pointer10 = 10; i < attemptCount; i++,pointer10+=10){
		const binaryLetter = expr.substring(i*10, pointer10)
	let letter = '';
	
		for (let j = 0, pointer2 = 2; j < 5; j++, pointer2+=2){
			if (binaryLetter === "**********"){
				letter+= " ";
				break;
			}
			letter+= decodeBinary(binaryLetter.substring(j*2, pointer2))
		}
		result+= MORSE_TABLE[letter];
	 }

	 return result;
	
}

function decodeBinary(binary){
return binaryToMorse[binary];
}

module.exports = {
    decode
}