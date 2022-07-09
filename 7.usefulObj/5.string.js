const textObj = new String('helloworld');
const text = 'hello world'
console.log(textObj);
console.log(text);

// 어디에 있는지
console.log(text[0]);
console.log(text[1]);
console.log(text.charAt(0));
console.log(text.charAt(1));

// 문자가 어디에 있는지
console.log(text.indexOf('e'));
// 문자가 포함되어 있는지
console.log(text.includes('h'));
// 특정 문자로 시작하는지,끝나는지
console.log(text.startsWith('hee'));
console.log(text.endsWith('!'));
// 대소문자 변환
console.log(text.toUpperCase());
console.log(text.toLowerCase());
// 인덱스 가져오기
console.log(text.substring(0,2));
// 삭제
console.log(text.slice(2)); // 앞
console.log(text.slice(-2)); // 뒤

// 공백 제거
const space = '         hi     ';
console.log(space.trim());

// 문자열 나누기 
const longText = 'to the moon';
console.log(longText.split(' '));
console.log(longText.split(' ',2));
