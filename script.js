

console.log('script is running!') 

// global variables
let searchBar = document.getElementById('search') 
let submitBtn = document.getElementById('submit') 

let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')




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
const apiUrlTrending4 = 'https://api.giphy.com/v1/gifs/trending?api_key=nhTKuYXaMk6fp1e6S3Ts68zTe4nEmEN0&limit=4'


let trendingGiphys = function(){
    fetch(apiUrlTrending4).then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Network response error!')
        }
    }).then((data)=>{
        console.log(data)
        showTrending(data)
    }).catch((error)=>console.log('Fetch Error',error))
}

function showTrending(data){
    let urlTrending1 = data.data[0].images.downsized.url
    let urlTrending2 = data.data[1].images.downsized.url
    let urlTrending3 = data.data[2].images.downsized.url
    let urlTrending4 = data.data[3].images.downsized.url
    
    img1.style.backgroundImage = 'url('+urlTrending1+')'
    img2.style.backgroundImage = 'url('+urlTrending2+')'
    img3.style.backgroundImage = 'url('+urlTrending3+')'
    img4.style.backgroundImage = 'url('+urlTrending4+')'
    
}

trendingGiphys()