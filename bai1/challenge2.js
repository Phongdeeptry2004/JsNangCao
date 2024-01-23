
const game={
    team1:"Campuchia",
    team2:"Lao",
    players:[
        [
            'Cristiano Ronaldo',
            'Lionel Messi ',
            'Neymar Jr.',
            'Kylian Mbappé ',
            'Mohamed Salah',
            'Kevin De Bruyne ',
            'Robert Lewandowski',
            'Harry Kane ',
            'Erling Haaland',
            'Karim Benzema',
            'Sergio Agüero',
        ],
        [
            'Paulo Dybala',
            'Antoine Griezmann',
            'Luis Suárez',
            'Sergio Ramos',
            'Luka Modric',
            'Toni Kroos',
            'Kevin De Bruyne',
            'Raheem Sterling',
            'Sadio Mané',
            'Mohamed Salah',
            'Robert Lewandowski',
        ]
    ],
    score:'4:0',
    scored:['Sadio Mané','Mohamed Salah'],
    date:"10-12-2022",
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5
    },
};
const gameEvents=new Map([
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
// 1. Lặp lại mảng game.scored và in tên từng người chơi vào bảng điều khiển, cùng với số bàn thắng (Ví dụ: “Bàn thắng 1: Lewandowski”)
for (const [i, player] of game.scored.entries()) {
    console.log(`Bàn thắng ${i + 1}: ${player}`);
}

// 2. Sử dụng vòng lặp để tính số lẻ trung bình và ghi nó vào bảng điều khiển (chúng tôi đã nghiên cứu cách tính số trung bình, bạn có thể kiểm tra nếu không nhớ)
let sum = 0;
for (const odd of Object.values(game.odds)) {
    sum += odd;
}
const averageOdd = sum / Object.values(game.odds).length;
console.log(`Tỷ lệ cược trung bình: ${averageOdd}`);

// 3. In 3 tỷ lệ cược ra bảng điều khiển nhưng được định dạng đẹp mắt chính xác như sau: Tỷ lệ thắng Campuchia: 1,33 Tỷ lệ hòa: 3,25 Tỷ lệ thắng Lao: 6,5 Lấy tên đội trực tiếp từ đối tượng trò chơi, không mã hóa chúng (ngoại trừ "vẽ"). GỢI Ý: Lưu ý tỷ lệ cược và đối tượng trò chơi có cùng tên thuộc tính 😊
console.log(`Tỷ lệ thắng ${game.team1}: ${game.odds.team1}`);
console.log(`Tỷ lệ hòa: ${game.odds.x}`);
console.log(`Tỷ lệ thắng ${game.team2}: ${game.odds.team2}`);