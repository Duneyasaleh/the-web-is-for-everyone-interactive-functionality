window.addEventListener("load", () => {
  // (A) GET HTML ELEMENTS
  var filter = document.getElementById("the-filter"), // search box
      plants = document.querySelectorAll("#the-plants"); // all plants items
 
  // (B) ATTACH KEY UP plantsENER TO SEARCH BOX
  filter.onkeyup = () => {
    // (B1) GET CURRENT SEARCH TERM
    let search = filter.value.toLowerCase();
 
    // (B2) LOOP THROUGH plants ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
    for (let i of plants) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) { i.classplants.add("hide"); }
      else { i.class.plants.remove("hide"); }
    }
  };
});
 require('./bootstrap');