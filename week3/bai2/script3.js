const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];
  
  // Bước 1: Thêm thuộc tính recommendedFood vào mỗi object trong mảng
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // Bước 2: Tìm chó của Sarah và kiểm tra khẩu phần ăn
  const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(`${sarahDog.owners.join(' and ')}'s dog eats ${sarahDog.curFood > sarahDog.recommendedFood ? 'too much' : 'too little'}.`);
  
  // Bước 3: Tạo mảng chủ của những chú chó ăn quá nhiều và quá ít
  const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1).flatMap(dog => dog.owners);
  const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood * 0.9).flatMap(dog => dog.owners);
  
  // Bước 4: In ra thông báo về mảng chủ
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// Bước 5: Kiểm tra xem có chó nào ăn chính xác với khẩu phần ăn khuyến nghị và in ra tên chó
const isExact = dogs.some(dog => {
    const exact = dog.curFood === dog.recommendedFood;
    if (exact) {
      console.log(`${dog.owners.join(' and ')}'s dog eats exactly the recommended amount.`);
    }
    return exact;
  });
  
  console.log(`Some dogs eat exactly the recommended amount: ${isExact}`);
  // Bước 6: Kiểm tra xem có chó nào ăn ở mức hợp lý
  const isReasonable = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
  console.log(`Some dogs eat a reasonable amount: ${isReasonable}`);
 // Bước 7: In ra thông tin về chó có khẩu phần ăn hợp lý
const dogsEatReasonable = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log(`Dogs that eat a reasonable amount: ${dogsEatReasonable.map(dog => dog.owners.join(' and ')).join(', ')}`);

// Bước 8: Tạo mảng mới và sắp xếp theo khẩu phần ăn đề nghị
const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(`Sorted dogs by recommended food: ${sortedDogs.map(dog => `${dog.owners.join(' and ')}: ${dog.recommendedFood}`).join(', ')}`);