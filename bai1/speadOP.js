const nhahang={
    ten:'Nhà hàng của Phong',
    vitri:"146 đội 9 thôn 5",
    danhmuc:['Thức ăn ý','thức ăn 2','dịch vụ 5 sao'],
    trangmieng:['Táo','Chuối','Kem','Salad','Hoa quả trộn'],
    montrinh:['Nem lụa','Chả phượng','Gà chín ngựa'],
    giomocua:{
    thu2:{
        open:12,
        close:22,
    },
    thu4:{
        open:10,
        close:23,
    },
    thu6:{
        open:6,
        close:20,
    },
    thu8:{
        open:0,
        close:24,
    }
    },
    order: function (startIndex,mainIndex) {
        return [this.trangmieng[startIndex],this.montrinh[mainIndex]];
    },
    orderDelivery:function({startIndex=1,mainIndex=2,time="20:00",address}){
        console.log(`Order rêcvied! ${this.trangmieng[startIndex]} and ${this.montrinh[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderChalua:function(ing1,ing2,ing3){
        console.log(`Here is your delicious Chả Lụa with ${ing1}, ${ing2}, ${ing3}`);
    }
};


const arr=[6,7,8];
const newArr=[1,2,...arr];
console.log(newArr);
console.log(...newArr);
//sao chép một mảng .
const newMenu = [...nhahang.montrinh];
console.log(newMenu);

//gộp 2 mảng 
const menu=[...nhahang.montrinh,...nhahang.trangmieng];
console.log(menu)

//iterables:arrays , tstrings, map, sets NOT objects

const str="Phong";
const letters=[...str,"  ","S."];
console.log(letters);
console.log(...str);

// const ingredients=[prompt('Let\'s make pasta! Ingredient 1?'),prompt('Let\'s make pasta! Ingredient 2?'),prompt('Let\'s make pasta! Ingredient 3?')];
// console.log(ingredients);

// nhahang.orderChalua(...ingredients);


//Object 
const newNhaHang={foundedIn:1998,...nhahang,founder:'tesst1'};
console.log(newNhaHang);

const nhahangcopy={...nhahang};
nhahangcopy.ten="tesst";
console.log(nhahangcopy.ten);
console.log(nhahang.ten);