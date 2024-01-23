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
