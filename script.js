

console.log('script is running!') 

// global variables
let searchBar = document.getElementById('search') 
let submitBtn = document.getElementById('submit') 


//these are the trending images
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4') 

// these are the trending stickers
let img5 = document.querySelector('.imgT1')
let img6 = document.querySelector('.imgT2')
let img7 = document.querySelector('.imgT3')
let img8 = document.querySelector('.imgT4')






// function preventing user from empty search
let searchbarHandle = function() {

submitBtn.addEventListener('click',function(){
    console.log('working')
let empty = ''
if(searchBar.value === empty){
        console.log('please fill out the search')
        alert('Please Fill Out Search Tab')
        event.preventDefault()
    }    
})

}
// calling function expression
searchbarHandle()
 
//start of images being displayed when user is in UI
const apiUrlTrending4 = 'https://api.giphy.com/v1/gifs/trending?api_key=nhTKuYXaMk6fp1e6S3Ts68zTe4nEmEN0&limit=9' 
const apiUrlTrendingS = 'https://api.giphy.com/v1/stickers/trending?api_key=nhTKuYXaMk6fp1e6S3Ts68zTe4nEmEN0&limit=8' // stickers

 // fetch call to the trending giphys
let trendingGiphys = function(){
    fetch(apiUrlTrending4).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Network response error!')
        }
    }).then((data)=>{
        // console.log(data)
        showTrendingGiphy(data)
    }).catch((error)=>console.log('Fetch Error',error))
}

//fetch call the trending stickers
let trendingStickers = function(){
    fetch(apiUrlTrendingS).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Network response error!')
        }
    }).then((data)=>{
        // console.log(data)
        showTrendingStickers(data)
    }).catch((error)=>console.log('Fetch Error',error))
}

// functions that grabs the data for trending giphys
function showTrendingGiphy(data){

    //variables for the img containers on trending giphys
    let urlTrending1 = data.data[7].images.downsized.url
    let urlTrending2 = data.data[1].images.downsized.url
    let urlTrending3 = data.data[8].images.downsized.url
    let urlTrending4 = data.data[3].images.downsized.url
    
    img1.style.backgroundImage = 'url('+urlTrending1+')'
    img2.style.backgroundImage = 'url('+urlTrending2+')'
    img3.style.backgroundImage = 'url('+urlTrending3+')'
    img4.style.backgroundImage = 'url('+urlTrending4+')'
}  

function showTrendingStickers(data){
    //variables for the img containers on trending stickers
    let urlTrendingS1 = data.data[0].images.downsized.url
    let urlTrendingS2 = data.data[1].images.downsized.url
    let urlTrendingS3 = data.data[2].images.downsized.url
    let urlTrendingS4 = data.data[3].images.downsized.url
    
    img5.style.backgroundImage = 'url('+urlTrendingS1+')'
    img6.style.backgroundImage = 'url('+urlTrendingS2+')'
    img7.style.backgroundImage = 'url('+urlTrendingS3+')'
    img8.style.backgroundImage = 'url('+urlTrendingS4+')'
}




trendingGiphys()
trendingStickers()