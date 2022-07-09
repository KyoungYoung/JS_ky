const now = new Date();
now.setFullYear(2023);
now.setMonth(11); // 0이 1월 
console.log(now.getFullYear());
console.log(now.getDate()); // 0이 1일
console.log(now.getDay()); // 0은 일요일 
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));