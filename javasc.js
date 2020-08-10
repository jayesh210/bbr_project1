
$(".btn-canc").hide(1000);

$(".btn-coll").click(function(){
     $("ul").hide(1000);
     $(".bbr").hide(1000);
    $(".btn-coll").hide(1000);
    $(".btn-canc").show(1000);

   
    $(".sidebar").addClass("side-adj"); });


   $(".btn-canc").click(function(){
     $("ul").show(1000);
     $(".bbr").show(1000);
    $(".btn-coll").show(1000);
    $(".btn-canc").hide(1000);
       $(".sidebar").removeClass("side-adj");
     
   });
    
    
    
   


