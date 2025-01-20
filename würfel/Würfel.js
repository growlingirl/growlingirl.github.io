

    document.getElementById("d20").innerHTML = Math.floor(Math.random()*20)+1;

    function d20() {
        document.getElementById("d20").innerHTML = Math.floor(Math.random()*20)+1;
    }
    
    function d6() {
        var cube = document.querySelector(".cube");
        var space = document.querySelector(".space");
    
        cube.style.visibility = 'visible'; 
    
        space.classList.add("spaceanimate");
        cube.classList.add("cubeanimate");
    
        cube.addEventListener('animationend', function() {
    
    
            space.classList.remove("spaceanimate");
            cube.classList.remove("cubeanimate");
        }, { once: true }); 
    }

    //now we need to randomize the cube's tumbling
    function d6() {
        var cube = document.querySelector(".cube");
        var space = document.querySelector(".space");
    
        var randomDegreesZ = Math.floor(Math.random() * 360) + 720;
        var randomDegreesY = Math.floor(Math.random() * 360) + 720;
        var randomDegreesX = Math.floor(Math.random() * 360) + 720;
    
        var styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes spin {
                from { transform: rotateZ(0deg) rotateY(0deg) rotateX(0deg); }
                to { transform: rotateZ(${randomDegreesZ}deg) rotateY(${randomDegreesY}deg) rotateX(${randomDegreesX}deg); 
                }
            }`, styleSheet.cssRules.length);
   
        cube.style.animation = `spin 10s 1 ease-out`;
        space.classList.add("spaceanimate");
        cube.style.visibility = 'visible'; 
    
        cube.addEventListener('animationend', function() {
            cube.style.visibility = 'visible';
            cube.style.animation = '';
            space.classList.remove("spaceanimate");
             cube.style.transform = `rotateZ(${randomDegreesZ}deg) rotateY(${randomDegreesY}deg) rotateX(${randomDegreesX}deg)`
        }, { once: true });
    }

//Würfel wählen
let quantity=document.getElementById("quantity").value;

function dx() {

       document.getElementById("qx").innerHTML = quantity;
    document.getElementById("dx").innerHTML = Math.floor(Math.random()*quantity)+1; 
}


// Magic The Gathering
let w0=0;
let w1;
let w2;
function W0() {
    w0=document.getElementById("W0").value;

    document.getElementById("Wo").innerHTML = w0;
    document.getElementById("Wb").innerHTML = w0;

     w1=w0;
     w2=w0;
}

function O1() { 
    document.getElementById("Wo").innerHTML = ++w1 ;
}

function O2() { 
    document.getElementById("Wo").innerHTML = --w1 ;
}

function B1() { 
    document.getElementById("Wb").innerHTML = ++w2 ;
}

function B2() { 
    document.getElementById("Wb").innerHTML = --w2 ;
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'q':
            O1();
            break;
        case 'a':
            O2();
            break;
        case 'p':
            B1();
            break;
        case 'l':
            B2();
            break;
    }
});

//kalaha

document.addEventListener("DOMContentLoaded", function () {
    let mulden = document.getElementById("mulden");
    console.log("mulden", mulden)
    for (let i = 0; i < 12; i++) {

        console.log("slot", i)

      let slot = document.createElement("div");
      slot.id = "slot_" + i;
      slot.className = "slot";
      mulden.appendChild(slot);

        slot.setAttribute('ondrop', 'drop(event)');
        slot.setAttribute('ondragover','allowDrop(event)');

        //create p to count stones
        let p = document.createElement('p');

        const childDivs = slot.querySelectorAll('div');
        const numberOfDivs = childDivs.length;

        p.classname = "zaehler1"
        p.textContent = numberOfDivs;

                
        slot.appendChild(p);
        p.setAttribute('z-index','12');
    }
});

function setinstone() {
    let slots = document.getElementsByClassName('slot')
    for (let slot of slots) {
        for( let x = 0; x < 4; x++) {
            let stone = document.createElement("div");
            stone.id = "stone" + slot.id + '_'  + x;
            stone.className = "stone";
            slot.appendChild(stone);
                stone.setAttribute('draggable','true');
                stone.setAttribute('ondragstart','drag(event)')
                stone.setAttribute('z-index', 'slot.id'); 
            }
        const childDivs = slot.querySelectorAll('div');
        const numberOfDivs = childDivs.length;
    
        document.getElementsByTagName('p').innerHTML = numberOfDivs;
    }
}

function drag(ev) {
    ev.dataTransfer.setData('div', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransver.getData("div");
    ev.target.appendChild(document.getElementById(data));


}

function allowDrop(ev) {
    ev.preventDefault();
}







