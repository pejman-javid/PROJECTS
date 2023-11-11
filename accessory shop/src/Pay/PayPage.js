const funcToSaveList = () => {
    const account1 = document.getElementById('account1')
    account1.children[2].addEventListener('click' , e => {
       e.preventDefault();
       window.open("/src/SaveList/SaveList.html")
   
    })
 
 }

 
 
 funcToSaveList();

const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click' , e => {
    e.preventDefault();
    alertProgram.style.top = '-100%'
    alertProgram.children[2].children[0].style.width = '0%'
})

const getInfoBook = localStorage.getItem('Lc')

const parseInfoBook = JSON.parse(getInfoBook)
console.log(parseInfoBook)

const mainBookPay = document.getElementById('mainBookPay')
mainBookPay.className = 'main-book-pay'

const saveBtnOrder = document.createElement('button')
const mainAllPlay = document.querySelectorAll('.main-all-pay')[0]


const funcToLoginImg = () => {
  const account1 = document.getElementById('account1')
     
     account1.children[3].addEventListener('click' , e => {
        e.preventDefault();
        window.open("/src/Login/Login.html" , '_self')
    
     })

    
}

funcToLoginImg()

function createdInfoBook(){
   
   
   let index = 0;
   index += parseInfoBook.length - 1


    const imageBookPay = document.createElement('img')
    const parOfImage = document.createElement('div')
    parOfImage.className = 'par-of-image'
    imageBookPay.className = 'image-pay'
    imageBookPay.src = parseInfoBook[index].img
    parOfImage.append(imageBookPay)
    const txtBookPay = document.createElement('div')
    txtBookPay.className = 'txt-book-pay'
    const titleBookPay = document.createElement('h1')
    titleBookPay.innerHTML = parseInfoBook[index].name;
    titleBookPay.className = 'title-book-pay'
    const artistBookPay = document.createElement('p')
    artistBookPay.innerHTML = parseInfoBook[index].artist;
    artistBookPay.className = 'artist-book-pay'
    const typeBookPay = document.createElement('p')
    typeBookPay.innerHTML = parseInfoBook[index].type;
    typeBookPay.className = 'type-book-pay'
    const priceBookPay = document.createElement('p')
    priceBookPay.innerHTML = parseInfoBook[index].price;
    priceBookPay.className = 'price-book-pay'
    const spanSave = document.createElement('span')
    spanSave.innerHTML = 'Add To Cart'
    saveBtnOrder.className = 'description btn btn-order-book'  //<button id="btnOrder1" class=" description btn btn-order-book p-10"><span>Now Order!</span></button>
   //  <span>Now Order!</span>
   
    saveBtnOrder.append(spanSave)
    const descBookPay = document.createElement('span')
    descBookPay.innerHTML = parseInfoBook[index].desc;
    descBookPay.className = 'desc-book-pay'
    console.log(parseInfoBook[index].audio)
  

const mainAudioBook = document.querySelector('.main-audio-book')
if(!parseInfoBook[index].audio){
mainAudioBook.style.display = 'none'
}

const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio(
  parseInfoBook[index].audio
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);



//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  const volumeWidth = audioPlayer.querySelector(".controls .volume-percentage").style.width = Math.floor(newVolume * 100) + '%';
  const imgVolume = document.getElementById('imgVolume')
  if(volumeWidth < ((0.5) * 100) + '%'){
   imgVolume.src = '/src/svg/mdi_volume-medium.svg'
  } else if(volumeWidth >= ((0.5) * 100) + '%'){
   imgVolume.src = '/src/svg/ic_sharp-volume-up.svg'
  }

   
  const getInfoBook = localStorage.getItem('Volume')
  const parseInfo = JSON.parse(getInfoBook)
        
  
  if(parseInfo && parseInfo.length > 0){
     const stringify = JSON.stringify(volumeWidth)
     localStorage.setItem('Volume' , stringify)
     console.log(document.title)
     
  }else if(!parseInfo){
     const stringify = JSON.stringify(volumeWidth)
     localStorage.setItem('Volume',stringify)
     console.log(document.title)
  }


}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);

const getInfoBook = localStorage.getItem('Volume')
const parseInfo = JSON.parse(getInfoBook)
console.log(parseInfo)





audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
    imgVolume.src = '/src/svg/ic_sharp-volume-off.svg'
   
     
  } else {
   if(audioPlayer.querySelector(".controls .volume-percentage").style.width < ((0.5) * 100) + '%'){
      imgVolume.src = '/src/svg/mdi_volume-medium.svg'

     } else if(audioPlayer.querySelector(".controls .volume-percentage").style.width > ((0.5) * 100) + '%'){
      imgVolume.src = '/src/svg/ic_sharp-volume-up.svg'
      
     }
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

   
    
 

    const ObjectOfInfoBook = {
        img:imageBookPay.src,
          title:titleBookPay.innerHTML,
          artist: artistBookPay.innerHTML,
          type: typeBookPay.innerHTML,
          price:priceBookPay.innerHTML,
          numberPrice:1,
          id:Math.random(),
        }
        console.log(ObjectOfInfoBook)
        const parentMainBook = document.createElement('div')
        parentMainBook.append(parOfImage,txtBookPay)
        parentMainBook.className = 'parent-main-book'
    txtBookPay.append(titleBookPay,artistBookPay,typeBookPay,priceBookPay,saveBtnOrder)
    mainBookPay.append(parentMainBook,)
    const div = document.createElement('div')
    div.append(mainBookPay)
    div.className = 'main-more-type'
    mainAllPlay.append(div)


    document.title = 'BookShop' + ' - ' + ObjectOfInfoBook.title
  
    const clickSaveBtn = (saveBtnOrder) => {

       saveBtnOrder.addEventListener('click' , e => {
          e.preventDefault();
        
          const arraySaveItemBooks = []
          arraySaveItemBooks.push(ObjectOfInfoBook)
          const getItemInLc = localStorage.getItem('LcSave')
          const parseItemInLc = JSON.parse(getItemInLc)
      
   
          if(parseItemInLc){
         
         
           let result;
          function checkMatched() {
   
             for (const key in parseItemInLc) {
                  console.log(parseItemInLc[key])
                  if(parseItemInLc[key].title == ObjectOfInfoBook.title){
                       result = 'matched'
                       return result
                  }else{
                       result = 'not matched'
                  }
              }
         } 
   
   
         const finallResultCheck = checkMatched();
         if(finallResultCheck == 'matched'){
           console.log('this book already is save!')
           alertProgram.children[0].innerHTML = 'This accessory already is saved!'
           alertProgram.style.top = '10%'
           alertProgram.children[2].children[0].style.width = '100%'
           setTimeout(() => {
               alertProgram.style.top = '-100%'
               alertProgram.children[2].children[0].style.width = '0%'
           }, 3000);
         }else if(finallResultCheck != 'matched'){
           const copyInfo = [...parseItemInLc,ObjectOfInfoBook]
           const stringify = JSON.stringify(copyInfo)
           localStorage.setItem('LcSave' , stringify)
         }
   
          }else if(!parseItemInLc){
           const stringify = JSON.stringify(arraySaveItemBooks)
           localStorage.setItem('LcSave' , stringify)
          }
       })
    }
    clickSaveBtn(saveBtnOrder)


}



createdInfoBook();
 const navBar = document.getElementById('navBar')

navBar.children[0].children[0].addEventListener('click' , e => {
   
    e.preventDefault();
    window.open('/src/Home/Home.html' , '_self')
})

const account1 = document.getElementById('account1')
account1.children[3].addEventListener('click' , e => {
    
    e.preventDefault();
    window.open('/src/Login/Login.html' , '_self')
})


const createMenu = () => {
    const menuListpay = document.getElementById('menuListpay')

const menuListArray = ['Detective','Love','Novel','History','Science fiction','Fantastic','More']

for (const index in menuListArray) {
   const liList = document.createElement('li')
   liList.style.cursor = 'pointer'
   liList.innerText = menuListArray[index]
   menuListpay.appendChild(liList)
   
}
 
}

createMenu();

function scroll (){
    let customScroll = document.querySelector('#scroll')
 
 window.addEventListener('scroll' , function(){
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight
    let scrollPercent = scrollTop / (documentHeight - windowHeight)
    let scrollPercentRounded = (scrollPercent * 100)
    customScroll.style.width = scrollPercentRounded + '%'
 
 })
 }
 scroll()

 
 const search = document.getElementById('searchBar')
const searchLogo = document.getElementById('searchLogo')

searchLogo.addEventListener('click' , e => {
   e.preventDefault();
   console.log(search.value)

   const getInfoBook = localStorage.getItem('Lc')
   const parseInfo = JSON.parse(getInfoBook)

   const getItem = localStorage.getItem('LcInfoBook')
   const parse = JSON.parse(getItem)


   console.log(parse)
   parse.forEach((element,index) => {
      console.log(element.name)
      if(search.value == element.name){
         
         
         
   
   if(parseInfo && parseInfo.length > 0){
            
      const copyInfo = [...parseInfo,parse[index]]
      const stringify = JSON.stringify(copyInfo)
      localStorage.setItem('Lc' , stringify)
   }else if(!parseInfo){
      const stringify = JSON.stringify([parse[index]])
      localStorage.setItem('Lc',stringify)
   }
   
      }
   })
   window.open('/src/Pay/cardPay.html')
   
})