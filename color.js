const buttons=document.querySelectorAll(".button");
const body=document.querySelector('body');

buttons.forEach(function(element) {
    element.addEventListener('click', function(e)
{
    console.log(e);
    if(e.target.id=='grey'){
        body.style.background=e.target.id;
    }
    if(e.target.id=='green'){
        body.style.background= e.target.id;
    }
    if(e.target.id=='blue'){
        body.style.background= e.target.id
    }
    if(e.target.id=='purple'){
        body.style.background=e.target.id;
    }


});

    
});