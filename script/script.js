function getpage(pageurl){

    $.get("https://images"+~~(Math.random()*33)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURI(pageurl), function(data) {
        console.log(data)
        putInFrame(data);
    });

}

function putInFrame(data){
    $('#ifr').html(data)
    console.log($('#ifr').attr('src'));
}

$(document).ready(function(){
$('.z').on('click',function(){

    let url = $('#inp').val();

    getpage(url);


})

});

/*
https://www.walutomat.pl/kursy-walut/
https://cinkciarz.pl/wymiana-walut/kursy-walut-cinkciarz-pl
https://liderwalut.pl/kursy-walut
*/