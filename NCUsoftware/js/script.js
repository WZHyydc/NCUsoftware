const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)//letter:当前元素的值 idx:当前元素的索引值 transition-delay:何时进行切换
    .join('')
})


var t = 1;
function test(x) {
  //   这个是判断第一次点击
  if (x == 1 && t == 1) {
    document.getElementById(x).style.background = "#0a5275";
  }
  // 这个判断是防止重复点击
  else if (x != t) {
    document.getElementById(x).style.background = "#0a5275";
    document.getElementById(t).style.background = "#042331";
  }
  t = x;
}

function validateForm() {
  var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  var x = document.forms["submitForm"]["email"].value;
  if (!reg.test(x)) {
    alert("请输入正确的邮箱格式！");

  }
  else { alert("登录成功！"); }

}



window.onload = function () {
  {
    var menus = document.querySelectorAll("a.mg");
    var details = document.querySelectorAll("div.h");
    for (var i = 0; i < menus.length; i++) {
      menus[i].id = i;
      menus[i].onclick = function () {
        details[this.id].style.display = "none";
        this.querySelector("i:nth-of-type(2)").className = "fa fa-chevron-circle-down";
      }
    }

  }
}
function refresh() {
  var img = document.getElementById("home");
  img.style.display = "block";
}