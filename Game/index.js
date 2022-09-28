
function clickme()
{
helloWorld.innerHTML="Payment Successfull, and thank You for your Pertronage"
helloWorld.style.fontSize="60px"
helloWorld.style.color="blue"
}

let helloWorld=document.getElementById("hello");
console.log('hellow world')

function boo( a, b, c){
console.log(a+b *c)
}
boo(5,9,10)
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "pic_bulboff.gif";
    } else {
        image.src = "pic_bulbon.gif";
    }
}

window.alert(2 + 6);
