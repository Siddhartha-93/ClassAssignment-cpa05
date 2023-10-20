let url = "https://jsonplaceholder.typicode.com/todos"

async function foo(){
    try {
        let res = await fetch(url)
       let data = await res.json()
       display(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

let display = (task)=>{
task.forEach(({id,title,completed}) => {
    let userCard = document.createElement("div")
    userCard.className = "userCrd"
/// table tag is created---    
    let table = document.createElement("table")
    table.className = "table"
// table row tag created----
    let row1 = document.createElement("tr")
    row1.className = "head"
    let row2 = document.createElement("tr")
    row2.className ="body"
/// table head tag created
    let tableHed = document.createElement("th")
    tableHed.textContent = "Id Number"
    tableHed.className = "id"

    let tableHed2 = document.createElement("th")
    tableHed2.textContent = "Task Tital"
    tableHed2.className = "task"

    let tableHed3 = document.createElement("th")
    tableHed3.textContent = "Status"
    tableHed3.className = "status"
 ////  table head  append in tablerow---------   
    row1.append(tableHed,tableHed2,tableHed3)
// server data used on table data tag----    
    let idElement = document.createElement("td")
    idElement.textContent = ` ${id}`
    let titleElement = document.createElement("td")
    titleElement.textContent = ` ${title}`
    let statusElement = document.createElement("td")
    statusElement.textContent = `${completed.toString()}`
 ////  table Data  append in table row---------  
    row2.append(idElement,titleElement,statusElement)
    
    table.append(row1,row2)
    userCard .append(table)
    
    let user = document.getElementById("root")
    user.append(userCard)  
    
});
}
foo()
