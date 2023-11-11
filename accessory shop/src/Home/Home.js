


const infoBookArray = [
   {img:'/src/images/p1.png',name:'GOLD RING'   , desc:'ring', type:'gold',price:'450.0000T'},
   {img:'/src/images/p2.png',name:'red bag' , desc:'', type:'leather',price:'890.0000T'},
   {img:'/src/images/p3.png',name:'GOLD BRACELET' , desc:'', type:'gold',price:'990.0000T'},
   {img:'/src/images/p4.png',name:'GOLD NECKLESS' , desc:'', type:'gold',price:'980.0000T'},
   

  
]

const stringify = JSON.stringify(infoBookArray)
localStorage.setItem('LcInfoBook' , stringify)

const account1 = document.getElementById('account1')

const funcToLoginImg = () => {
   
      
      account1.children[3].addEventListener('click' , e => {
         e.preventDefault();
        
         window.open("/src/Login/Login.html" , '_self')
     
      })

}

funcToLoginImg();


 const funcToSaveList = () => {
   account1.children[2].addEventListener('click' , e => {
      e.preventDefault();

      window.open("/src/SaveList/SaveList.html" , '_self')
   })

}


funcToSaveList();





const funcToHomeNav = () => {

   const nav1 = document.getElementById('nav1')
      nav1.children[0].children[0].addEventListener('click' , e => {
         e.preventDefault();
         location.reload();
      })
   }




funcToHomeNav();
const createMenu = () => {

   const menuList = document.getElementById('menuList')
   
   const menuListArray = ['THE RING','NECKLESS','PERCING','BRACELET','BAG','EARRINGS','More']
  
   for (const index in menuListArray) {
      const liList = document.createElement('li')
      liList.style.cursor = 'pointer'
      liList.innerText = menuListArray[index]
      menuList.appendChild(liList)
   
   }

  
}
createMenu();
 



// }


const btnOrderNow = document.querySelectorAll('.btn-order-book')


const switchToCardPay = () => {

   btnOrderNow.forEach((item,index) => {

   item.addEventListener('click' , e => {

      e.preventDefault();

      
      const getInfoBook = localStorage.getItem('Lc')
      const parseInfo = JSON.parse(getInfoBook)
            
      
      if(parseInfo && parseInfo.length > 0){
               
         const copyInfo = [...parseInfo,infoBookArray[index]]
         const stringify = JSON.stringify(copyInfo)
         localStorage.setItem('Lc' , stringify)
         console.log(document.title)
         
      }else if(!parseInfo){
         const stringify = JSON.stringify([infoBookArray[index]])
         localStorage.setItem('Lc',stringify)
         console.log(document.title)
      }

     
            

            window.open('/src/Pay/cardPay.html' , '_self')
   })
         
})

}

switchToCardPay();




function checkSameBook(parseInfo,infoBookArrayEl) {
   for (const key in parseInfo) {
      if(parseInfo[key].name == infoBookArrayEl.name){
         console.log('matched' , parseInfo[key],infoBookArrayEl)
         let result = 'matched'
         return result
      }
   }
}




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
search.value = null
const searchLogo = document.getElementById('searchLogo')

searchLogo.addEventListener('click' , e => {
   e.preventDefault();
   console.log(search.value)

   const getInfoBook = localStorage.getItem('Lc')
   const parseInfo = JSON.parse(getInfoBook)

   infoBookArray.forEach((element,index) => {
      console.log(element.name)
      if(search.value === element.name){
      
   if(parseInfo && parseInfo.length > 0){
  
      const copyInfo = [...parseInfo,infoBookArray[index]]
      const stringify = JSON.stringify(copyInfo)
      localStorage.setItem('Lc' , stringify)
      window.open('/src/Pay/cardPay.html' , '_self')
    
   }else if(!parseInfo){
      const stringify = JSON.stringify([infoBookArray[index]])
      localStorage.setItem('Lc',stringify)
      window.open('/src/Pay/cardPay.html' , '_self')
   }
   
      }else if(search.value != element.name){
         return
      }
   })

   
})
