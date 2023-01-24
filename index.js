//To do: add dark mode, add number of colors returned


const selectedColor = document.getElementById("favcolor")
const main = document.querySelector('main')
const colorsWrapper = document.getElementById("colorsWrapper")
const colorsHexWrapper = document.getElementById("colorsHexWrapper")
const typeSelector = document.getElementById("typeSelector")

let colorType = ``
let colorsArr = []
let myColor = ``

function getColor(){
    myColor = selectedColor.value
    return myColor
}

selectedColor.addEventListener("change", getColor)

document.getElementById("submitBtn").addEventListener("click", function(){
    getColor()
    api()
})

function api(){
    let colorType = typeSelector.value.toLowerCase()
    let apiColor = myColor.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${apiColor}&mode=${colorType}`)
    .then((response) => response.json())
    .then(function(data){
        colorsArr = data.colors
        getHex()
    })
}

function getHex(){
    colorsWrapper.innerHTML = ``
    colorsHexWrapper.innerHTML = ``
    for(let i = 0; i < colorsArr.length; i++){
         
        colorsWrapper.innerHTML += `<div class="color" style="background-color: ${colorsArr[i].hex.value};"></div>` 
        
        colorsHexWrapper.innerHTML +=`<p class="hexParagraph">${colorsArr[i].hex.value}</p>`

    }
}