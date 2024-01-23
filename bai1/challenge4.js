//tạo hàm sự kiện khi click vào chuyển đổi trên trang  web
function convertToCamelCase() {
    //lấy dữ liệu từ html
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    //vòng lặp để lặp qua từng phần tử trong mảng lines
    lines.forEach(line => {
      //chia dòng line thành từng mảng riêng và chia mỗi từ là một phần tử của mảng đó 
      const words = line.split(/[_\s]+/);
      //convert từ đầu tiên thành chữ thường
      let camelCase = words[0].toLowerCase();
      for (let i = 1; i < words.length; i++) {
        //chuyển chữ cái đầu thành chữ hoa và các chữ cái đằng sau là chữ thường
        camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
      console.log(camelCase);
    });
    
  }