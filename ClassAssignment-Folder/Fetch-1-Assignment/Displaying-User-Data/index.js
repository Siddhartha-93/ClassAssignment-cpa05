
//making async-await function
async function userData(){
    try {
        let res =  await fetch("https://reqres.in/api/users?page=2")
        let resObj = await res.json()
        printData(resObj.data)
        
    } catch (error) {
        console.error("There was an error fetching the data.", error);
        
    }
    
}

 function printData(data){
    data.forEach( function (item){
        let userCard = document.createElement("div")
        userCard.className= "user_Card"
        
        let userImage = document.createElement("img")
        userImage.src = `${item.avatar}`
    
        let userName = document.createElement("p")
        userName.textContent = `Name: ${item.first_name} ${item.last_name}`
        
        let userId = document.createElement("p")
        userId.textContent = `User Id: ${item.id}`
        
        let userEmail = document.createElement("p")
        userEmail.textContent = `Email: ${item.email}`
        
        userCard.append( 
            userImage,
            userId, 
            userName, 
            userEmail,
        )
        let root = document.getElementById("display")
        root.append(userCard) 
        
    });
}

    
                