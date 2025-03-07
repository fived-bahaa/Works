let user = localStorage.getItem("currentUserId")
let userIdes = localStorage.getItem("userIdes")
let rightBody = document.querySelector(".body .right-body")
if(user != null && userIdes != null) {
  addFromLocalStorageToPage()
  let mainSearch = document.querySelector("header .rigth-icon input")
  let boxSearch = document.querySelector("header .rigth-icon .box-search")
  mainSearch.addEventListener("focus", function () {
    boxSearch.style.height = "800px"
    boxSearch.style.boxShadow = "-1px 1px 6px var(--background-left-icon)"
    document.querySelector(".fa-facebook").className = "fa-solid fa-arrow-right"
    document.querySelector(".fa-arrow-right").style.color = "var(--secondary-icon)"
    document.querySelector(".fa-arrow-right").style.fontSize = "21px"
    document.querySelector(".fa-arrow-right").style.margin = "0 20px"
    boxSearch.style.zIndex = "99"
    rightBody.style.zIndex = "-1"
  })
  mainSearch.addEventListener("blur", function () {
    boxSearch.style.height = "fit-content"
    boxSearch.style.boxShadow = "none"
    document.querySelector(".fa-arrow-right").style.color = "var(--facebook-icon-background)"
    document.querySelector(".fa-arrow-right").style.fontSize = "33px"
    document.querySelector(".fa-arrow-right").style.margin = "0 14px"
    document.querySelector(".fa-arrow-right").className = "fa-brands fa-facebook"
    rightBody.style.zIndex = "1"
  })
  let facebook = document.querySelector(".rigth-icon li:last-of-type")
  let home = document.querySelector(".center-icon li:last-of-type")
  let freinds = document.querySelector(".center-icon li:nth-of-type(4)")
  facebook.onclick = function () {
    open("index.html", "_self")
  }
  home.onclick = function () {
    open("index.html", "_self")
  }
  freinds.onclick = function () {
    open("freinds.html", "_self")
  }
  
  let textBox = document.querySelector(".text-box .content")
  let textInput = document.querySelector(".body .center-body .add-node input")
  let header = document.querySelector("header")
  let bodyContent = document.querySelector(".body")
  let del = document.querySelector(".text-box .head .del")
  let submitTextBox = document.querySelector(".text-box .input-footer button")
  let inputTextBox = document.querySelector(`.text-box .input-content [type="text"]`)
  let imgBox = document.querySelector(".img-box .content")
  let remInput = document.querySelector(".text-box .content .input-content input")
  textInput.addEventListener('focus', function () {
    textBox.style.display = "block"
    header.style.opacity = "0.5"
    header.style.pointerEvents = "none"
    bodyContent.style.opacity = "0.5"
    bodyContent.style.pointerEvents = "none"
    imgBox.style.display = "none"
    
  })
  del.addEventListener("click", function () {
    textBox.style.display = "none"
    header.style.opacity = "1"
    header.style.pointerEvents = "auto"
    bodyContent.style.opacity = "1"
    bodyContent.style.pointerEvents = "auto"
  })
  submitTextBox.addEventListener("click", function () {
    if (inputTextBox.value != "" && inputTextBox.value.length >= 4) {
      createTextElement(inputTextBox.value)
      addTextToLocalStorage(inputTextBox.value)
      console.log(remInput)
      textBox.style.display = "none"
      header.style.opacity = "1"
      header.style.pointerEvents = "auto"
      bodyContent.style.opacity = "1"
      bodyContent.style.pointerEvents = "auto"
      remInput.value = ""
    }
  })
  function createTextElement (textUser) {
    let containerElement = document.querySelector(".body .center-body .container")
    function checkUserName() {
      for (let i = 0; i < JSON.parse(localStorage.getItem("accounts")).length; i++) {
        if (JSON.parse(localStorage.getItem("accounts"))[i].id == user) {
          let first = JSON.parse(localStorage.getItem("accounts"))[i].first
          let sur = JSON.parse(localStorage.getItem("accounts"))[i].sur
          let userName = `${first} ${sur}`
          return userName
        }
      }
    }
  
    let container = document.createElement("div")
    let content = document.createElement("div")
    let head = document.createElement("div")
    let iOne = document.createElement("i")
    let imgDiv = document.createElement("div")
    let name = document.querySelector("span")
    let img = document.createElement("img")
    let text = document.createElement("div")
    let likeComment = document.createElement("div")
    let iTwo = document.createElement("i")
    let iThree = document.createElement("i")
    ////////////////////////////////////////////////////
    iThree.className = "fa-regular fa-thumbs-up"
    iTwo.className = "fa-regular fa-comment"
    likeComment.className = "like-comment"
    text.className = "text"
    img.setAttribute("src", "images/all-img/test.jpg")
    name.className = "name"
    imgDiv.className = "img"
    iOne.className = "fa-solid fa-trash"
    // fas fa-ellipsis-h
    head.className = "head"
    content.className = "content"
    container.className = "container"
    /////////////////////////////////////////////////////
    containerElement.append(content)
    content.append(head)
    head.append(iOne)
    head.append(imgDiv)
    imgDiv.append(name)
    name.innerText = checkUserName()
    imgDiv.append(img)
    content.append(text)
    text.innerText = textUser
    content.append(likeComment)
    likeComment.append(iTwo)
    likeComment.append(iThree)
    iOne.addEventListener("click" ,function (e) {
      let element = e.currentTarget.parentElement.parentElement
      element.style.display = "none"
      removeElementFromLocalStorage(text)
    })
  }
  let submitInput = document.querySelector(".text-box .content .input-footer button")
  let inputInput = document.querySelector(".text-box .content .input-content input")
  inputInput.addEventListener("input", function () {
    inputInput.innerHTML = ""
    if (inputInput.value == "" || inputInput.value.length < 4) {
      submitInput.style = `
        color: #bdc1c5;
        background-color: #e2e5e9;
        cursor: not-allowed;
      `
    } else {
      submitInput.style = `
        color: white;
        background-color: var(--facebook-icon-background);
        cursor: pointer;
      `
    }
  })
  function addTextToLocalStorage(textUser) {
    let allUser = JSON.parse(localStorage.getItem("userIdes")) || []
    let userId = localStorage.getItem("currentUserId")
    for (let i = 0; i < allUser.length; i++) {
      if (allUser[i].id == userId) {
        if (!allUser[i].text) {
          allUser[i].text = []
        }
        allUser[i].text.push(textUser)
        localStorage.setItem("userIdes", JSON.stringify(allUser))
        return;
      }
    }
    console.log("إلم يتم العثور على مستخدم")
  }
  function addFromLocalStorageToPage() {
    let allUser = JSON.parse(localStorage.getItem("userIdes")) || []
    let userId = localStorage.getItem("currentUserId")
    for (let i = 0; i < allUser.length; i++) {
      if (allUser[i].id == userId) {
        for (let j = 0; j < allUser[i].text.length; j ++) {
          createTextElement(allUser[i].text[j])
        }
      }
    }
  }
  function removeElementFromLocalStorage(content) {
    let allUser = JSON.parse(localStorage.getItem("userIdes")) || []
    let userId = localStorage.getItem("currentUserId")
    for (let i = 0; i < allUser.length; i ++) {
      if (allUser[i].id == userId) {
        for (let j = 0; j < allUser[i].text.length; j++) {
          if (allUser[i].text[j] == content.textContent) {
            // console.log(allUser[i].text[j])
            allUser[i].text.splice(j, 1)
            localStorage.setItem("userIdes", JSON.stringify(allUser))
            return;
          }
        }
      }
    }
  }
  let tests = document.querySelector(`header .container .rigth-icon .li-search i`)
  let inputs = document.querySelector(`header .rigth-icon input`)
  tests.addEventListener("click", function () {
    inputs.style.display = "block"
    inputs.focus()
  })
  function media1999px () {
    let searchIcon = this.document.querySelector("header .container .rigth-icon .li-search i")
    let searchInput = this.document.querySelector("header .container .rigth-icon li input")
    if (window.matchMedia("(max-width: 1199.9px)").matches) {
      searchIcon.style.padding = "12px"
      searchIcon.style.borderRadius = "50%"
      searchInput.style.display = "none"
      searchInput.addEventListener("focus", function () {
        searchIcon.style.padding = "12px 20px 12px 0"
        searchIcon.style.borderRadius = "0 20px 20px 0"
      })
      searchInput.addEventListener("blur", function () {
        searchIcon.style.padding = "12px"
        searchIcon.style.borderRadius = "50%"
        searchInput.style.display = "none"
      })
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
      searchIcon.style.padding = "12px 20px 12px 0"
      searchIcon.style.borderRadius = "0 20px 20px 0"
      searchInput.style.display = "block"
    }
  }
  window.addEventListener("resize", media1999px)
  window.addEventListener("load", media1999px)
  function media550px () {
    if (window.matchMedia("(max-width: 550px)").matches) {
      document.querySelector("header .container .rigth-icon .box-search").style = `
      position: absolute;
      right: 0;
      `
    } else {
      document.querySelector("header .container .rigth-icon .box-search").style = `
      position: relative;
      right: 0;
      `
    }
  }
  window.addEventListener("resize", media550px)
  window.addEventListener("load", media550px)
} else {
  console.log("Log In Please")
  setTimeout(() => {
    alert("Log In Please");
    open("/login.html", "_self")
  }, 0);
}
