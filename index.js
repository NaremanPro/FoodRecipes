/*function createNode(element) {
     return document.createElement(element);
 }

 function append(parent, el) {
   return parent.appendChild(el);
 }

 const ul = document.getElementById('MainCurse');
 const url = 'http://www.recipepuppy.com/api/?i=beef&mainCurse&p=3';
 fetch(url)
 .then((resp) => resp.json())
 .then(function(data) {
   let MainCurse = data.results;
   return MainCurse.map(function(MainCurse) {
     let li = createNode('li'),
     li.innerHTML = "2bleu's Perfect Roast Beef";
     append(li, li.innerHTML);
     append(ul, li);
   })
 })
 .catch(function(error) {
   console.log(error);
 });*/

 // document.getElementById("button").addEventListener("click", getRecipeData);

 function getRecipeData () {
   // event.preventDefault();

   fetch("http://www.recipepuppy.com/api/?i=beef&mainCurse&p=3", {
     method: 'GET',
     headers: {
       'Origin': '*'
     }
   })
   .then(function(response) {
     return response.text();
   })
  .then(function(data) {
    console.log(data ? JSON.parse(data) : {});
    //document.getElementById("MainCurse").textContent = data.href;
  })
  .catch(function(error) {
    console.log(error);
  })
}

getRecipeData();
