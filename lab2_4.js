(function () {
   // gắn biến header là thẻ h1
    const header = document.querySelector('h1');
    // để thẻ h1 có màu đỏ
    header.style.color = 'red';
    // thêm sự kiện khi bấm vào thẻ h1 
    document.querySelector('body').addEventListener('click', function () {
        // khi bấm sẽ gọi hàm và chuyển màu sang màu xanh
        header.style.color = 'blue';
    });
    })();