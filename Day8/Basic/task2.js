let product1 = {
    id : 1,
    name :'iphone 12 pro max',
    price :250000000,
    quanlity:1
}
let product2 = {
    id : 2,
    name :'samsung galaxy s21',
    price :32000000,
    quanlity:1
}
let product3 = {
    id : 3,
    name :'xiaomi note 21',
    price :18000000,
    quanlity:2
}
let product4 = {
    id : 4,
    name :'galaxy ford pro',
    price :47000000,
    quanlity:1
}
let product5 = {
    id : 5,
    name :'oppo find n2 flip 5g',
    price :19990000,
    quanlity:3
}

 let products = [ product1,product2,product3,product4,product5]
 let draw = ``;
 let s = 0;
 for (let index = 0; index < products.length; index++) {
     let  product = products[index];
     let Amount = (product.price * product.quanlity);
     let priceVND = ChuyenDonViTien(product.price, 'it-IT' , 'VND' )
     let AmountVND = ChuyenDonViTien(Amount, 'it-IT' , 'VND')
     s = s + Amount
     
    draw += ` <tr>
    <th scope="row">${product.id}</th>
    <td>${product.name}</td>
    <td>${priceVND}</td>
    <td>${product.quanlity}</td>
    <td>${AmountVND}</td>
  </tr>`;
    
 }

 let html = document.querySelector('.product-render');
html.innerHTML = draw;

let tt = document.querySelector('#tong');
tt.innerText = ChuyenDonViTien(s, 'it-IT','VND')




function ChuyenDonViTien(price, donvi_1, donvi_2) {
    let money = price.toLocaleString(donvi_1, {style : 'currency', currency : donvi_2});
    return money
} 