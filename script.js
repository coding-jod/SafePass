// what functions are required?
// add to local storage 
// delete from local storage
// display function: extract from local storage and display the list 
// function to clear local storage 
// localStorage.clear()
const writeclip=(val)=>{
  navigator.clipboard.writeText(val).then(
    () => {
      /* clipboard successfully set */
      // document.getElementById("alert").style.display = "inline"
      // setTimeout(() => {
      //   document.getElementById("alert").style.display = "none"
      // }, 2000);
      // alert("copied succesfully")

    },
    () => {
      /* clipboard write failed */
      // alert("Clipboard copying failed")
    },
  );
}
const dltpswrd=(web,user,pass)=>{
  let element= JSON.parse(localStorage.getItem("passwords"))
  element=element.filter((e)=>{
    return (e.website!=web || e.username!=user || e.password!=pass )
  })
  localStorage.setItem("passwords",JSON.stringify(element))
  // console.log(element)
  showpswrd()
}
const showpswrd=()=>{
  addelementhere.innerHTML=""
  if(localStorage.getItem("passwords")==null || localStorage.getItem("passwords")=="[]" ) addelementhere.innerHTML="No passwords saved yet"
  else{
    let element= JSON.parse(localStorage.getItem("passwords"))
  for(let i=0;i<element.length;i++)
  {
    let h= element[i].password.length
    let s=""
    for(let j=0;j<h;j++)
    s+="*"
    addelementhere.innerHTML+=
    `<tr>
            <th scope="row" class="text-center">${element[i].website} <img onclick="writeclip('${element[i].website}')" src="copy.svg" alt="Copy Button" width="10" width="10" height="10"> </th>
            <td class="text-center">${element[i].username} <img onclick="writeclip('${element[i].username}')" src="copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
            <td class="text-center">${s} <img onclick="writeclip('${element[i].password}')" src="copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
            <td class="text-center"><button class="btnsm" onclick="dltpswrd('${element[i].website}','${element[i].username}','${element[i].password}')">Delete</button></td>
    </tr>`
  }
}
}
showpswrd()
const addpswrd=(web,user,pass)=>{
  let element= localStorage.getItem("passwords")    
  if(element==null)
  {
    let xx=[]
    xx.push({
      website:web,
      username:user,
      password:pass,
    })

    localStorage.setItem("passwords",JSON.stringify(xx))
  }
  else{
    let element= JSON.parse(localStorage.getItem("passwords"))
    // console.log(element)
    element.push({website:web,username:user,password:pass});   
    localStorage.setItem("passwords",JSON.stringify(element))

  }
  showpswrd()
}


// addpswrd("hehe","hehe","hehe")
// addpswrd("chal","chal","chal")
// // dltpswrd("chal","chal","chal")
// addpswrd("chal","chal","chal4")
// // addpswrd("chal","chal","chal")
// dltpswrd("chal","chal","chal")

// showpswrd()
document.querySelector(".btn").addEventListener("click", (e)=>{
  e.preventDefault()
  addpswrd(website.value,username.value,password.value)
  website.value=""
  username.value=""
  password.value=""
} )
document.getElementById("clear").addEventListener("click",(e)=>{
  e.preventDefault()

localStorage.clear()
showpswrd()
// console.log("clear ed")
})

// {/* <button type="button"> Clear all Passwords </button> */}

// writeclip(`pratham`)


