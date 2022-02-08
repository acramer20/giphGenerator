
const $gifSpace = $("#gifSpace");
const $searchBar = $("#search");

function addGif(res){
let amtResults = res.data.length;
if(amtResults) {
    let randomIdx = Math.floor(Math.random() * amtResults);
    let $gifSpot = $("<div>", {class: "gifHolder"});
    let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url, 
        class: "imgClass"
    });
    $gifSpot.append($newGif);
    $gifSpace.append($gifSpot);
}
}

$("form").on("submit", async function(evt) {
    //preventing default so it doesn't reload every time
    evt.preventDefault()
    let itemSearched = $searchBar.val();

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: 
    {q: itemSearched, 
    api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }});
    
    addGif(response.data);

});

$("#removeImg").on("click", function(e){
    e.preventDefault();
    $gifSpace.empty();
})



