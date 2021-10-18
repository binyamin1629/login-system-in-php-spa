<link rel="stylesheet" href="css\register.css">

<div  class="main_warp" id="main_container">

<div class="stages_wrap">
    <div class="stage_container">
        <div class="stage">
            <p>Basic</p>
        </div>
        <div class="stage">
            <p>Password</p>
        </div>
        <div class="stage">
            <p>Location</p>
        </div>
        <div class="stage">
            <p>Finish</p>
        </div>
    </div>

    <div class="line_contianer">

        <div id="line-basic" class="stage_line "></div>

        <div id="line-password" class="stage_line "></div>

        <div id="line-location" class="stage_line "></div>

        <div id="line-finish" class="stage_line"></div>

    </div>

    <div class="arrow_container">
        <div id="arrow-basic" class="arrow-right isActive"></div>
        <div id="arrow-password" class="arrow-right"></div>
        <div id="arrow-location" class="arrow-right"></div>
        <div id="arrow-finish" class="arrow-right"></div>
    </div>
</div>

</div>
<!-- <script defer src="JS\register.js"></script> -->





<link rel="stylesheet" href="css\login.css">
    <main class="main" id="login_wrap">
        <div class="register__container">
            <div class="title">
                <h1>Register</h1>
            </div>
            <div class="input_or_text">
                <p>Dont have an account?</p>
                <p>Register with us today.</p>
            </div>
            <div class="btn">
                <button id="gotoregister">Register</button>
            </div>
        </div>
     
            <div class="line"></div>
    
        
        <div class="login__container">
            <div class="title">
                <h1>Login</h1>
            </div>

            <div class="input_or_text">
                <label class="labels" for="email">Email</label>
                <input id='email' class="inputs_login" type="text" name="" >

                <label class="labels" for="password">Password</label>
                <input id='pwd' class="inputs_login" type="password" name="" >
                    <div class="chekbox__wrap">
                        <input class="checkbox" type="checkbox" name="">
                        <label class="chekboxlabel" for="Remember_me">Remember Me</label>
                    </div>
                    
            <div  class="errMsg" id="err">
              
            </div>
        </div>



             <div class="btn">
                <button id="login">Login</button>
            </div>
        </div>
        <!-- <script defer src="JS\login.js"></script> -->
  
    </main>
    <script defer src="JS\loginAndRegister.js"></script>

