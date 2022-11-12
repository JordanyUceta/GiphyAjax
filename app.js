console.log("Let's get this party started!");
const $gifArea = $("#gif-area");
const $searchInput = $("#search");
// ZHHQJWlT5X3Y5lnbCa4AFVswPqjyTwXn

async function getGif(word) {
    let numLenght = word.data.length; 
    if (numLenght){
        let randomIdx = Math.floor(Math.random() * numLenght); 
        let $newCol = $('<div>', { class: " "}); 
        let $newGif = $("<img>", {
            src: word.data[randomIdx].images.original.url, 
            class: "w-100"
        }); 
        $newCol.append($newGif); 
        $gifArea.append($newCol);
    }

 
}

$("form").on("submit", async function(evt) {
    evt.preventDefault(); 

    let searchTerm = $searchInput.val(); 
    $searchInput.val(""); 

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm, 
            api_key: "ZHHQJWlT5X3Y5lnbCa4AFVswPqjyTwXn"
        }})
    
    getGif(response.data)

})

$("#remove").on("click", function() {
$gifArea.empty()
})

