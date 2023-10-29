let garen = document.getElementById("garen");
let garen2 = document.getElementById("garen2");

let passive = document.getElementById("passive");
let querySelector = document.getElementById("q");
let w = document.getElementById("w");
let ee = document.getElementById("e");
let r = document.getElementById("r");

let score = 0;
let power = 1;
let power_lvl = 1;
let yourscore = document.getElementById("yourscore");
yourscore.innerHTML = score; 

let text;
let number;
let remove = 0;

function Dialogue(){
    number = Math.floor(Math.random() * 6);

    switch(number){
        case 0:
            text = "Jebac czarnych"; 
        break;
        case 1:
            text = "Jebac niggerow"; 
        break;
        case 2:
            text = "Jebac konfidentow"; 
        break;
        case 3:
            text = "Jebac pedelow"; 
        break;
        case 4:
            text = "Jebac konfidentow"; 
        break;
        case 5:
            text = "Demacia"; 
        break;
    }
        let d = document.getElementById("d");
        let element = document.createElement("p");
        element.id = 'chuj';
        let tekst = document.createTextNode(text);
        element.appendChild(tekst);
        d.append(element);
        remove = 1;
    };

    function Remove() {
        if (remove == 1) { 
        let chuj = document.getElementById("chuj");
        chuj.remove();
        }
    }

garen.addEventListener("click", function (e) {
    e.preventDefault();
    Remove(); 
    Dialogue();    
    score = score + power;
    function addScore() {      
    setInterval(function () {
        score += 2;
        yourscore.innerHTML = score; 
    }, 2000);
}
    function addScoreR() {      
        setInterval(function () {
            score += 10;
            yourscore.innerHTML = score; 
        }, 1000);
}
    yourscore.innerHTML = score;  

        passive.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=250){
            power++;
            score -= 250;
            yourscore.innerHTML = score; 
            }
        });
        q.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=1000){
            power += 5;
            score -= 1000;
            yourscore.innerHTML = score; 
            }
        });
        w.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=2500){
            addScore();
            score -= 2500;
            yourscore.innerHTML = score; 
            }
        });
        ee.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=10000){
            power++;
            score -= 10000;
            yourscore.innerHTML = score; 
            }
        });
        r.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=50000){
            addScoreR();
            score -= 50000;
            yourscore.innerHTML = score; 
            }
        });
});