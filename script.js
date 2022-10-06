console.log('script is running!') 

// global variables
let searchBar = document.getElementById('search') 
let submitBtn = document.getElementById('submit')




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
 



