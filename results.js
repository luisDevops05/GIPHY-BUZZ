
// global variables for the image containers

let imgc1 = document.querySelector('.con1')
let imgc2 = document.querySelector('.con2')
let imgc3 = document.querySelector('.con3')
let imgc4 = document.querySelector('.con4')
let imgc5 = document.querySelector('.con5')
let imgc6 = document.querySelector('.con6')
let imgc7 = document.querySelector('.con7')
let imgc8 = document.querySelector('.con8')
let imgc9 = document.querySelector('.con9')
let imgc10 = document.querySelector('.con10')
let imgc11 = document.querySelector('.con11')
let imgc12 = document.querySelector('.con12')
let imgc13 = document.querySelector('.con13')
let imgc14 = document.querySelector('.con14')
let imgc15 = document.querySelector('.con15')
let imgc16 = document.querySelector('.con16')
let imgc17 = document.querySelector('.con17')
let imgc18 = document.querySelector('.con18')
let imgc19 = document.querySelector('.con19')
let imgc20 = document.querySelector('.con20')
let imgc21 = document.querySelector('.con21')
let imgc22= document.querySelector('.con22')
let imgc23 = document.querySelector('.con23')
let imgc24 = document.querySelector('.con24')
let imgc25 = document.querySelector('.con25')


// let searchBar1 = document.getElementById('search') 
// let submitBtn1 = document.getElementById('submit') 

// submitBtn1.addEventListener('click',function(){
//     console.log('working')
//     localStorage.setItem('userInput',searchBar.value)
 
// })
// api with user input 
// currently not working worked once its a small bug


let userInput = localStorage.getItem('userData')

const searchApi = 'https://api.giphy.com/v1/gifs/search?api_key=nhTKuYXaMk6fp1e6S3Ts68zTe4nEmEN0&q='+userInput+'&limit=50'



//fetch function
let searchGiphy = function(){
    fetch(searchApi).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Network response error')
        }
    }).then((data)=>{
        // console.log(data)
        showSearch(data)
    }).catch((error)=>console.log('Fetch Error'))
}
// function that displays the content
function showSearch(data){
  

let imgUrl1 = data.data[0].images.downsized.url
let imgUrl2 = data.data[1].images.downsized.url
let imgUrl3 = data.data[2].images.downsized.url
let imgUrl4 = data.data[3].images.downsized.url
let imgUrl5 = data.data[4].images.downsized.url
let imgUrl6 = data.data[5].images.downsized.url
let imgUrl7 = data.data[6].images.downsized.url
let imgUrl8 = data.data[7].images.downsized.url
let imgUrl9 = data.data[8].images.downsized.url
let imgUrl10 = data.data[9].images.downsized.url
let imgUrl11 = data.data[10].images.downsized.url
let imgUrl12 = data.data[11].images.downsized.url
let imgUrl13 = data.data[12].images.downsized.url
let imgUrl14 = data.data[13].images.downsized.url
let imgUrl15 = data.data[14].images.downsized.url
let imgUrl16 = data.data[15].images.downsized.url
let imgUrl17 = data.data[16].images.downsized.url
let imgUrl18 = data.data[17].images.downsized.url
let imgUrl19 = data.data[18].images.downsized.url
let imgUrl20 = data.data[19].images.downsized.url
let imgUrl21 = data.data[20].images.downsized.url
let imgUrl22 = data.data[21].images.downsized.url
let imgUrl23 = data.data[22].images.downsized.url
let imgUrl24 = data.data[23].images.downsized.url
let imgUrl25= data.data[24].images.downsized.url


imgc1.style.backgroundImage = 'url('+imgUrl1+')'
imgc2.style.backgroundImage = 'url('+imgUrl2+')'
imgc3.style.backgroundImage = 'url('+imgUrl3+')'
imgc4.style.backgroundImage = 'url('+imgUrl4+')'
imgc5.style.backgroundImage = 'url('+imgUrl5+')'
imgc6.style.backgroundImage = 'url('+imgUrl6+')'
imgc7.style.backgroundImage = 'url('+imgUrl7+')'
imgc8.style.backgroundImage = 'url('+imgUrl8+')'
imgc9.style.backgroundImage = 'url('+imgUrl9+')'
imgc10.style.backgroundImage = 'url('+imgUrl10+')'
imgc11.style.backgroundImage = 'url('+imgUrl11+')'
imgc12.style.backgroundImage = 'url('+imgUrl12+')'
imgc13.style.backgroundImage = 'url('+imgUrl13+')'
imgc14.style.backgroundImage = 'url('+imgUrl14+')'
imgc15.style.backgroundImage = 'url('+imgUrl15+')'
imgc16.style.backgroundImage = 'url('+imgUrl16+')'
imgc17.style.backgroundImage = 'url('+imgUrl17+')'
imgc18.style.backgroundImage = 'url('+imgUrl18+')'
imgc19.style.backgroundImage = 'url('+imgUrl19+')'
imgc20.style.backgroundImage = 'url('+imgUrl20+')'
imgc21.style.backgroundImage = 'url('+imgUrl21+')'
imgc22.style.backgroundImage = 'url('+imgUrl22+')'
imgc23.style.backgroundImage = 'url('+imgUrl23+')'
imgc24.style.backgroundImage = 'url('+imgUrl24+')'
imgc25.style.backgroundImage = 'url('+imgUrl25+')'




    
}
console.log(userInput)
searchGiphy()
