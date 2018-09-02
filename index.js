"use strict"
let topDiv0Contents = [`img_0770.jpg`, `img_0771.jpg`, `img_0803.jpg`, `img_0815.jpg`];
let topDiv4Contents = ['./examplework/1.png', './examplework/2.png', './examplework/3.png', './examplework/4.png'];
let topDiv = '4'; 
$(document).ready(function(){
    populateTop(topDiv, topDiv4Contents);
    showBottom(); 
    showTop();
    $('#bottom0').click(function(){
        rotate('#bottom0'); 
    });
    $('#bottom1').click(function () {
        rotate('#bottom1');
    });
    $('#bottom2').click(function () {
        rotate('#bottom2');
    });
    $('#bottom3').click(function () {
        rotate('#bottom3');
    });
    $('#bottom4').click(function () {
        rotate('#bottom4');
    });
    // $(".slides").click(function () {
    //     slideChange();
    // })
});

//exchanges clicked item for top
function rotate(str){
    $(`#top${topDiv}`).hide(); 
    let temp = topDiv; 
    let id = str.match(/\d/);
    topDiv = id[0]; 
    if (topDiv = '0'){
        populateTop(topDiv, topDiv0Contents)
    };
    $(`#top${topDiv}`).show(); 
    $(`#bottom${topDiv}`).hide(); 
    $(`#bottom${temp}`).show();
}

//populates bottom divs
function showBottom() {
    for (let i = 0; i < 4; i++){  
        let idNum = `#bottom${i}`;
        $(idNum).show(); 
    };
};
//populates top div
function showTop() {
    $(`#top${topDiv}`).show(); 
};

// populates the top now with non variable HTML. 
//have not figured out the path to variables yet. 
function populateTop(div, items){
    //temp sets the div to show as topDiv+# 
    let temp = `#top${div}`;

    //inserts top main photo
    $(temp).html('');
    $(temp).html(`<div  class="slider">
                        </div>`);
    $('.slider').html(`<div class="selected">
                            <img class="slides" src="${items[0]}" id='mainPic'>
                       </div></div>`);
    //appends div under main and then adds each image from the items array
    $('.slider').append(`<div class="bottomRow"></div`);
    for ( let i = 0; i < items.length; i++){
        $('.bottomRow').append(`<img class="slides" id="slide${i}" src="${items[i]}" >`);
    };

};




//working HTML for slider.  Just for referene. 
/* let contents = `<div class="selected">
                            <img class="slides" src="img_0770.jpg">
                       </div>
                       <div class="bottomRow">
                            <img class="slides" id="slide1" src="img_0771.jpg" >
                            <img class="slides" src="img_0803.jpg" >
                            <img class="slides" src="img_0815.jpg" >
                            <img class="slides" src="img_0770.jpg">
                       </div>` */
    //$('.slider').html(`${contents}`);