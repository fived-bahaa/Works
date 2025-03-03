// GET IMG Add To Img- Box
let openFileImg = document.querySelector(".img-box .input-img .img-content")
openFileImg.addEventListener("click", function () {
  let input = document.querySelector(".img-box .input-img input")
  input.click()
})
let testImg
let testBool = false
let input = document.querySelector(".img-box .input-img input")
let containerImg = document.querySelector(".img-box .input-img")
addFromLocalStorageToPage()
input.addEventListener("change", function (event) {
  let file = event.target.files[0];

  if (file && file.type.startsWith("image/")) {
    let reader = new FileReader();
    reader.onload = function (e) {
      testImg = e.target.result
      testBool = true
      containerImg.innerHTML = `<img src="${e.target.result}" alt="CurrentImg"> <span class="delX">X</span>`
      submitImg.style = `color: white; background-color: var(--facebook-icon-background); cursor: pointer`
      let delX = document.querySelector(".delX")
      delX.addEventListener('click', function (e) {
        submitImg.style = `color: #bdc1c5;background-color: #e2e5e9;cursor: not-allowed`
        testImg = undefined
        testBool = false
        console.log(e.target.parentElement)
        containerImg.innerHTML = `<i class="fa-solid fa-xmark del"></i>
        <input type="file" name="img" style="display: none;" accept="video/*, image/*">
        <div class="img-content">
        <i class="fa-solid fa-file-image img"></i>
        <h2>إضافة صور/مقاطع فيديو</h2>
        <span>أو السحب والإفلات</span>
        </div>
        <div class="phone">
        <button>إضافة</button>
        <span>قم بإضافة صور ومقاطع فيديو من جهازك المحمول.</span>
        <i class="fa-solid fa-mobile-screen"></i>`
        rem()
        
        let imgInput = document.querySelector(".img-box .input-img .img-content")
        imgInput.addEventListener("click", function () {
          input.click()
        })
        })
      }
    reader.readAsDataURL(file);
  } else {
    containerImg.innerHTML = `<i class="fa-solid fa-xmark del"></i>
    <input type="file" name="img" style="display: none;" accept="video/*, image/*">
    <div class="img-content">
    <i class="fa-solid fa-file-image img"></i>
    <h2>إضافة صور/مقاطع فيديو</h2>
    <span>أو السحب والإفلات</span>
    </div>
    <div class="phone">
    <button>إضافة</button>
    <span>قم بإضافة صور ومقاطع فيديو من جهازك المحمول.</span>
    <i class="fa-solid fa-mobile-screen"></i>`; // إذا لم يتم اختيار صورة
  }
})

// Style And Open Text_Box Or Img_Box
let imgBoxContent = document.querySelector(".img-box .content")
let imgIconBody = document.querySelector(`.center-body .add-node .img`)
let imgTextBox = document.querySelector(`.text-box .input-add .img`)
let imgImgBox = document.querySelector(`.img-box .input-add .img`)
let del = document.querySelector(".img-box .head i")
imgImgBox.addEventListener("click", function () {
  let inputImg = document.querySelector(".img-box .input-img")
  inputImg.style.display = "block"
  let textBox = document.querySelector('.text-box .content')
  textBox.style = `
  display: none;
  `;
  document.querySelector("header").style = `
  opacity: 0.5;
  pointer-events: none;`
  document.querySelector(".body").style = `
    opacity: 0.5;
    pointer-events: none;`
  del.addEventListener('click', function () {
    imgBoxContent.style = `
    display: none;`
    document.querySelector("header").style = `
    opacity: 1;
    pointer-events: all;`
  document.querySelector(".body").style = `
    opacity: 1;
    pointer-events: all;`
  })
})
imgIconBody.addEventListener("click", function () {
  imgBoxContent.style = `
  display: block;`
  document.querySelector("header").style = `
    opacity: 0.5;
    pointer-events: none;`
  document.querySelector(".body").style = `
    opacity: 0.5;
    pointer-events: none;`
  del.addEventListener('click', function () {
    imgBoxContent.style = `
    display: none;`
    document.querySelector("header").style = `
    opacity: 1;
    pointer-events: all;`
  document.querySelector(".body").style = `
    opacity: 1;
    pointer-events: all;`
  })
})
imgTextBox.addEventListener("click", function () {
  imgBoxContent.style = `
  display: block;`
  let textBox = document.querySelector('.text-box .content')
  textBox.style = `
  display: none;
  `;
  document.querySelector("header").style = `
  opacity: 0.5;
  pointer-events: none;`
  document.querySelector(".body").style = `
    opacity: 0.5;
    pointer-events: none;`
  del.addEventListener('click', function () {
    imgBoxContent.style = `
    display: none;`
    document.querySelector("header").style = `
    opacity: 1;
    pointer-events: all;`
  document.querySelector(".body").style = `
    opacity: 1;
    pointer-events: all;`
  })
})
// Remove And Add Option Img
function rem() {
  let delImg = document.querySelector(".img-box .input-img i")
  let removeImg = document.querySelector(".img-box .input-img")
  imgIconBody.addEventListener("click", function () {
    removeImg.style.display = "block"
  })
  imgTextBox.addEventListener("click", function () {
    removeImg.style.display = "block"
  })
  delImg.addEventListener("click", function () {
    removeImg.style.display = "none"
  })
}
rem()
// Create Element And Check 
let submitImg = document.querySelector(".img-box .input-footer button")
let inputImg = document.querySelector(".img-box .input-content input")
let header = document.querySelector("header")
let bodyContent = document.querySelector(".body")
submitImg.addEventListener("click", function () {
  if (inputImg.value != "" || testBool == true) {
    createElementText(inputImg.value, testImg, testBool)
    imgBoxContent.style.display = "none"
    header.style.opacity = "1"
    header.style.pointerEvents = "auto"
    bodyContent.style.opacity = "1"
    bodyContent.style.pointerEvents = "auto"
    document.querySelector(".img-box .content .input-content input").value = ""
  }
})
inputImg.addEventListener("input", function () {
  if (inputImg.value != "") {
    submitImg.style = `color: white; background-color: var(--facebook-icon-background); cursor: pointer`
  } else {
    submitImg.style = `color: #bdc1c5;background-color: #e2e5e9;cursor: not-allowed`
  }
})

let container = document.querySelector(".body .center-body .container")
function createElementText(textUser, testImg, check) {
  let container = document.querySelector(".body .center-body .container")
  let contentImg = document.createElement("div")
  let head = document.createElement("div")
  let icon = document.createElement("div")
  let iOne = document.createElement("i")
  let iTwo = document.createElement("i")
  let imgDiv = document.createElement("div")
  let name = document.createElement("span")
  let imgIcon = document.createElement("img")
  let text = document.createElement("div")
  let image = document.createElement("div")
  let img = document.createElement("img")
  let rich = document.createElement("div")
  let likeComment = document.createElement("div")
  let iThree = document.createElement("i")
  let iFour = document.createElement("i")
  let iFive = document.createElement("i")
  let iSix = document.createElement("i")
///////////////////////////////////////////////////////
    function checkUserName() {
      for (let i = 0; i < JSON.parse(localStorage.getItem("accounts")).length; i++) {
        let user = localStorage.getItem("currentUserId")
        if (JSON.parse(localStorage.getItem("accounts"))[i].id == user) {
          let first = JSON.parse(localStorage.getItem("accounts"))[i].first
          let sur = JSON.parse(localStorage.getItem("accounts"))[i].sur
          let userName = `${first} ${sur}`
          return userName
        }
      }
    }
    
  iSix.className = "fa-regular fa-thumbs-up"
  iFive.className = "fa-regular fa-comment"
  iFour.className = "fa-regular fa-paper-plane"
  iThree.className = "fa-solid fa-share"
  likeComment.className = "like-comment"
  rich.className = "rich"
  if (check == true) {
    img.setAttribute("src", testImg)
  }
  image.className = "image"
  text.className = "text"
  imgIcon.setAttribute("src", "/images/all-img/test.jpg")
  name.className = "name"
  imgDiv.className = "img"
  iTwo.className = "fas fa-ellipsis-h"
  iOne.className = "fa-solid fa-xmark"
  icon.className = "icon"
  head.className = "head"
  contentImg.className = "content-img"
///////////////////////////////////////////////////
  container.append(contentImg)
  contentImg.append(head)
  head.append(icon)
  icon.append(iOne)
  icon.append(iTwo)
  head.append(imgDiv)
  imgDiv.append(name)
  imgDiv.append(imgIcon)
  contentImg.append(text)
  text.append(textUser)
  contentImg.append(image)
  image.append(img)
  contentImg.append(likeComment)
  likeComment.append(iThree)
  likeComment.append(iFour)
  likeComment.append(iFive)
  likeComment.append(iSix)
  name.innerText = checkUserName()
  deleteFromPage(iOne)
  deleteFromPageTwo(iTwo)
  iTwo.addEventListener('click', function (e) {
    removeFroomLocalStorage(img, text)
    // console.log(e.target.parentElement.parentElement.parentElement)
  })
  addImgToLocalStorage(img, text)
}
function deleteFromPage(del) {
  del.addEventListener("click",function (e) {
    e.target.parentElement.parentElement.parentElement.style.display = "none"
  })
}
function addImgToLocalStorage(img, text) {
  let currentId = localStorage.getItem("currentUserId")
  let allUserData = JSON.parse(localStorage.getItem("userIdes"))
  for (let i = 0; i < allUserData.length; i++) {
    if (currentId == allUserData[i].id) {
      if (!allUserData[i].images) {
        allUserData[i].images = []
      }
      let alreadyExists = allUserData[i].images.some(item => item.srcImg === img.getAttribute("src") && item.textImg === text.textContent);
      
      if (!alreadyExists) {
        let newImg = {
          textImg: text.textContent,
          srcImg: img.getAttribute("src"),
        };
        allUserData[i].images.push(newImg);
        localStorage.setItem("userIdes", JSON.stringify(allUserData));
      }
      return;
    }
  }
}
function deleteFromPageTwo(del) {
  del.addEventListener("click",function (e) {
    e.target.parentElement.parentElement.parentElement.style.display = "none"
  })
}
function addFromLocalStorageToPage() {
  let currentId = localStorage.getItem("currentUserId")
  let allUser = JSON.parse(localStorage.getItem("userIdes"))
  for (let i = 0; i < allUser.length; i++) {
    if (allUser[i].id == currentId) {
      for (let j = 0; j < allUser[i].images.length; j++) {
        let text = allUser[i].images[j].textImg;
        let img = allUser[i].images[j].srcImg
        createElementText(text, img, check=true)
        
      }
    }
  }
}
function removeFroomLocalStorage(img, text) {
  let allUser = JSON.parse(localStorage.getItem("userIdes"))
  let currentId = localStorage.getItem("currentUserId")
  for (let i = 0; i < allUser.length; i++) {
    if (currentId == allUser[i].id) {
      for (let j = 0; j < allUser[i].images.length; j++) {
        if (allUser[i].images[j].srcImg == img.getAttribute("src") && allUser[i].images[j].textImg == text.textContent) {
          console.log(allUser[i])
          allUser[i].images.splice(j, 1)
          console.log(allUser[i])
          localStorage.setItem("userIdes", JSON.stringify(allUser))
          
          return;
        }
      }
    }
  }
}

