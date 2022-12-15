$(document).ready(function(){
    $(".grada").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_grada = split[1];

        $(".grada").removeClass('aktif');
        $("#uta_1").siblings();
        $("#uta_"+id_grada).slideToggle("slow");
        $("#grada_"+id_grada).addClass('aktif');

        


    });
});