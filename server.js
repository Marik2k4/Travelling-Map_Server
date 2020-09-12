//http://127.0.0.1:3000/
const http = require('http');

const html =
    `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
      <title>TravellingMap</title>
      <link rel="stylesheet" href="app.css" />
    </head>
    
    <body>
      <header>
        <nav>
          <div class="container">
            <h3 class="logo">Travelling<span>Map</span></h3>
    
            <div class="hamburger-menu">
              <div class="bar"></div>
            </div>
    
            <!--<div class="main-menu">
              <p><a href="#" class="country">Turkey</a></p>
              <p><a href="#" class="country">Tunisia</a></p>
            </div>  tabindex="-1" -->
    
    
    
    
          </div>
        </nav>
    
        <!-- <h1 class="big-title translate" data-speed="0.1">Discover.</h1> -->
        <h1 class="big-title">Discover.</h1>
    
    
        <img src="img/person.png" class="person  translate" data-speed="-0.25" alt="" />
        <img src="img/mountain1.png" class="mountain1 translate" data-speed="-0.2" alt="" />
        <img src="img/mountain2.png" class="mountain2 translate" data-speed="0.4" alt="" />
        <img src="img/mountain3.png" class="mountain3 translate" data-speed="0.3" alt="" />
        <img src="img/sky.png" class="sky translate" data-speed="0.5" alt="" />
      </header>
    
      <section>
        <div class="shadow"></div>
    
        <div class="container">
          <div class="content opacity">
            <h3 class="title">
              Turkey
              <div class="border"></div>
            </h3>
            <p class="text">
            <h3>
              <p>Turkey, country that occupies a unique geographic position, lying partly in Asia and partly in Europe.
                Throughout its history it has acted as both a barrier and a bridge between the two continents.</p>
              </br>
              <p>Turkey is situated at the crossroads of the Balkans, Caucasus, Middle East, and eastern Mediterranean. It
                is
                among the larger countries of the region in terms of territory and population, and its land area is greater
                than that of any European state. Nearly all of the country is in Asia, comprising the oblong peninsula of
                Asia
                Minor—also known as Anatolia (Anadolu)—and, in the east, part of a mountainous region sometimes known as the
                Armenian Highland. The remainder—Turkish Thrace (Trakya)—lies in the extreme southeastern part of Europe, a
                tiny remnant of an empire that once extended over much of the Balkans.</p>
              </br>
              <p>The country has a north-south extent that ranges from about 300 to 400 miles (480 to 640 km), and it
                stretches about 1,000 miles from west to east. Turkey is bounded on the north by the Black Sea, on the
                northeast by Georgia and Armenia, on the east by Azerbaijan and Iran, on the southeast by Iraq and Syria, on
                the southwest and west by the Mediterranean Sea and the Aegean Sea, and on the northwest by Greece and
                Bulgaria. The capital is Ankara, and its largest city and seaport is Istanbul.</p>
              </p>
            </h3>
    
          </div>
    
          <div class="ImgContainer opacity">
            <img src="img/turkey.jpg" alt="" />
          </div>
    
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350044.413859997!2d30.68683479465471!3d39.00145059958365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2z0KLRg9GA0YbQuNGP!5e0!3m2!1sru!2sru!4v1593632198420!5m2!1sru!2sru"
            width="98%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
          </iframe>
        </div>
    
        <!--ВТОРОЙ БЛОК-->
    
        <div class="container_2">
          <div class="content opacity">
            <h3 class="title">
              Tunisia
              <div class="border_2"></div>
            </h3>
            <p class="text">
            <h3>
              <p>Tunisia, country of North Africa. Tunisia’s accessible Mediterranean Sea coastline and strategic location
                have attracted conquerors and visitors throughout the ages, and its ready access to the Sahara has brought
                its
                people into contact with the inhabitants of the African interior.</p>
              </br>
              <p>According to Greek legend, Dido, a princess of Tyre, was the first outsider to settle among the native
                tribes
                of what is now Tunisia when she founded the city of Carthage in the 9th century BCE. Although the story is
                certainly apocryphal, Carthage nonetheless grew into one of the great cities and preeminent powers of
                antiquity, and its colonies and entrepôts were scattered throughout the western Mediterranean region.
                Carthage
                fought a series of wars with its rival, Rome. Rome prevailed in the mid-2nd century BCE, razed Carthage, and
                ruled the region for the following 500 years. In the 7th century Arab conquerors converted the native Berber
                (Amazigh) population of North Africa to Islam. The area was ruled by a succession of Islamic dynasties and
                empires until coming under French colonial rule in the late 19th century. After achieving independence in
                1956, Tunisia pursued a progressive social agenda and sought to modernize its economy under two long-serving
                presidents, Habib Bourguiba and Zine al-Abidine Ben Ali. However, Tunisia remained an authoritarian state
                with
                an all-powerful ruling party and no significant institutions of representative government. (For a discussion
                of political changes in Tunisia in 2011, see Jasmine Revolution.)</p>
              </p>
            </h3>
          </div>
    
          <div class="ImgContainer opacity">
            <img src="img/tunisia.jpg" alt="" />
          </div>
    
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6790064.787747445!2d5.067970869697644!3d33.80040624824386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2z0KLRg9C90LjRgQ!5e0!3m2!1sru!2sru!4v1593632327536!5m2!1sru!2sru"
            width="98%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
          </iframe>
        </div>
    
      </section>
    
      <script src="app.js"></script>
    </body>
    
    </html>
`;

const css =
    `
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; /* Складывается из значение margin , padding , border , width */
}

body {
  font-family: "Comic Sans MS", cursive, sans-serif;
}

/* ВЕРХНЯЯ ПОЛОСА */
.container {
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto;
}

header {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

header:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 25;
}

.mountain1 {
  position: absolute;
  bottom: -100px;
  width: 1500px;
  right: 0;
  z-index: 19;
}

.person {
  position: absolute;
  width: 650px;
  bottom: -100px;
  left: -70px;
  z-index: 20;
}

.mountain2 {
  position: absolute;
  width: 1100px;
  bottom: -100px;
  left: 0;
  z-index: 18;
}

.mountain3 {
  position: absolute;
  width: 900px;
  bottom: 120px;
  right: 0;
  z-index: 17;
}

.sky {
  position: absolute;
  width: 2100px;
  bottom: -50;
  right: 0;
}

/*ВЕРХНЯЯ СТРОКА*/
nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 30;
  background-color: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    transparent
  );
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* TRAVELLINGMAP */
.logo {
  color: #fff;
  font-size: 1.1rem;
  text-transform: uppercase;
}

.logo span {
  font-weight: 300;
}

/* БУГРЕГ МЕНЮ */
.hamburger-menu {
  width: 1.55rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

/* ЛИНИИ В БУРГЕМ МЕНЮ */
.bar {
  position: relative;
  width: 1.5rem;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  right:0;
}
  
.bar:before,
.bar:after {
  content: "";
  position: absolute;
  width: 1.5rem;
  height: 3px;
  right: 0;
  background-color: #fff;
  border-radius: 2px;
}
  
.bar:before {
  transform: translateY(-8px);
}
  
.bar:after {
  transform: translateY(8px);
}

/* АНИМАЦИЯ БУРГЕР МЕНЮ */
.hamburger-menu:hover{
  filter:brightness(0.7)
}

.hamburger-menu:focus{
  outline: none;
}

.hamburger-menu:hover .bar{
  background-color: transparent;
  transition: 0.1s all;
}

.hamburger-menu:hover .bar:before {
  transform: rotate(45deg);
  transition: 0.7s all;
}

.hamburger-menu:hover .bar:after {
  transform: rotate(-45deg);
  transition: 0.7s all;
}

/* При использовании focus , добавь в class tabindex="-1" */
 
/* DISCOVER */
.big-title {
  position: absolute;
  z-index: 30;
  line-height: 4em;
  top: calc(50% - 2em);
  width: 100%;
  text-align: center;
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
}

section {
  width: 100%;
  background-color: #151515; 
  position: relative;
}

/*ПЕРВЫЙ БЛОК */
section .container {
  padding: 3rem;
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

section img {
  width: 100%;
}

section .container > * {
  margin: 0.5rem;
}

.content {
  color: #fff;
}

.title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  position: relative;
}

/* ЛИНИЯ ПОСЛЕ ЗАГОЛОВКА */
.border {
  position: absolute;
  width: 0%;
  height: 3px;
  background-color: #fff;
  bottom: 0;
  left: 0;
  max-width: 100%;
}

.shadow {
  position: absolute;
  bottom: 100%;
  height: 300px;
  width: 100%;
  left: 0;
  z-index: 20;
 background: linear-gradient(to top, #151515, transparent); 
}

/*
.opacity {
  opacity: 0.5;
}
*/

/* ВТОРОЙ БЛОК */

.container_2 {
  max-width: 70rem;
  padding: 0 2rem;
  margin: 0 auto;
  padding: 3rem;
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.border_2 {
  position: absolute;
  width: 0%;
  height: 3px;
  background-color: #fff;
  bottom: 0;
  left: 0;
  max-width: 100%;
}

section .container_2 > * {
  margin: 0.5rem;
}

@media screen and (max-width: 500px) {
  .big-title {
    font-size: 3.2rem;
  }

  h3{
    font-size: 20px;
  }
 }

 @media screen and (max-width: 370px) {
  .big-title {
    font-size: 3.2rem;
  }

  h3{
    font-size: 17px;
  }

  .title {
    font-size: 1.2rem;
  }
 }

`;

const js =
    `  
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Робит'))

`


http.createServer((req, res) => {
    //console.log(req.url);
    //console.log(req.method);
    //console.log(req.headers);
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);

        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);

        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Не найдено');
    }

}).listen(3000, () => console.log('It Works'))