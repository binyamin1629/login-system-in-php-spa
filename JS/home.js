document.getElementById('logout').addEventListener('click',()=>{
  

    $.ajax({
        url:'db/db_helpers.php',
        method:'POST',
        data:{
            logout:1,
        },
        success:function(response){
            if(response=='logout'){
                window.location='index.php';
            }
            console.log(response)
        },
        dataType:'text'

    })


})