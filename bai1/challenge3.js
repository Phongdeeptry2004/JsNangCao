gameEvents=new Map([
    [17,'Vào'],
    [36,'Thay người'],
    [47,'Vào'],
    [61,'Thay người'],
    [64,'Thẻ vàng'],
    [69,'Thẻ đỏ'],
    [70,'Thay người'],
    [72,'Thay Người'],
    [76,'Vào'],
    [80,'Vào'],
    [92,'Thẻ vàng'],
]);

// 1. Tạo một mảng ‘sự kiện’ gồm các sự kiện trò chơi khác nhau đã xảy ra (không trùng lặp)
const events = [...new Set(gameEvents.values())];

//  2. Sau khi trận đấu kết thúc, người ta thấy thẻ vàng ở phút 64 là không công bằng. Vì vậy hãy xóa sự kiện này khỏi nhật ký sự kiện trò chơi.
gameEvents.delete(64);

// 3. In chuỗi sau ra bảng điều khiển: “Trung bình cứ 9 phút lại có một sự kiện xảy ra” (hãy nhớ rằng một trò chơi có 90 phút)
const time = [...gameEvents.keys()].pop();
console.log(`Trung bình cứ ${time / gameEvents.size} phút là có một sự kiện sảy ra.`);

// 4. Lặp lại các sự kiện và ghi chúng vào bảng điều khiển đánh dấu xem đó là hiệp một hay hiệp hai (sau 45 phút) của trò chơi.
for (const [min, event] of gameEvents) {
   const half = min <= 45 ? '[Hiệp 1]' : '[Hiệp 2]';
   console.log(`${half} ${min}: ${event}`);
}
