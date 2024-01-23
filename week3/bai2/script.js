function checkDogs(dogsJulia, dogsKate) {
    // Bước 1: Xóa 2 phần tử đầu tiên và 2 phần tử cuối từ mảng của Julia
    const juliaCopy = dogsJulia.slice(2, -2);

    // Bước 2: Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate
    const combinedDogs = juliaCopy.concat(dogsKate);
    console.log(combinedDogs);

    // Bước 3: Kiểm tra và in thông tin về trạng thái của từng con chó
    combinedDogs.forEach((age, index) => {
        const dogNumber = index + 1;
        if (age >= 3) {
            console.log(`Chó số ${dogNumber} là Chó lớn và ${age} tuổi.`);
        } else {
            console.log(`Chó số ${dogNumber} vẫn là chó con.`);
        }
    });
}

// TEST DATA 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1,dogsKate1);

// TEST DATA 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
