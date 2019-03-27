var nodeList = document.querySelectorAll('button');
console.log(nodeList);
function addOptions(event) {
  // document.getElementById("menu").idList.toggle("show");
  var result = document.getElementById("result");
  // function getRecipeData(e) {
    event.preventDefault();
        fetch("http://www.recipepuppy.com/api/?i=beef&mainCurse&p=3")
        .then(function(response) {
          return response.json();
        })
       .then(function(data) {
         console.log(data);
         document.getElementById("result").textContent = data.results[9].title;
         result.href = data.results[9].href;
         // button.appendChild(option);
       })
       .catch(function(error) {
         console.log(error);
       })
    // }
}

function addQuerySelector() {
    var btnId = "";
    for (var i = 0; i < nodeList.length; i++) {
      btnId = nodeList[i].id;
      //document.getElementById(btnId).addEventListener("click", addOptions());
    }
}

document.getElementById("MainCourse").addEventListener("click", addOptions);
