//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //randomizer 1643
      let x = Math.floor(Math.random() * (data.length + 1));

      let wholeQuote = data[x]; // change this to a variable to make it random 1643

      console.log(wholeQuote);

      let author = wholeQuote.author;
      let quote = wholeQuote.text;
      document.getElementById("quote").innerText = quote;
      console.log(quote);
      if (author) {
        document.getElementById("author").innerText = author;
      } else if (author === null) {
        document.getElementById("author").innerText = "unknown author";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
      S;
    });
}
// click the button

//Event listener for button, run function to get quote
// extract data using json
// querySelector to place quote in class="quote"
//querySelector to place author in class = "author"
//if author === null then populate "unknown author"

// error catch

/// random quote shows up in h2 with class = "quote"
// corresponding author populates in h3 with class = "author"

// function getFetch() {
//   const url = "https://zenquotes.io/api/quotes/";

//   // fetch(url)
//   //   .then((res) => res.json()) // parse response as JSON
//   //   .then((data) => {
//   //     console.log(data);

//   async function getapi(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
//   }

//   getapi(api_url);
// }
// // .catch((err) => {
// //   console.log(`error ${err}`);
// //   });
// // }
