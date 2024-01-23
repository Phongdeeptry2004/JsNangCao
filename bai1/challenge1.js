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
    scored:['Paulo Dybala','Antoine Griezmann','Paulo Dybala'],
    date:"10-12-2022",
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5
    },
};

// Đề bài 
/*
1.Tạo một mảng cầu thủ cho mỗi đội bóng (biến ‘players1’ và ‘players2’).
2.Cầu thủ đầu tiên trong bất kỳ mảng cầu thủ nào là thủ môn và những người khác là cầu thủ trên sân. Đối với Bayern Munich (đội 1), tạo một biến (‘gk’) với tên thủ môn và một mảng (‘fieldPlayers’) với tất cả 10 cầu thủ trên sân còn lại.
3.Tạo một mảng ‘allPlayers’ chứa tất cả các cầu thủ của cả hai đội (22 cầu thủ).
4.Trong trận đấu, Bayern Munich (đội 1) đã sử dụng 3 cầu thủ dự bị. Vì vậy, tạo một mảng mới (‘playersFinal’) chứa tất cả các cầu thủ ban đầu của đội 1 cộng với ‘Thiago’, ‘Coutinho’ và ‘Perisic’.
5.Dựa trên đối tượng game.odds, tạo một biến cho mỗi tỷ lệ (gọi là ‘team1’, ‘draw’ và ‘team2’).
6.Viết một hàm (‘printGoals’) nhận một số tên cầu thủ tùy ý (KHÔNG phải là một mảng) và in từng tên cầu thủ đó ra console, cùng với số bàn thắng đã được ghi (số lượng tên cầu thủ được truyền vào).
7.Đội có tỷ lệ thấp hơn là có khả năng thắng hơn. In ra console đội nào có khả năng thắng hơn, KHÔNG sử dụng câu lệnh if/else hoặc toán tử ba ngôi.
*/

//bài 1
const players1=[...game.players[0]];
const players2=[...game.players[1]];

//bài 2
const [gk, ...fieldPlayers]=players1;
// console.log(gk,fieldPlayers);

// bài 3

const allPlayers = [...players1, ...players2];

// bài 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//bài 5
const { team1, x: draw, team2 } = game.odds;

// bài 6
function printGoals(...playerNames) {
    console.log(`${playerNames.length} goals were scored`);
    for (const playerName of playerNames) {
      console.log(playerName);
    }
  }

// bài 7
team1 < team2 && console.log(game.team1 + ' is more likely to win');
team1 > team2 && console.log(game.team2 + ' is more likely to win');