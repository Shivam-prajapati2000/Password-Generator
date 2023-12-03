let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')
let gntbtn = document.getElementById('gntbtn')
let lowercase = document.getElementById("lowercase")
let Symbol = document.getElementById("Symbol")
let digit = document.getElementById("digit")
let uppercase = document.getElementById("uppercase")
let copy = document.getElementById("copy")



// showing input slider.....
inputSlider.addEventListener('input',function(){
    sliderValue.textContent = inputSlider.value
})

gntbtn.addEventListener("click",function(){
    passBox.value = generatePassword()
})

copy.addEventListener("click",function(){
    if(passBox.value!="")
    {
        navigator.clipboard.writeText(passBox.value)
        copy.textContent = "check"
        copy.title = "Password Copied"
        setTimeout(function(){
            copy.textContent = "content_copy"
            copy.title = ""
        },3000)
    }
})
//generate password

let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "0123456789"
let symbol = "~!@#$%^&*"
let generatePassword=function(){
    let genPassword=""
    let allChars = ""

    allChars += lowercase.checked ? lowerChars : ""
    allChars += Symbol.checked ? symbol : ""
    allChars += digit.checked ? number : ""
    allChars += uppercase.checked ? upperChars : ""
    // genPassword = number.charAt(Math.floor(Math.random()*upperChars.length))
    //genPassword = allChars.charAt(Math.floor(Math.random()*allChars.length))

    for(let i = 1 ; i<=inputSlider.value ; i++)
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length))
    return genPassword;
}