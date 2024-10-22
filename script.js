const accessKey='YR1bCoh46IO2C2szQXiuZme0oDA5pyo9iIHzHFbP_6w';

const form=document.querySelector('form');
const searchin=document.querySelector('.search');
const searchres=document.querySelector('.main');
const show=document.querySelector('.show');
let page=1;
async function searchInput(){
    const searchInputByuser=searchin.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${searchInputByuser}&client_id=${accessKey}`;
    const response= await fetch(url);
    const data= await response.json();
    if (page==1){
        searchres.innerHTML="";
    }
    const results=data.results;
console.log(results);
    results.map((item,index)=>{
        searchres.innerHTML+=`
       
        <div class="main-content">
            <img src="${item.urls.small}" alt="">
            <a href="${item.links.html}">${item.alt_description}</a>
        </div> `
    });
    page++;
    if (page>1){
        show.style.display='block';
    }
}
form.onsubmit = (e) =>{
    e.preventDefault(); //prevent from reload page
    page=1;
    searchInput();
}
show.onclick= () =>{
    searchInput();
}