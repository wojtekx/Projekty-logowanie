$(document).ready(function() {

    $('.delete').on('click', function(){
        $(this).closest('.card').remove()
    });

    $('.accept').on('click', function(){
       let actualProject = $(this).closest('li').find('.card');
       console.log(actualProject)
       $('#accepted').find('.card').closest('li').append(actualProject)
       
    });

    $('.btnShow').on('click', function(){
        $(this).closest('.card').find('h5').slideToggle();
    });

    const user = localStorage.getItem('user');
    if(user){
        $('#currentUser').html('Witaj: '+user+'!')
    }
    else{
        window.location.href = 'index.html';
    }

});

