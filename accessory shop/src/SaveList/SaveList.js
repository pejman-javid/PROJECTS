const createMenu = () => {
    const menuListpay = document.getElementById('menuListSave')

const menuListArray = ['THE RING','NECKLESS','PERCING','BRACELET','BAG','EARRINGS','More']

for (const index in menuListArray) {
   const liList = document.createElement('li')
   liList.style.cursor = 'pointer'
   liList.innerText = menuListArray[index]
   menuListpay.appendChild(liList)
   
}
 
}

createMenu();


const funcToHomeNav = () => {
const nav1 = document.getElementById('nav1')
      nav1.children[0].children[0].addEventListener('click' , e => {
         e.preventDefault();
         window.open('/src/Home/Home.html' , '_self')
      })
   }



funcToHomeNav();




const funcToLoginImg = () => {
   const account1 = document.getElementById('account1')
      
      account1.children[3].addEventListener('click' , e => {
         e.preventDefault();
         window.open("/src/Login/Login.html" , '_self')
     
      })

}

funcToLoginImg();


const funcToSaveList = () => {
    account1.children[2].addEventListener('click' , e => {
       e.preventDefault();
       location.reload();
    })
 
 }
 
 funcToSaveList();

 
const infoBookArray = [
   {img:'../svg/Vikings pay ver.svg',name:'Viking' , desc:'The Vikings were a seafaring people from the late eighth to early 11th century who established a name for themselves as traders, explorers and warriors. They discovered the Americas long before Columbus and could be found as far east as the distant reaches of Russia. While these people are often attributed as savages raiding the more civilized nations for treasure and women, the motives and culture of the Viking people are much more diverse. These raiders also facilitated many changes throughout the lands from economics to warfare.', artist:'Robert Leighton', type:'Detective-Love-History',price:'100,000T'},

   {img:'../svg/1984 pay ver.svg',name:'1984' , desc:`Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final bo…`, artist:'George Orwell', type:'Novels-ScienceFiction-Fantasy',price:'90,000T'},

   {img:'../svg/Shelock pay ver.svg',name:'Sherlock Holmes' , desc:`Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle…`, artist:'Gumus Simsek',type:'Detective-Love-History',price:'135,000T'},

   {img:'../svg/12 Ruls 1.svg',name:'12 Rules for Life' , desc:`12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by the Canadian clinical psychologist Jordan Peterson. It provides life advice through essays in abstract ethical principles, psychology, mythology, religion, and personal anecdotes. The book topped bestseller lists in Canada, the United States, and the United Kingdom, and had sold over five million copies worldwide by the end of 2020.Peterson went on a world tour to promote the book, receiving much attention following an interview with Channel 4 News.The book is written in a more accessible style than his previous academic book, Maps of Meaning: The Architecture of Belief (1999).A sequel, Beyond Order: 12 More Rules for Life, was published in March 2021.`, artist:'Jordan Peterson',type:'Self help-Psychology-Philosophy',price:'160,000T'},

   {img:'../svg/13 resone 1.svg',name:'Thirteen Reasons Why' , desc:`Thirteen Reasons Why is a young adult novel written by Jay Asher in 2007, that follows the story of Hannah Baker, a high school freshman, and the thirteen ...`, artist:'Jay Asher',type:'Novel',price:'180,000T'},

   {img:'../svg/Animal Farm 1.svg',name:'Animal Farm' , desc:`Animal Farm is a beast fable, in the form of a satirical allegorical novella, by George Orwell, first published in England on 17 August 1945. It tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and under the dictatorship of a pig named Napoleon, the farm ends up in a state as bad as it was before.`, artist:'George Orwell',type:'Novella',price:'90,000T'},

   {img:'../svg/atomic habits 1.svg',name:'Atomic Habits' , desc:`Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time`, artist:'James Clear',type:'Self help',price:'95,000T'},

   {img:'../svg/alber cumus 1.svg',name:'The Stranger' , desc:`The title character is Meursault, an indifferent French settler in Algeria described as "a citizen of France domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the traditional Mediterranean culture." Weeks after his mother's funeral, he kills an Arab man in French Algiers, who was involved in a conflict with one of Meursault's neighbors. Meursault is tried and sentenced to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and after the murder, respectively.`, artist:'George Orwell',type:'Novel',price:'70,000T'},

   {img:'../svg/9-november.jpg',name:'9 November' , desc:`Fallon meets Ben, an aspiring novelist, the day before her scheduled cross-country move. Their untimely attraction leads them to spend Fallon’s last day in Los Angeles together, and her eventful life becomes the creative inspiration Ben has always sought for his novel. Over time and amidst the various relationships and tribulations of their own separate lives, they continue to meet on the same date every year. Until one day Fallon becomes unsure if Ben has been telling her the truth or fabricating a perfect reality for the sake of the ultimate plot twist.`, artist:'Colleen Hoover',type:'Novel',price:'120,000T'},

   {img:'../svg/call-me-by-your-name.jpg',name:'Call Me By Your Name' , desc:`Call Me by Your Name is a 2007 coming-of-age novel by American writer André Aciman that centers on a blossoming romantic relationship between an intellectually precocious, curious, and pretentious 17-year-old American-Italian Jewish boy named Elio Perlman and a visiting 24-year-old American Jewish scholar named Oliver in 1980s Italy. The novel chronicles their summer romance and the 20 years that follow. A sequel to the novel, Find Me, was released in October 2019.`, artist:'André Aciman',type:'Novel',price:'110,000T'},

   {img:'../svg/emily-bronte.jpg',name:'Wuthering Heights' , desc:`In 1801, Mr Lockwood, the new tenant at Thrushcross Grange in Yorkshire, pays a visit to his landlord, Heathcliff, at his remote moorland farmhouse, Wuthering Heights. There he meets a reserved young woman (later identified as Cathy Linton), Joseph, a cantankerous servant, and Hareton, an uneducated fellow, who presents himself as such. Everyone is sullen and inhospitable. Snowed in for the night, Lockwood reads the diary of the former inhabitant of his room, Catherine Earnshaw, and has a nightmare in which a ghostly Catherine begs to enter through the window. Awakened by Lockwood's fearful yells, Heathcliff is troubled.`, artist:'Emily Brontë',type:'Novel-Gothic fiction-Romance novel',price:'140,000T'},

   {img:'../svg/the-midnight-libraty.jpg',name:'The Midnight Library' , desc:`The book's protagonist is a young woman named Nora Seed who is unhappy with her choices in life. During the night, she tries to kill herself but ends up in a library managed by her school librarian, Mrs. Elm. The library is situated between life and death with millions of books filled with stories of her life had she made some different decisions. In this library, she then tries to find the life in which she's the most content.[3] For example, in one possible life she tries to reunite with her boyfriend and finds herself married to him, but it isn't the way as she expected. She also sees herself as a glaciologist doing research in the Svalbard archipelago in the Arctic – a very different life from the one she tries to escape, but not necessarily a better choice.`, artist:'Matt Haig',type:'Science fiction-Fantasy Fiction-Philosophical fiction',price:'165,000T'},

   {img:'../svg/the-guest-list.jpg',name:'The Guest List' , desc:`The book's protagonist is a young woman named Nora Seed who is unhappy with her choices in life. During the night, she tries to kill herself but ends up in a library managed by her school librarian, Mrs. Elm. The library is situated between life and death with millions of books filled with stories of her life had she made some different decisions. In this library, she then tries to find the life in which she's the most content.[3] For example, in one possible life she tries to reunite with her boyfriend and finds herself married to him, but it isn't the way as she expected. She also sees herself as a glaciologist doing research in the Svalbard archipelago in the Arctic – a very different life from the one she tries to escape, but not necessarily a better choice.`, artist:'Lucy Foley',type:'Thriller-Mystery-Psychological Fiction',price:'95,000T'},

   {img:'../svg/the-fault-in-our-stars.jpg',name:'The Fault in Our Stars' , desc:`Hazel Grace Lancaster, a 16-year-old with thyroid cancer that has spread to her lungs, attends a cancer patient support group at her mother's behest. At one meeting, Hazel meets a 17-year-old boy currently in remission named Augustus Waters, whose osteosarcoma caused him to lose his right leg. Augustus is at the meeting to support Isaac, his friend who has eye cancer. Hazel and Augustus strike a bond immediately and agree to read each other's favorite novels. Augustus gives Hazel The Price of Dawn, and Hazel recommends An Imperial Affliction, a novel about a cancer-stricken girl named Anna that parallels Hazel's own experience. After Augustus finishes reading her book, he is frustrated upon learning that the novel ends abruptly without a conclusion, as if Anna had died suddenly. Hazel explains the novel's author, Peter van Houten, retreated to Amsterdam following the novel's publication and has not been heard from since.`, artist:'John Green',type:'fiction-realistic',price:'160,000T'},

   {img:'../svg/The Last Thing He Hold Me.jpg',name:'The Last Thing He Hold Me' , desc:`Hannah is left to navigate the aftermath when her husband Owen disappears during an embezzlement investigation. He leaves a note begging Hannah to protect Bailey, her teenage stepdaughter. Bailey is often difficult towards Hannah, but after finding a duffel bag from Owen with $600,000 in cash, she depends on Hannah for answers. The FBI begins to investigate, and Hannah learns Owen is hiding his true identity.`, artist:'Laura Dave',type:'fiction-realistic',price:'100,000T'},

   {img:'../svg/Things-we-nver-got-over.jpg',name:'Things We Never Got Over',desc:`"Knox Morgan doesn't tolerate drama, especially in the form of a stranded runaway bride. Naomi Witt is on the run. Not just from her fiancé and a church full of well-wishers, but from her entire life. Although if you ask her, Naomi's riding to the rescue of her estranged hot mess of a twin, Tina, to Knockemout, a rough-around-the-edges town where disputes are settled the old-fashioned way...with fists and beer. Usually in that order. Too bad for Naomi, her evil twin hasn't changed at all. After helping herself to Naomi's car and cash, Tina leaves behind something unexpected: the niece Naomi didn't know she had. Now she's a guardian to an eleven-year-old-going-on-thirty with no car, no money, and no plan. There's a reason this bearded, bad-boy barber doesn't get involved with high-maintenance women, especially not Type-A romantic ones. But since Naomi's life imploded right in front of him, the least Knox can do is help her out of her jam. And just as soon as she stops getting into new trouble, he can leave her alone and get back to his quiet, solitary life. At least, that's the plan"--`,artist:`Lucy Score`,type:`Romance novel, Fiction, Contemporary romance, Thriller, Suspense`,price:`70,000T` },
]


const createSaveList = () => {
    
   
       console.log(parseItemInLc)
       if(parseItemInLc.length === 0){

         const saveEl = document.getElementById('saveBox')
        const h1 = document.createElement('h1')
        h1.className = 'h1-empty'
        h1.innerHTML = 'Your Save List Is Empty'
        saveEl.append(h1)
        }
       parseItemInLc.forEach((element) => {
        
        const saveEl = document.createElement('div')
        saveEl.className = 'sec-save'
        const saveBox = document.getElementById('saveBox')
        
        const image = document.createElement('div')
        const imageBook = document.createElement('img')
        image.className = 'image2'
        imageBook.src = element.img
        image.append(imageBook)

        const titleSection = document.createElement('div')
        titleSection.className = 'd-flex justify-content-between w-100'
        const txtInfoBook = document.createElement('div')
        txtInfoBook.className = 'main-details'
      

        const txtBook = document.createElement('div')
        
        const h1 = document.createElement('h1')
        h1.innerHTML = element.title

        const pArtist = document.createElement('span')
        pArtist.innerHTML = element.artist

        const pPrice = document.createElement('p')
        pPrice.innerHTML = element.price

        const divOrder = document.createElement('div')
        const plusButton = document.createElement('button')
        plusButton.innerHTML = '+'
        plusButton.className = 'bg-transparent border-0 text-white'
        const decButton = document.createElement('button')
        decButton.innerHTML = '-'
        decButton.className = 'bg-transparent border-0 text-white'
        const inputOrder = document.createElement('span')
        inputOrder.className = 'input-order'
        inputOrder.type = 'number'
        inputOrder.innerHTML = element.numberPrice
        
        
      

        divOrder.append(plusButton,inputOrder,decButton)
        let splicePrice = (pPrice.innerHTML.split("T"))
        let numberPrice = splicePrice[0].split(",")
        const value = +(numberPrice[0] + numberPrice[1])
        
        const totalPriceFunction = () => {
         const totalPriceEl = document.createElement('h1')
         saveBox.appendChild(totalPriceEl)
         const getItemInLc = localStorage.getItem('LcSave')
         const parseItemInLc = JSON.parse(getItemInLc)
         let tempt = 0;

         for (const key in parseItemInLc) {
          const splicePrice = parseItemInLc[key].price.split('T')
          console.log(splicePrice)
          const splicePriceAgain = splicePrice[0].split(',')
          console.log(splicePriceAgain)
          console.log(+splicePriceAgain[0] + splicePriceAgain[1])
          tempt += +(splicePriceAgain[0] + splicePriceAgain[1])
         
         }

         console.log(tempt)
         
         const finalTotalPrice = ``


        }
        totalPriceFunction()

        let valueOrder = +inputOrder.innerHTML
        const plusAndDecBtn = () => {

           plusButton.addEventListener('click' , e => {
            e.preventDefault()
            console.log(valueOrder)
            if(valueOrder < 3 && valueOrder >= 1){
               valueOrder += 1
               console.log(valueOrder)
               inputOrder.innerHTML = `${valueOrder}`
               console.log(value)
               let finalPrice = (value * valueOrder)
               console.log(finalPrice)
               console.log(JSON.stringify(finalPrice))
               let newPrice = JSON.stringify(value).split(`000`)
               console.log(newPrice)
               pPrice.innerHTML = `${(newPrice[0] + newPrice[1]) * valueOrder },000T`
               console.log(finalPrice)
   
               const getItemInLc = localStorage.getItem('LcSave')
               const parseItemInLc = JSON.parse(getItemInLc)
               console.log(parseItemInLc)
               parseItemInLc.forEach((element,index) => {
                  if(element.price != pPrice.innerHTML && element.title == h1.innerHTML){
                     element.price = pPrice.innerHTML
                     console.log(parseItemInLc)
                     console.log(index)
                     console.log(element)
                     
                     if(element.numberPrice <= 3 && element.numberPrice >= 1){
                        element.numberPrice += 1
                     }
                     inputOrder.innerHTML = element.numberPrice
                     const stringify = JSON.stringify(parseItemInLc)
                     localStorage.setItem('LcSave' , stringify)
                     inputOrder.innerHTML = element.numberPrice
                     totalPriceFunction()
                  }
                  
               });
            }else if(valueOrder >= 3){
               console.log('nooooooo')
            }
            console.log(inputOrder.innerHTML)
           })
   
           decButton.addEventListener('click' , e => {
            e.preventDefault();
            console.log(valueOrder)
            if(valueOrder <= 3 && valueOrder > 1){
               const getItemInLc = localStorage.getItem('LcSave')
               const parseItemInLc = JSON.parse(getItemInLc)
               console.log(parseItemInLc)
               parseItemInLc.forEach((element,index) => {
                  if(element.title == h1.innerHTML){
                     console.log(element.price , element.numberPrice)
                     let splicePrice = (element.price.split("T"))
                     let numberPrice = splicePrice[0].split(",")
                     const value = +(numberPrice[0] + numberPrice[1])
                     console.log(value)
                      valueOrder -= 1
                      console.log(valueOrder)
                      inputOrder.innerHTML = `${valueOrder}`
                    
                      let finalPrice = (value / (element.numberPrice))
                      console.log(finalPrice)
                      console.log(JSON.stringify(finalPrice))
                      let newPrice = JSON.stringify(finalPrice).split(`000`)
                      console.log(newPrice)
                      console.log('new price: ', `${(newPrice[0] + newPrice[1]) * valueOrder },000T`)
                      pPrice.innerHTML = `${(newPrice[0] + newPrice[1]) * valueOrder },000T`
   
                      if(element.numberPrice <= 3 && element.numberPrice > 1){
                        element.numberPrice -= 1
                        element.price = pPrice.innerHTML
                     }
                     inputOrder.innerHTML = element.numberPrice
                     const stringify = JSON.stringify(parseItemInLc)
                     localStorage.setItem('LcSave' , stringify)
                     inputOrder.innerHTML = element.numberPrice
                     totalPriceFunction()
                  }
               });
               
               
   
           
            }
           })

           
        }


        plusAndDecBtn()

        const buttonD = document.createElement('button')
        buttonD.id = element.id;
        const svgDelete = document.createElement('img')
        svgDelete.src = '/src/svg/fa6-regular_trash-can (1).svg'
        buttonD.append(svgDelete)
        buttonD.className = 'btn-d'

        buttonD.addEventListener('click',e => {
         e.preventDefault();
         console.log(parseItemInLc)
        
         
         console.log(buttonD.id)

         parseItemInLc.forEach((element,index) => {
            console.log(element.id , +buttonD.id) 
            if(element.id == +buttonD.id){
               parseItemInLc.splice(index,1)
               const stringify = JSON.stringify(parseItemInLc)
               localStorage.setItem('LcSave' , stringify)
               saveEl.remove()
               if(parseItemInLc.length === 0){
                  location.reload()
                 }
               
            }
         })
        })

       
        txtBook.className = 'txt-info'
     

        txtBook.append(h1,pArtist,pPrice,divOrder)
        
        titleSection.append(txtBook,buttonD)
        txtInfoBook.append(titleSection)
       
        saveEl.append(image,txtInfoBook)

        saveBox.append(saveEl)

        
       });
       
  
}
function getRandomId() {
   return Math.random()
  }

const getItemInLc = localStorage.getItem('LcSave')
    const parseItemInLc = JSON.parse(getItemInLc)
    if(parseItemInLc ){

        createSaveList();
        
    }else if(!parseItemInLc){
        const saveEl = document.getElementById('saveBox')
        const h1 = document.createElement('h1')
        h1.className = 'h1-empty'
        h1.innerHTML = 'Your Save List Is Empty'
        saveEl.append(h1)
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
   const searchLogo = document.getElementById('searchLogo')
   
   searchLogo.addEventListener('click' , e => {
      e.preventDefault();
      console.log(search.value)
   
      const getInfoBook = localStorage.getItem('Lc')
      const parseInfo = JSON.parse(getInfoBook)
   
      infoBookArray.forEach((element,index) => {
         console.log(element.name)
         if(search.value == element.name){
            
            
            
      
      if(parseInfo && parseInfo.length > 0){
               
         const copyInfo = [...parseInfo,infoBookArray[index]]
         const stringify = JSON.stringify(copyInfo)
         localStorage.setItem('Lc' , stringify)
      }else if(!parseInfo){
         const stringify = JSON.stringify([infoBookArray[index]])
         localStorage.setItem('Lc',stringify)
      }
      
         }
      })
      window.open('http://127.0.0.1:5500/src/Pay/cardPay.html')
      
   })
