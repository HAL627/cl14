const butterflies = document.querySelectorAll(".butterfly");

butterflies.forEach(function(butterfly){

    butterfly.addEventListener("mouseover", function(){

        let x = Math.random() * 820;
        let y = Math.random() * 430;

        butterfly.style.left = x + "px";
        butterfly.style.top = y + "px";

    });

});

const foos = document.querySelectorAll(".foo");

foos.forEach(function(foo){

    foo.addEventListener("mouseover", function(){

        let x = 390 + Math.random() * 430;
        let y = 160 + Math.random() * 170;

        foo.style.left = x + "px";
        foo.style.top = y + "px";

    });

});