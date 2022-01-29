var thumbUp = document.getElementById("thumbUp")
var thumbDown = document.getElementById("thumbDown")
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input = document.getElementById("input")
var author = document.getElementById("author")
var button = document.getElementById("btn")
var delet = document.getElementById("dlte")
button.addEventListener("click", function(){
    document.getElementById("output").innerHTML = input.value
    document.getElementById("output2").innerHTML = "created by ~ " +  author.value
    if(input.value === ''){
        document.getElementById("output").innerHTML = "Please enter a quote"
    }
    input.value = ''
    author.value = ''
})
delet.addEventListener("click",function(){
    document.getElementById("output").innerHTML = '';
    document.getElementById("output2").innerHTML = '';

})
thumbUp.addEventListener("click", function(){
    input1.value = parseInt(input1.value) + 1
    input1.style.color = "blue"
})
thumbDown.addEventListener("click", function(){
    input2.value = parseInt(input2.value) +1
    input2.style.color = "blue"
})

