let mainEl = document.getElementById('main-container');
let menBtn = document.getElementById('men-button');
let womenBtn = document.getElementById('women-button');
let kidsBtn = document.getElementById('kids-button');
let completeData = '';

const getmen = async () => {
  womenBtn.style.backgroundColor = 'white';
  womenBtn.style.color = 'black';
  menBtn.style.backgroundColor = 'black';
  menBtn.style.color = 'white';
  kidsBtn.style.backgroundColor = 'white';
  kidsBtn.style.color = 'black';
  const response = await fetch(
    'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'
  );
  completeData = await response.json();
  let data1 = '';
  completeData.categories[0].category_products.map((value) => {
    let tit = '';
    if (value.title.length <= 11) {
      tit = value.title;
    } else {
      tit = value.title.slice(0, 10) + '..';
    }
    let dat = '';
    if (value.badge_text !== null) {
      dat = `<div class = "overlap">
      <img src = ${value.image} alt = "text" class = "thumbnail"/>
      <button class = "over-top">${value.badge_text}</button>
    </div>`;
    } else {
      dat = `<img src = ${value.image} alt = "text" class = "thumbnail"/>`;
    }
    let dis = Math.round(
      ((value.compare_at_price - value.price) / value.compare_at_price) * 100
    );
    data1 += `<div class = "card-contaier">
      ${dat}
      <div class = "name">
        <p class = "title">${tit} &nbsp;</p>
        <p class = "title">&#183; &nbsp;</p>
        <p class = "brand">${value.vendor}</p>
      </div>
      <div class = "price">
        <p class = "original-price"> Rs ${value.price}.00 &nbsp;</p>
        <p class ="strike-price"><span class = "rate">${value.compare_at_price}.00</span> &nbsp;</p>
        <p class = "offer">${dis}% Off<p>
      </div>
      <button class = "cart-button">Add To Cart</button>
    </div>`;
  });
  mainEl.innerHTML = data1;
};
const getWomen = async () => {
  womenBtn.style.backgroundColor = 'black';
  womenBtn.style.color = 'white';
  menBtn.style.backgroundColor = 'white';
  menBtn.style.color = 'black';
  kidsBtn.style.backgroundColor = 'white';
  kidsBtn.style.color = 'black';
  const response = await fetch(
    'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'
  );
  completeData = await response.json();
  let data1 = '';
  completeData.categories[1].category_products.map((value) => {
    let tit = '';
    if (value.title.length <= 11) {
      tit = value.title;
    } else {
      tit = value.title.slice(0, 10) + '..';
    }
    let dat = '';
    if (value.badge_text !== null) {
      dat = `<div class = "overlap">
      <img src = ${value.image} alt = "text" class = "thumbnail"/>
      <button class = "over-top">${value.badge_text}</button>
    </div>`;
    } else {
      dat = `<img src = ${value.image} alt = "text" class = "thumbnail"/>`;
    }
    let dis = Math.round(
      ((value.compare_at_price - value.price) / value.compare_at_price) * 100
    );
    data1 += `<div class = "card-contaier">
      ${dat}
      <div class = "name">
        <p class = "title">${tit} &nbsp;</p>
        <p class = "title">&#183; &nbsp;</p>
        <p class = "brand">${value.vendor}</p>
      </div>
      <div class = "price">
        <p class = "original-price"> Rs ${value.price}.00 &nbsp;</p>
        <p class ="strike-price"><span class = "rate">${value.compare_at_price}.00</span> &nbsp;</p>
        <p class = "offer">${dis}% Off<p>
      </div>
      <button class = "cart-button">Add To Cart</button>
    </div>`;
  });
  mainEl.innerHTML = data1;
};
const getKids = async () => {
  womenBtn.style.backgroundColor = 'white';
  womenBtn.style.color = 'black';
  menBtn.style.backgroundColor = 'white';
  menBtn.style.color = 'black';
  kidsBtn.style.backgroundColor = 'black';
  kidsBtn.style.color = 'white';
  const response = await fetch(
    'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json'
  );
  completeData = await response.json();
  let data1 = '';
  completeData.categories[2].category_products.map((value) => {
    let tit = '';
    if (value.title.length <= 11) {
      tit = value.title;
    } else {
      tit = value.title.slice(0, 10) + '..';
    }
    let dat = '';
    if (value.badge_text !== null) {
      dat = `<div class = "overlap">
      <img src = ${value.image} alt = "text" class = "thumbnail"/>
      <button class = "over-top">${value.badge_text}</button>
    </div>`;
    } else {
      dat = `<img src = ${value.image} alt = "text" class = "thumbnail"/>`;
    }
    let dis = Math.round(
      ((value.compare_at_price - value.price) / value.compare_at_price) * 100
    );
    data1 += `<div class = "card-contaier">
      ${dat}
      <div class = "name">
        <p class = "title">${tit} &nbsp;</p>
        <p class = "title">&#183; &nbsp;</p>
        <p class = "brand">${value.vendor}</p>
      </div>
      <div class = "price">
        <p class = "original-price"> Rs${value.price}.00 &nbsp;</p>
        <p class ="strike-price"><span class = "rate">${value.compare_at_price}.00</span> &nbsp;</p>
        <p class = "offer">${dis}% Off<p>
      </div>
      <button class = "cart-button">Add To Cart</button>
    </div>`;
  });
  mainEl.innerHTML = data1;
};
getWomen();
womenBtn.style.backgroundColor = 'black';
womenBtn.style.color = 'white';
menBtn.style.backgroundColor = 'white';
menBtn.style.color = 'black';
kidsBtn.style.backgroundColor = 'white';
kidsBtn.style.color = 'black';

womenBtn.addEventListener('click', getWomen);
kidsBtn.addEventListener('click', getKids);
menBtn.addEventListener('click', getmen);
