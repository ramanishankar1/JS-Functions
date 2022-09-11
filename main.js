var display=document.getElementById('button')

console.log(display);
function show(){
    document.body.style.backgroundColor="blue";

}


display.addEventListener('click',show);


var cal = document.getElementById('cal')

var out = document.getElementById('out')

function Output() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    let res = parseInt(num1) + parseInt(num2);
    //console.log(res);
    out.innerHTML = res;
}

cal.addEventListener("click", Output)

var num = 10;
var num1 = 30;
function mul() {
    let num2 = num * num1;
    return num2;
}
var out = mul();
console.log(out);


var dis = document.getElementById('show')
