console.log(globalThis);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));
console.log(parseInt('12.32'));
console.log(parseFloat('12.32'));

// URL URI 하위개념
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프 처리해야한다

const URL = 'https://드림코딩.com'
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 컴포넌트 이용
const part = '드림코딩.com'
encodeURIComponent(part);
console.log(part);
console.log(encodeURIComponent(part));