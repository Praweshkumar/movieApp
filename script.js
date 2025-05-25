const APIKey = "50b3c689";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const getData = async (movie) => {
  try {
    let fetchData = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`
    );
    let jsonData = await fetchData.json();
    console.log(jsonData);
    document.querySelector(".card").innerHTML = "";
    searchInput.value = "";

    let div = document.createElement("div");
    div.classList.add("movieCard");
    div.innerHTML = `
     <img src="${jsonData.Poster}" alt="">
    <div class="cardText">
        <h1>${jsonData.Title}</h1>
         <a href="">${jsonData.Genre}</a>
        <p>Writer :<span>${jsonData.Writer}</span></p>
        <p>Actors : <span>${jsonData.Actors}</span></p>
        <p>Release :<span>${jsonData.Released}</span></p>
        <p>Duration :<span>${jsonData.Runtime}</span></p>
        <p>Discription :<span>${jsonData.Plot}</span></p>
    </div>`;

    document.querySelector(".card").appendChild(div);
  } 
  catch(err) {
    document.querySelector(".card").innerHTML =
      "<h1>movie not found</h1>"
  }
};
searchBtn.addEventListener("click", function () {
  let movieName = searchInput.value;
  if (movieName != "") {
    getData(movieName);
  } else {
    document.querySelector(".card").innerHTML =
      "<h1>search movie name</h1>";
  }
});
