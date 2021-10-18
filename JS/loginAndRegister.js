document.getElementById('main_container').style.display='none'


var stages = [
    {
        stage: 'basic',
        wasClicked: false,
        isActive: true,
        addLine: true,
    },
    {
        stage: 'password',
        wasClicked: false,
        isActive: false,
        addLine: false,

    },

    {
        stage: 'location',
        wasClicked: false,
        isActive: false,
        addLine: false,

    },
    {
        stage: 'finish',
        wasClicked: false,
        isActive: false,
        addLine: false,

    },

]
const colors = {
    orange: '#E15E0E',
    red: '#D62201',
    yellow_orange: '#E98C23',
    black: '#231F20',
    gray: '#A1A1A1',
    white: '#fff'
}

var userInfo = {
    first_name: '',
    last_name: '',
    email: '',
    pswd:'',
    street: '',
    city: '',
    country: '',
}
var stage = stages[0].stage
var text = `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
 when an unknown printer took a galley of type and </br>  </br> standard dummy text ever since the 1500s, when simply dummy text`
var finshMessage = `You have completed our registration \n Be sure all details are correct </br>  </br> When you sure everything us in order Click to finish registration`
var h1Text = `Instructions`
var main_wrap = document.getElementById('main_container')


var btnStages = document.querySelectorAll('.stage')


btnStages.forEach((e, i) => e.setAttribute('id', stages[i].stage + i))

btnStages.forEach((e) => e.addEventListener('click', () => {

    stage = e.id;
    stage = stage.slice(0, stage.length - 1)
    setStages(stage)
}))



function chekIfLastStage(currentStage) {
    if (currentStage == stages[3].stage) {
        document.getElementsByClassName('line_contianer')[0].style.backgroundColor = colors.red
    }
    else {
        document.getElementsByClassName('line_contianer')[0].style.backgroundColor = colors.gray
    }
}


function changeStagesColorAndProps(currentStage) {

    stages = modifyStagesArray(currentStage)
    chekIfLastStage(currentStage)



    for (var i = 0; i < stages.length; i++) {

        //disabled 
        if (!stages[i].isActive) {
            document.getElementById(stages[i].stage + i).style.backgroundColor = colors.gray
            document.getElementById(stages[i].stage + i).style.color = colors.white
            document.getElementById(stages[i].stage + i).style.border = `none`;
            document.getElementById(`arrow-${stages[i].stage}`).classList.remove('isActive')
            document.getElementById(stages[i].stage + i).style.pointerEvents = 'none'

        }
        if (stages[i].isActive) {
            //background color
            document.getElementById(stages[i].stage + i).style.backgroundColor = colors.red
            //text color 
            document.getElementById(stages[i].stage + i).style.color = colors.white
            //border
            document.getElementById(stages[i].stage + i).style.border = `none`
            //active class
            document.getElementById(`arrow-${stages[i].stage}`).classList.add('isActive')

        }
        if (stages[i].wasClicked && stages[i].isActive == false) {

            document.getElementById(stages[i].stage + i).style.backgroundColor = colors.white
            document.getElementById(stages[i].stage + i).style.color = colors.red
            document.getElementById(stages[i].stage + i).style.border = `1px solid ${colors.red}`
            document.getElementById(`arrow-${stages[i].stage}`).classList.remove('isActive')
            document.getElementById(stages[i].stage + i).style.pointerEvents = 'auto'

        }
        if (stages[i].addLine) {
            document.getElementById(`line-${stages[i].stage}`).classList.add('is-line-active')
        }
        else {
            document.getElementById(`line-${stages[i].stage}`).classList.remove('is-line-active')
        }
    }
}



function modifyStagesArray(stage) {

    var index = stages.findIndex(i => i.stage == stage)

    for (var i = 0; i < stages.length; i++) {

        if (i > index) {
            stages[i].isActive = false
            stages[i].wasClicked = false
            stages[i].addLine = false

        }

        if (i < index) {
            stages[i].isActive = false
            stages[i].wasClicked = true
            stages[i].addLine = true
        }
        if (i == index) {
            stages[i].wasClicked = true
            stages[i].isActive = true
            stages[i].addLine = true
        }

    }

    return stages;
}



initialStage(stage);

function setStages(currentStage) {

    showContentByStage(currentStage);
    chekIfStageIsBasic(currentStage)
}



function chekIfStageIsBasic(stage) {
    var previousBtn = document.getElementById('previous')
    if (stage == stages[0].stage) {
        previousBtn.style.backgroundColor = colors.gray;
        previousBtn.disabled = true;

    }
    else if (stage !== stages[3].stage) {
        document.getElementById('previous').style.backgroundColor = colors.orange;
        previousBtn.disabled = false;
    }
}



function initialStage(currentStage) {
    showContentByStage(currentStage)
    chekIfStageIsBasic(currentStage)
}




function showContentByStage(currentStage) {


    switch (currentStage) {
        case 'basic':

            createHtmlElements('basic', {
                h1Text: h1Text,
                text: text,
                howMany: 3,
                lablestext: ['First Name', 'Last Name', 'Email'],
                inputsTypes: ['text', 'text', 'email'],
                inputValues: [userInfo.first_name, userInfo.last_name, userInfo.email]

            })
            changeStagesColorAndProps(currentStage)
            break;
        case 'password':


            createHtmlElements('password', {
                h1Text: h1Text,
                text: text,
                howMany: 2,
                lablestext: ['Password', 'Password Confornation'],
                inputsTypes: ['password', 'password'],
                inputValues: [userInfo.pswd,userInfo.pswd]

            })
            changeStagesColorAndProps(currentStage)
            break;
        case 'location':
            createHtmlElements('location', {
                h1Text: h1Text,
                text: text,
                howMany: 3,
                lablestext: ['Street', 'City', 'Country'],
                inputsTypes: ['text', 'text', 'text'],
                inputValues: [userInfo.street, userInfo.city, userInfo.country]

            })
            changeStagesColorAndProps(currentStage)
            break;
        case 'finish':

            createHtmlFinishElements({
                text: finshMessage,
                h1Text: 'Fantastic!!'
            })

            changeStagesColorAndProps(currentStage)
        default:



            break;
    }

}


function createHtmlElements(stage, elemobj) {
    //console.log(stage)
    removeAndSetDom()

    //section wrap

    var section_wrap = document.createElement('div')
    section_wrap.setAttribute('class', 'section_wrap')
    section_wrap.setAttribute('id', 'section_container')
    main_wrap.appendChild(section_wrap)

    //text wrpa and text
    var text_warp = document.createElement('div')
    text_warp.setAttribute('class', 'txt_wrap')
    section_wrap.appendChild(text_warp)


    var text = document.createElement('div')
    text.setAttribute('class', 'text')
    text_warp.appendChild(text)
    var h1 = document.createElement('h1');
    h1.innerHTML = elemobj.h1Text
    var p = document.createElement('p')
    p.innerHTML = elemobj.text
    text.appendChild(h1)
    text.appendChild(p)


    //line 
    var line_wrap = document.createElement('div')
    line_wrap.setAttribute('class', 'line_wrap')
    section_wrap.appendChild(line_wrap)
    var line = document.createElement('div')
    line.setAttribute('class', 'line_register')
    line_wrap.appendChild(line)


    // inputs


    var register_wrap = document.createElement('div')
    register_wrap.setAttribute('class', 'register_wrap')
    section_wrap.appendChild(register_wrap)

    var inputs_wrap = document.createElement('div')
    inputs_wrap.setAttribute('class', 'inputs_wrap')
    register_wrap.appendChild(inputs_wrap)

    for (var i = 0; i < elemobj.howMany; i++) {

        var label = document.createElement('label')
        label.setAttribute('class', 'labels')
        inputs_wrap.appendChild(label)
        label.innerHTML = elemobj.lablestext[i]

        var input = document.createElement('input')
        input.setAttribute('class', 'inputs')
        input.type = elemobj.inputsTypes[i]
        input.value = elemobj.inputValues[i]
        inputs_wrap.appendChild(input)

    }



    //err 
    var err = document.createElement('div')
    err.setAttribute('class', 'err')
    err.setAttribute('id', 'error')
  
    inputs_wrap.appendChild(err)


    var paddiv = document.createElement('div')
    paddiv.setAttribute('class', 'paddiv')
    inputs_wrap.appendChild(paddiv)

    //buttons
    var btnWrap = document.createElement('div')
    btnWrap.setAttribute('class', 'btns')
    inputs_wrap.appendChild(btnWrap)


    var btnPrevious = document.createElement('button')
    btnPrevious.setAttribute('id', 'previous')
    btnPrevious.textContent = 'previous'

    btnWrap.appendChild(btnPrevious)
    var btnNext = document.createElement('button')
    btnNext.setAttribute('id', 'next')
    btnNext.textContent = 'Next'

    btnWrap.appendChild(btnNext)

    btnPrevious.addEventListener('click', () => {
        nextOrPrevious(stage, 'previous')
    })

    btnNext.addEventListener('click', () => {
        nextOrPrevious(stage, 'next')
    })
}


var nextBtn = document.getElementById('next')
var previousBtn = document.getElementById('previous')


function createHtmlFinishElements(elemobj) {


    removeAndSetDom()
    //section wrap finish
    var section_wrap_finish = document.createElement('div')
    section_wrap_finish.setAttribute('class', 'section_wrap_finsh')
    section_wrap_finish.setAttribute('id', 'section_finsh_container')
    main_wrap.appendChild(section_wrap_finish)


    var wraper_finish = document.createElement('div')
    wraper_finish.setAttribute('class', 'wraper_finsh')
    section_wrap_finish.appendChild(wraper_finish)

    //title h1 
    var title = document.createElement('div')
    title.setAttribute('class', 'title')
    wraper_finish.appendChild(title)
    var h1 = document.createElement('h1');
    h1.innerHTML = elemobj.h1Text
    title.appendChild(h1)

    // text_finish p
    var text_finsh = document.createElement('div')
    text_finsh.setAttribute('class', 'text_finsh')
    wraper_finish.appendChild(text_finsh)
    var p = document.createElement('p')
    p.innerHTML = elemobj.text
    text_finsh.appendChild(p)



    //btns_finish buttom
    var btns_finish = document.createElement('div')
    btns_finish.setAttribute('class', 'btns_finish')
    wraper_finish.appendChild(btns_finish)
    var btnFinish = document.createElement('button')
    btnFinish.textContent = 'Finish registration'
    btns_finish.appendChild(btnFinish)
    btns_finish.addEventListener('click',()=>{


        $.ajax({
            url:'index.php',
            method:'POST',
            data:{
                register:1,
                firstName:userInfo.first_name,
                lastName:userInfo.last_name,
                email:userInfo.email,
                pwd:userInfo.pswd,
                country:userInfo.country,
                city:userInfo.city,
                street:userInfo.street,
            },
            success:function(response){
                console.log(response)
                if(response=='User Alredy Exsits'){
                    setErrorFinish(response)
                }
                if(response=='user has been added to db'){
                    window.location='index.php'
                }
               
             
            },
            dataType:'text'

        })

        console.log(userInfo)
    })
}

function setErrorFinish(errMessage){
    var container=document.getElementById('section_finsh_container')
    var p= document.createElement('p')
    p.setAttribute('class','err_finish')
    p.setAttribute('id','errorFinish')
    if(document.getElementById('errorFinish')){
        return
    }
    p.innerHTML=errMessage
    container.appendChild(p)

}


function nextOrPrevious(currentStage, backOrForce) {
    index = stages.map((el) => el.stage).indexOf(currentStage);
    var validInputs=getInputValues(currentStage)
    if (validInputs) {
      
        if (backOrForce === 'previous') {
            if (currentStage != stages[0].stage) {
                stage = stages[index - 1].stage
            }
        }
        if (backOrForce === 'next') {
            stage = stages[index + 1].stage
        }
        setStages(stage)

    }else{
        if (backOrForce === 'previous') {
            if (currentStage != stages[0].stage) {
                stage = stages[index - 1].stage
                setStages(stage)
            }
        }
        
        //document.getElementById('next').disabled=true
        return
    }
  
}


function setStagesArray(currentStage) {
    for (let i = 0; i < stages.length; i++) {

        if (stages[i].stage == currentStage) {
            stages[i].isActive = true
        } else {
            stages[i].isActive = false
        }

    }
    return stages
}

function removeAndSetDom() {
    if (document.getElementById('section_container')) {
        document.getElementById('section_container').remove()
    }
    if (document.getElementById('section_finsh_container')) {
        document.getElementById('section_finsh_container').remove()
    }
}



function getInputValues(currentStage) {
    var inputValues = document.getElementsByClassName('inputs')

    var isValid = true;
    switch (currentStage) {
        case 'basic':

            if (!chaekIfValuesAreEmptey(inputValues)) {
                sendErrMessage({
                    errmessage: 'on or more valuse are missing!'
                })
                isValid = false
            }
            if (!chekEmailIsValid(inputValues[2].value)) {
                sendErrMessage({
                    errmessage: 'email not valid!'
                })
                isValid = false
            } 
            if(isValid){
                
                userInfo.first_name=inputValues[0].value
                userInfo.last_name=inputValues[1].value
                userInfo.email=inputValues[2].value
            }

            return isValid

            break;





        case 'password':
          
            if (!chaekIfValuesAreEmptey(inputValues)) {
                sendErrMessage({
                    errmessage: 'on or more valuse are missing!'
                })
                isValid = false
            }






            if (!chekLengthOfPassword(inputValues[0].value)) {
               
                sendErrMessage({
                    errmessage: 'password  to short!'
                })
                isValid = false
            }
            if (!chekIfPasswordsMatch(inputValues[0].value, inputValues[1].value)) {
              
                sendErrMessage({
                    errmessage: 'password do not  match!'
                })
                isValid = false
            } 
            if(isValid){
                userInfo.pswd=inputValues[0].value
                
            }
            
            return isValid

            break;
        case 'location':
            console.log(userInfo)
            if (!chaekIfValuesAreEmptey(inputValues)) {
                sendErrMessage({
                    errmessage: 'on or more valuse are missing!'
                })
                isValid = false
            } 
            if(isValid) {               
                userInfo.street=inputValues[0].value
                userInfo.city=inputValues[1].value
                userInfo.country=inputValues[2].value
            }
        

            return isValid
            break;  
        default:

            break;
    }




}

function chaekIfValuesAreEmptey(inputValues) {
    for (var i = 0; i < inputValues.length; i++) {
        
        if (inputValues[i].value =='') {
           
            return false
        }
    }
    return true
}


function chekEmailIsValid(email) {
    if (email.includes('@')) {
        return true
    }
    return false
}

function chekIfPasswordsMatch(passwrod1, password2) {

    if (passwrod1.trim() == password2.trim()) {
        return true
    }
    return false

}
function chekLengthOfPassword(password) {
    if (password.length >= 6) {
        return true
    }
    return false
}

function sendErrMessage(errObj) {

    var error_warp = document.getElementById('error')
    var p = document.createElement('p')
    p.setAttribute('class','err_message')
    if(document.getElementsByClassName('err_message')){
        var par=document.getElementsByClassName('err_message')
        for(var i=0;i<par.length;i++){
            if(par[i].innerHTML==errObj.errmessage){
                return
            }
        }
    }
    

    p.innerHTML = errObj.errmessage
    error_warp.appendChild(p)
}



///login


errMessagesLogin={
    emailOrPassword:'email or password are incorrect!',
    passwordInvalid:'Passwrod Invalid!',
    valuesAreMissing:'on or more valuse are missing!'
}

document.getElementById('gotoregister').addEventListener('click',()=>{
    document.getElementById('main_container').style.display=''
    document.getElementById('login_wrap').style.display='none'
    
})

document.getElementById('login').addEventListener('click',()=>{
   
    if(chekEmptyInputsInLogin()){
        setErrMessageInLogin(errMessagesLogin.valuesAreMissing)
        return
    }else{
        
        var email=document.getElementById('email').value
        var pwd=document.getElementById('pwd').value
        $.ajax({
            url:'db/db_helpers.php',
            method:'POST',
            data:{
                login:1,
                email:email,
                pwd:pwd,
       
            },
            success:function(response){
               
                if(response=='user is logged in'){
                    window.location='index.php';
                }
                if(response==errMessagesLogin.passwordInvalid){
                    setErrMessageInLogin(errMessagesLogin.passwordInvalid)
                }
                if(response==errMessagesLogin.emailOrPassword){
                    setErrMessageInLogin(errMessagesLogin.emailOrPassword)
                }
                
            },
            dataType:'text'

        })

     
   
    }

})



function chekEmptyInputsInLogin(){

    var email=document.getElementById('email').value
    var password=document.getElementById('pwd').value
    if(email==''||password==''){
        return true
    }
    return false
}


function setErrMessageInLogin(errMsg) {

    var error = document.getElementById('err')
    var p = document.createElement('p');
    p.setAttribute('class','err_p')
    p.innerHTML=errMsg


    if(document.getElementsByClassName('err_p')){
        var par=document.getElementsByClassName('err_p')
        for(var i=0;i<par.length;i++){
            if(par[i].innerHTML==errMsg){
                return
            }
        }
    }
    
    error.appendChild(p)
}
