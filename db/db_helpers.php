<?php
startSession();
function startSession(){
    session_start();
    if(!isset($_SESSION['isLoggedIn'])){
        $_SESSION['isLoggedIn']=false;
    }
}



if(isset($_POST['login'])){
      loginUser($_POST['email'],$_POST['pwd']);   
      $_SESSION['isLoggedIn']=true;
      exit();
}

  if(isset($_POST['logout'])){
      echo('logout');
        logout();
        exit();
  }

  if(isset($_POST['register'])){
    
      registerUser($_POST['email'],$_POST['firstName'],$_POST['lastName'],$_POST['pwd'],$_POST['country'],$_POST['city'],$_POST['street']);
      exit();
    }


function logout(){
    $_SESSION['isLoggedIn']=false;
    session_destroy();
    startSession();
}


    //loginUser('a@','123456');

function loginUser($email,$pwd){

    require_once __dir__.'./dbconfig.php';  
    global $conn;

    $query="SELECT * FROM users WHERE email=? OR pwd=?;";
    
    $stmt = mysqli_stmt_init($conn);
   

    if(!mysqli_stmt_prepare($stmt,$query)){
        echo('something went worng 404 error!!!');
    }
    else{

        mysqli_stmt_bind_param($stmt,'ss',$email,$pwd);
        mysqli_stmt_execute($stmt);


        $result=mysqli_stmt_get_result($stmt);

        
        if($user=mysqli_fetch_assoc($result)){

            $pwdHash=$user['pwd'];
           
            $chekPwd=password_verify($pwd,$pwdHash);

            if($chekPwd==false){

                echo('Passwrod Invalid!');
            }
            else{
                echo('user is logged in');
                //get current user name and pwd
                //var_dump($_SESSION['isLoggedIn']);
                $_SESSION['isLoggedIn']=true;
                //header('Location: ../index.php');
                exit();
            }
        }
        else{
            echo('email or password are incorrect!');
        }

        mysqli_stmt_close($stmt); 

    }



}



function registerUser($email,$firstName,$lastName,$password,$country,$city,$street){
      
        require_once __dir__.'./dbconfig.php';
    
        global $conn;

        if(userAlerdyExtist($email)){
        
            echo('User Alredy Exsits');
            exit();
            
        }
        
        $query="INSERT INTO users (email,firstName,lastName, pwd, country,city, street) VALUES(?,?,?,?,?,?,?);";
        $stmt = mysqli_stmt_init($conn);
        

            if(mysqli_stmt_prepare ($stmt ,$query)){
                echo 'user has been added to db';

                $hashPassword=password_hash($password,PASSWORD_DEFAULT);

                mysqli_stmt_bind_param($stmt,'sssssss',$email, $firstName,$lastName,$hashPassword,$country,$city,$street);      
                mysqli_stmt_execute($stmt);
                mysqli_stmt_close($stmt );  
                $_SESSION['isLoggedIn']=true;
            }  else{
                echo "Something's wrong with the query: " ;
          
                  exit();
               
            }


         
     
}


function userAlerdyExtist($userEmail){
    require_once __dir__.'./dbconfig.php';
    
    global $conn;

    $query="SELECT * FROM users WHERE email=?;";
    $stmt = mysqli_stmt_init($conn);
   

    if(!mysqli_stmt_prepare($stmt,$query)){
        echo('something went worng!!!');

    }else{
        mysqli_stmt_bind_param($stmt,'s',$userEmail);
        mysqli_stmt_execute($stmt);


     
        $result=mysqli_stmt_get_result($stmt);

        if(mysqli_fetch_assoc($result)){
           
            $userextist=true;
            return $userextist;
        }
        else{
            
            $userextist=false;
            return $userextist;
        }

        mysqli_stmt_close($stmt); 
    
       
    }

        
      

}


?>