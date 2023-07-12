// Task2

// let prodcut_1 = {
//     name : "Áo bull",
//     size : "M",
//     quantity : 2,
//     price : 16000,
// }

// let prodcut_2 = {
//     name : "Áo khoác gió",
//     size : "L",
//     quantity : 1,
//     price : 600000,
// }

// let prodcut_3 = {
//     name : "Quần Jean Nam",
//     size : "30",
//     quantity : 1,
//     price :350000,
// }

// let products = [ prodcut_1,  prodcut_2,  prodcut_3,]

// //phân tích vẽ
// // - tạo ra biến draw
// // - dùng vòng lặp vẽ => tạobwucs tranh
// // - tìm địa chỉ vẽ (queqySelector  )
// // - diachi.innerHTMl = draw => tìm được nhà 
// let draw = ``;
// for (let index = 0; index < products.length; index++) {
//     let product = products[index]; // ?

//     let VND = ChuyenDonViTien(product.price, 'it-IT', 'VND');
//     let dollar = ChuyenDonViTien(product.price, 'en-US', 'USD');

//       draw += ` <tr>
//       <th scope="row">${index + 1}</th>
//       <td>${product.name}</td>
//       <td>${product.size}</td>
//       <td>${product.quantity}</td>
//       <td>${VND}</td>
//     </tr>`;   
// }
// // dữ liệu => phải khai báo => let ..
// let diachi = document.querySelector(`#products`);
// diachi.innerHTML = draw


// function ChuyenDonViTien(price, donvi_1, donvi_2)
// {
//     let money = price.toLocaleString(donvi_1, {style : 'currency', currency : donvi_2});
//     return money
// }



let prodcut_1 = {
    image : "bull.jpg",
    name :"Áo bull",
 size : "M",
 quantity : "2",
 price : 160000
}
let prodcut_2 = { // tương tự
    image : "aokhoac.jpg",
    name :"Áo khoác gió NorthFace",
    size : "L",
    quantity : 1,
    price : 600000 // cái này để số
   }
let prodcut_3 = {
    image : "jean.jpg", 
    name :"Quần Jean Nam",
    size : "30",
    quantity : 1,
    price : 350000
   }
let products =[ prodcut_1, prodcut_2, prodcut_3]
let draw = ``;
let s = 0;
    for (let index = 0; index < products.length; index++) {
        let product = products[index]; // ?
        let VND = ChuyenDonViTien(product.price, 'it-IT', 'VND'); // ? cần đầu vào === > đầu ra
        // let dollar = ChuyenDonViTien(product.price, 'en-US', 'USD');

         s = s + product.price // tong ? khi i = 0 price = 160k + 0 , i =1 , 160k + 0 + 600k, i= 2 , 160k + 0 + 600k + 350 

        draw += `<tr>
        <th scope="row">${index + 1}</th>
        <td><img style="height: 150px" src="image/${product.image}" ></td>
        <td>${product.name}</td>
        <td>${product.size}</td>
        <td>${product.quantity}</td>
        <td>${VND}</td>
      </tr>`;
    }
    let diachi = document.querySelector(`#products`);
        diachi.innerHTML = draw

        function ChuyenDonViTien(price, donvi_1, donvi_2) {
            let money = price.toLocaleString(donvi_1, {style : 'currency', currency : donvi_2});
            return money
        }
        // tìm đại chỉ
        let tt = document.querySelector('.tong-tien');
        tt.innerText = ChuyenDonViTien(s,'it-IT', 'VND' );

//  Tas2 - day 8

