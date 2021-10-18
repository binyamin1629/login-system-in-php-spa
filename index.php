<?php 

require './db/db_helpers.php';
require_once './parts/header.php';


if(isset($_SESSION)){

  if(!$_SESSION['isLoggedIn']){
    require './parts/loginAndRegister.php';
  }else{
    require  './parts/home.php';
  }
 
}


require_once './parts/footer.php';
?>
