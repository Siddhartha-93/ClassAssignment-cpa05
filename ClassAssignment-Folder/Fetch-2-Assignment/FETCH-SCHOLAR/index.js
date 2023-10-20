let url = "https://fakestoreapi.com/products"

const displayIteam = document.getElementById("root")
const searchItem = document.getElementById("serchBar")
const sorts = document.getElementById("shot_iteam")
const button = document.getElementById("SearchButn")
// let data = []
async function foo() {
    try {
        let res = await fetch(url)
        data = await res.json()
        display(data)

    } catch (error) {
        console.log(error)
    }
}
// disply data in dom
function display(data) {
    data.forEach(function ({ image, title, price, }) {
        let userCard = document.createElement("div")
        userCard.className = "user_card "
        userCard.innerHTML = `
        <img src="${image}" alt="" >
        <p class="names"> ${title}</p>
        <p class="price"> Price: ${price}</p>
        `;
        displayIteam.append(userCard)
    })
}
//sorting high to low and low to high
function sorting(pric) {
    displayIteam.innerHTML = "";
    
    switch (pric) {
        case 'high':
            data.sort((a, b) => b.price - a.price);
            break;
        case 'low':
            data.sort((a, b) => a.price - b.price);
            break;
        default:
            break;
    }
    display(data);
};
function filterItem(tim){
    // displayIteam.innerHTML = "";
    let x = data.filter((ele)=>{
         (ele.title.toLowerCase().includes(tim.toLowerCase()))
       
    })
    return x
}


// sorting and filter
sorts.addEventListener("change", () => {
    sorting(sorts.value)
})


searchItem.addEventListener("input",()=>{ 
    // displayIteam.innerHTML = "";
    filterItem(searchItem.value)
    // const val = e.target.value
    // console.log(val)

    // data.filter((ele)=>{
    //   if(ele.category.toLowerCase().includes(val.toLowerCase())){

    //       display(data)
    //     }

    // })
})
searchItem.addEventListener("input",()=>{ 
    filterItem(searchItem.value)
})

foo()


