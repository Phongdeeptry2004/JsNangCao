//
console.log('Destructuring Array');
const myArray=[1,2,3,4,5,6,7];
const myOb={
    name:'Phong',
    age:19,
    like:['game','music','lean'],
    hate:['test','test2']
}
const [one=0,two=0,three=0]=myOb.name;

console.log(one,two,three);


// VD bỏ qua một phần tử 

const [mot , , ba,bon]=myArray;
console.log(mot,ba,bon);

// VD gắn giá trị mảng con cho biến 

const Array2=[1,2,3,[4,5,6]];
const [t1,,t3,[t4,t5,t6]]=Array2;

console.log(t1,t3,t4,t5,t6);

/*destructuring dùng để trích xuất các giá trị từ mảng hoặc một đối tượng và gán chúng cho các biến như ví dụ trên .
Chúng ta cũng có thể gắn giá trị mặc định cho các biến trong trường hợp giá trị của mảng đang là undefined
Nếu muốn sử dụng với Object thì trong đó phải có mảng ở trong đó . nếu sử dụng lên một string thì nó sẽ lấy các kí tự từ trái sang phải
Nếu muốn bỏ qua một phần tử thì ta thêm một phần rỗng vào trong destructuring
Ở trong một mảng 2 chiều thì ta vẫn có thể gán giá trị ở trong mảng con cho biến bằng cách trên
*/


//Destructuring Object
console.log('Destructuring Object');

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
    }
};

nhahang.orderDelivery({
    startIndex:2,
    manIndex:2,
    time:"22:30",
    address:"quảng bị",
});
nhahang.orderDelivery({
    startIndex:4,
    address:"quảng bị",
});

//VD gắn tên cho biến trong destructuring Object
const {ten:tennhahang,vitri:diachi}=nhahang;
console.log(tennhahang,diachi);

//VD truy cập OBJ trong OBJ
const {thu8:{open,close}}=nhahang.giomocua;
console.log(open,close);


/* destructuring ở Object khi muốn gắn giá trị cho biến thì ta phải dùng tên đúng với key ở trong mảng thì mới lấy được .
Hoặc ta có thể tự gắn tên mới cho biến khi tạo một destructuring Object như ví dụ trên.


*/