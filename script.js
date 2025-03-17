//your JS code here. If required.
let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");

let btn = document.getElementById("submit");

let table = document.getElementById("book-list");

btn.addEventListener("click",e=>{
	let row = document.createElement("tr");
	
	let cell1 = document.createElement("td");
	cell1 = title.value
	let cell2 = document.createElement("td");
	cell2 = author.value;
	let cell3 = document.createElement("td");
	cell3 = isbn.value;
	let cell4 = document.createElement("td");
	let dltBtn = document.createElement("button")
	dltBtn.style.backgroundColor = "red";

	cell4.append(dltBtn);
	row.append(cell1,cell2,cell3,cell4);
	table.append(row);
	
})