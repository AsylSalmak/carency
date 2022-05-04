let content1 = document.getElementsByClassName("contentBox")[0]; // дивка где будут отображаться данные с массива
let btnLeft = document.getElementsByClassName("btnLeft")[0]; // button
let btnRight = document.getElementsByClassName("btnRight")[0];// button
// console.log(content1);
// console.log(btnLeft);

let user = ""; // пустая переменная , для вывода данных с person

let person = [
    `<div class="apostraphe"><i class="fa-solid fa-austral-sign"></i></div>
  <div class="sliderBox"> 
  <div class="profile"> 
      <div><img class="images" src="https://metropolitanhost.com/themes/templatemoster/html/powar/carency/assets/img/home-1/70x70-1.jpg" alt=""></div>
     <div>
         <div class="star"><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
          </div>
              <h4>Aash Aron -<span>CEO</span></h4></div>
  </div>
  <p>"Thanks to the touchpad integrated in the Controller, you can easily enter such information as destinations for the navigation system using your own handwriting You can also use it to access a wide range of functions and settings as well as."</p>
</div>`,
  `<div class="apostraphe"><i class="fa-solid fa-austral-sign"></i></div>
  <div class="sliderBox"> 
  <div class="profile"> 
      <div><img class="images" src="https://metropolitanhost.com/themes/templatemoster/html/powar/carency/assets/img/home-1/70x70-0.jpg" alt=""></div>
     <div>
         <div class="star"><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
          </div>
              <h4>Jonh Henry -<span>CO-FOUNDER</span></h4></div>
  </div>
  <p>"Operation is effortless and intuitive by means of touch − a great help for you as the driver since it barely distracts your concentration on the road. All functions operated using the Controller can be conveniently viewed in the Control Display."</p>
</div>`,
  `<div class="apostraphe"><i class="fa-solid fa-austral-sign"></i></div>
  <div class="sliderBox"> 
  <div class="profile"> 
      <div><img class="images" src="https://metropolitanhost.com/themes/templatemoster/html/powar/carency/assets/img/home-1/70x70.jpg" alt=""></div>
     <div>
         <div class="star"><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
          </div>
              <h4>Freddi Thomas -<span>FOUNDER</span></h4></div>
  </div>
  <p>"Aesthetics isn't just a matter of surface, colour, paintwork or material – it is also expressed via the aerodynamic design of the exterior and the functionality of the interior The remarkable engine power comes from the connection to a linear power."</p>
</div>`,
];

btnLeft.onclick = () => {
 
    nextUser(-1);//задаем значение для кнопок
};
btnRight.onclick = () => {
  nextUser(+1);// задаем значение для кнопок
};
 
      
function nextUser(n) {  // и создаем функцию от кнопок приходят цифры
    slideIndex += n;
    showUser(slideIndex)  // и запускаем функцию по смене userov
  }
let slideIndex=0;

function showUser(index) {
    if (index >= person.length) {
      index = 0;
    }
    if (index < 0) {
      index = person.length - 1;
    }
    slideIndex = index;
    user = person[index];

    content1.innerHTML = user; 
    console.log(slideIndex)
  }



showUser(slideIndex) // чтобы отобразить на экране по умолчанию
