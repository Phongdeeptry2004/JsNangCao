// String Methods Practice
const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// � Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// � Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)
// lấy 3 ký tự đầu của một chuỗi và trả về 3 ký tự đó dưới dạng chữ hoa
const getCode = str => str.slice(0, 3).toUpperCase();
// lặp qua từng chuyến bay trong chuỗi được phân cách bởi đấu +
for (const flight of flights.split('+')) {
//gắn giá trị của mỗi phần của chuyến bay vào các  biến type, from, to , time
const [type, from, to, time] = flight.split(';');
//output chứa thông tin dưới dạng chuỗi 
const output = `${type.startsWith('_Delayed')/*kiêm tra xem có bắt đầu bằng chuõi không */ ? '�' : ''}${type.replaceAll(
'_',' ')/*thay thế tất cả ký tự _ bằng ký tự space */}${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
console.log(output);
}