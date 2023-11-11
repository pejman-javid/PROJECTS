const passF = document.getElementById('passF')
const passF2 = document.getElementById('passF2')
const emailF = document.getElementById('emailF')
const inEmail = document.getElementById('inEmail')
const inPass = document.getElementById('inPass')
const inPass2 = document.getElementById('inPass2')
const btnLogin = document.getElementById('btnLogin')
const mainLogin = document.getElementById('mainLogin')





const checkInputs = () => {
    const error = document.createElement('p')
    error.className="error"
    const InfoObject = {
        emailOb: inEmail.value,
        passwordOb: inPass.value
    }

    if(InfoObject.emailOb){
        error.style.display = 'block'
        console.log('email checked')
        var email = /^[\w\-\.\+]+@gmail+.com/;

        if(InfoObject.emailOb.match(email)){
            console.log('email is good')
            error.style.display = 'none'
            mainLogin.style.height = '357px'
            
            if(InfoObject.passwordOb){
                
                    var passw=   /^[A-Za-z]\w{6,16}$/;
                    if(InfoObject.passwordOb.match(passw)){
                         if(inPass2.value === inPass.value){
                            console.log('viyvy')
                        window.open("/src/Home/Home.htmlHome.html" , '_self')

                        location.reload();
                         }else{
                            error.style.display = 'block'
                            error.innerHTML = 'your password in not match'
                           mainLogin.style.height = '527px'
                           passF2.appendChild(error)
                         }
                    }
                else{
                    error.style.display = 'block'
                 error.innerHTML = 'your password should include ([A-Za-z] \ 6-16)'
                mainLogin.style.height = '527px'
                passF.appendChild(error)
                }
            
            }else if(!InfoObject.passwordOb){
                error.style.display = 'block'
                 error.innerHTML = 'your password is empty (A/1/a)'
                mainLogin.style.height = '527px'
                passF.appendChild(error)
            }

        }else{
            error.innerHTML = `your email is wrong (@gmail.com)`
            mainLogin.style.height = '529px'
            emailF.appendChild(error)
        }
    }else if(!InfoObject.emailOb){
        error.style.display = 'block'
        error.innerHTML = 'your email is empty (example@gmail.com)'
        mainLogin.style.height = '529px'
        emailF.appendChild(error)
    }
    btnLogin.addEventListener('click' , e => {
        e.preventDefault();
        error.style.display = 'none'
    })
}


const clickBtnEvent = () => {
btnLogin.addEventListener('click' , e => {
    e.preventDefault();
   checkInputs();  
   
})
}



clickBtnEvent();




