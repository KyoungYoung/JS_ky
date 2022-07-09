/**
 * switch
 * 정해진 범위안 값에 대해 특정 일을 해야 하는 경우
 */

let day = 2; // 0 - 월 ~ 
let dayName;
switch(day){
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일'; 
        break;
}
console.log(dayName);

let condition = 'toto';
let text;

switch(condition){
    case 'good':
    case 'okay':
        text = '좋아요';
        break;
    case 'bad':
        text = '나빠요';
        break;
    default:
        console.log('해당하는 게 없음');
}
// console.log(text);