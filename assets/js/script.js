let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

//languages.forEach(element => console.log(element));

const houleTbody = document.getElementById("houleTbody");

languages.forEach(element =>{

    let myTr = document.createElement("tr");
    myTr.innerHTML = `<td>${element}</td>`;
    houleTbody.appendChild(myTr);  
});



for(let i=1; i<=6; i++){
    console.log("keynote");

}