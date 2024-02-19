//lab8.1
// function whereAmI(lat, lng) {
//   const apiUrl = `https://geocode.xyz/${lat},${lng}?geoit=json`;

//   fetch(apiUrl)
//       .then(response => {
//           if (!response.ok) {
//               throw new Error(`Error: ${response.status} - ${response.statusText}`);
//           }
//           return response.json();
//       })
//       .then(data => {
//           if (data.error) {
//               throw new Error(`Error from API: ${data.error.description}`);
//           }

//           // Hiển thị thông tin quốc gia
//           renderCountryInfo(data);
//       })
//       .catch(error => {
//           // Xử lý lỗi và hiển thị thông báo
//           console.error(`Error: ${error.message}`);
//           renderError(error.message);
//       })
//       .finally(() => {
//           // Thêm một delay để đảm bảo không gửi quá nhanh và vượt quá giới hạn 3 requests/giây
//           setTimeout(() => {
//               console.log('Request completed.');
//           }, 2000);
//       });
// }

// function renderCountryInfo(data) {
//   // Lấy các thuộc tính quan trọng từ data và render ra HTML
//   const countryInfo = document.getElementById('countryInfo');
//   countryInfo.innerHTML = `
//       <h2>${data.country}</h2>
//       <p>City: ${data.city}</p>
//       <p>Region: ${data.region}</p>
//       <!-- Thêm các thuộc tính khác bạn muốn hiển thị -->
//   `;
// }

// function renderError(errorMessage) {
//   // Hiển thị thông báo lỗi
//   const countryInfo = document.getElementById('countryInfo');
//   countryInfo.innerHTML = `<p class="error">${errorMessage}</p>`;
// }

// // Sử dụng function với tọa độ cụ thể (ví dụ)
// whereAmI(19.037, 72.873);


//lab8.2
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
      // Tạo một element img mới
      const imgElement = document.createElement('img');

      // Gán đường dẫn ảnh cho thuộc tính src
      imgElement.src = imgPath;

      // Lắng nghe sự kiện load để biết khi ảnh đã được tải xong
      imgElement.addEventListener('load', () => {
          // Thay thế element có selector là ".image"
          const existingImage = document.querySelector('.image');
          if (existingImage) {
              existingImage.replaceWith(imgElement);
          }

          // Resolve promise khi ảnh tải xong
          resolve(imgElement);
      });

      // Lắng nghe sự kiện error để xử lý khi có lỗi tải ảnh
      imgElement.addEventListener('error', () => {
          // Reject promise khi có lỗi
          reject(new Error('Error loading image.'));
      });
  });
}

// // Sử dụng function với đường dẫn ảnh cụ thể
// const imagePath = 'img/img-1.jpg';
// createImage(imagePath)
//   .then((imgElement) => {
//       console.log('Image loaded successfully:', imgElement);
//   })
//   .catch((error) => {
//       console.error('Error:', error.message);
//   });

//   // Đoạn mã của phần 1 (createImage function)

// // Hàm tạm dừng trong một khoảng thời gian
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Sử dụng createImage function và thực hiện các bước theo yêu cầu
// createImage('img/img-1.jpg')
//   .then((firstImage) => {
//       // Tạm dừng thực thi trong 2s
//       return sleep(2000).then(() => firstImage);
//   })
//   .then((firstImage) => {
//       // Ẩn hình ảnh hiện tại
//       firstImage.style.display = 'none';

//       // Load hình ảnh thứ 2
//       return createImage('img/img-2.jpg');
//   })
//   .then((secondImage) => {
//       // Tạm dừng thực thi trong 2s
//       return sleep(2000).then(() => secondImage);
//   })
//   .then((secondImage) => {
//       // Ẩn hình ảnh hiện tại (secondImage là hình ảnh thứ 2)
//       secondImage.style.display = 'none';
//   })
//   .catch((error) => {
//       console.error('Error:', error.message);
//   });


//lab8.3

// Hàm tạm dừng trong một khoảng thời gian
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function loadNPause() {
//   try {
//       // Load hình ảnh đầu tiên và thực hiện các bước
//       const firstImage = await createImage('img/img-1.jpg');

//       // Tạm dừng thực thi trong 2s
//       await sleep(2000);

//       // Ẩn hình ảnh đầu tiên
//       firstImage.style.display = 'none';

//       // Load hình ảnh thứ 2 và thực hiện các bước
//       const secondImage = await createImage('img/img-2.jpg');

//       // Tạm dừng thực thi trong 2s
//       await sleep(2000);

//       // Ẩn hình ảnh thứ 2
//       secondImage.style.display = 'none';
//   } catch (error) {
//       console.error('Error:', error.message);
//   }
// }

// // Gọi hàm loadNPause
// loadNPause();

async function loadAll(imgArr) {
  try {
      // Sử dụng .map để tạo một mảng promises khi tải lên tất cả ảnh
      const imgPromises = imgArr.map(imgPath => createImage(imgPath));

      // Sử dụng Promise.all để chờ tất cả các promises hoàn thành
      const imgs = await Promise.all(imgPromises);

      // Log ra imgs để kiểm tra kết quả
      console.log('Loaded images:', imgs);

      // Thêm class 'parallel' cho tất cả các imageElement nhận được
      imgs.forEach(img => {
          img.classList.add('parallel');
      });
  } catch (error) {
      console.error('Error:', error.message);
  }
}

// Test data
const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

// Gọi hàm loadAll
loadAll(imgPaths);

