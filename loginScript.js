const loginBtn = document.getElementById("login-btn");
const lists = document.querySelectorAll("li");
const username = document.getElementById("username");
const password = document.getElementById("password");
const listOne = document.getElementById("UserReq");
const listTwo = document.getElementById("passwordReq");
const form = document.querySelector("form");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

loginBtn.addEventListener("click", function () {
			if(username.value.length > 0 &&  password.value.length > 0) {
							modal.classList.remove("hidden")
								overlay.classList.remove("hidden")
								setTimeout(function () {
												modal.classList.add("hidden")
												overlay.classList.add("hidden")
												username.value = ""
												password.value = ""
								}, 3000)
			}
			if(username.value.length == "") {
							listOne.classList.remove("hidden");
							setTimeout(function () {
											listOne.classList.add("hidden")
							}, 5000)
			}
			if(password.value.length == 0) {
							listTwo.classList.remove("hidden")
							setTimeout(function () {
											listTwo.classList.add("hidden")
							},5000)
			}
})
form.addEventListener("submit", function (e) {
				e.preventDefault()
})
