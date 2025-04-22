// -----------------------------Search Func 

function Search(){
  let SearchInp = document.getElementById("SearchInp").value.toUpperCase();
  let Main = document.querySelector(".main");
  console.log(SearchInp);
  
  let table = document.querySelector("table");
  let tr = document.getElementsByTagName("tr");

  for(let i = 0; i<tr.length; i++){
    let td = tr[i].getElementsByTagName("td")[0];
    if(td){
      let text = td.innerHTML;
      if(text.toLocaleUpperCase().indexOf(SearchInp) > -1){
        tr[i].style.display="";
        Main.style.display="none";
      }else{
        tr[i].style.display="none";
      }
    }
  }
}

// -----------------------------Login Form

let User = document.getElementById("User");

User.addEventListener("click", function () {
  loginForm.classList.toggle("FormData");
});

let loginForm = document.querySelector(".loginForm");

let LoginName = document.getElementById("LoginName");
let LoginPass = document.getElementById("LoginPass");
let LogIn = document.getElementById("LogIn");

LogIn.addEventListener("click", function () {
  if (LoginName.value == "" && LoginPass.value == "") {
    alert("Fill The Form");
  } else {
    alert("Your Response Recorded");
  }
});

// -------------------------------Menu Bar

let Bar = document.getElementById("Bar");
let menuBar = document.querySelector(".menuBar");

Bar.addEventListener("click", function () {
  menuBar.classList.toggle("menuData");
});

// ---------------------------------cust-detail

let ImgSlide = document.querySelectorAll(".cust-detail");
let count = 0;

ImgSlide.forEach(function(val, Ind){
  val.style.left=`${Ind * 100}%`;
})

function myfunc(){
  ImgSlide.forEach(function(slide){
    slide.style.transform=`translateX(-${count * 100}%)`;
  })
}

function Next(){
  count++;
  if(count == ImgSlide.length){
    count = 0;
  }
  myfunc();
}
function Prev(){
  count--;
  if(count == -1){
    count = ImgSlide.length -1;
  }
  myfunc();
}