console.log('script is running!') 

let searchBar = document.getElementById('search') 

let submitBtn = document.getElementById('submit')



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
searchbarHandle()
 



