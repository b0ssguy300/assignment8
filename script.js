document.addEventListener("DOMContentLoaded", function () {

  // cookie functions
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days*24*60*60*1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    console.log("cookie saved:", name, value);
  }

  function getCookie(name) {
    let cname = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.indexOf(cname) === 0) return c.substring(cname.length);
    }
    return null;
  }

  // random color generator
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

  // load cookie/default
  let savedColor = getCookie("bgcolor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    console.log("loaded saved color from cookie:", savedColor);
  } else {
    document.body.style.backgroundColor = "lightgreen"; // first visit default
    console.log("first visit, default color applied");
  }

  // button click event
  document.getElementById("colorButton").addEventListener("click", function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    setCookie("bgcolor", randomColor, 7);
    document.getElementById("status").textContent = "Saved color: " + randomColor;
  });

  // fetch api example
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("data from API:", data);
    });

});