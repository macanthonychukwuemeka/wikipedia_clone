const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
 
const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML =
      '<div class="error"> please enter valid search term</div>';
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = '<div class="loading"></div>';
   
 resultsDOM.innerHTML = `<div class="loading"></div>`;
 try {
  const response = await fetch(`${url}${searchValue}`);
  const data = await response.json();
  const results = data.query.search;
  console.log(results );
  if (results.length < 1) {
    resultsDOM.innerHTML =
      '<div class="error">no matching results. Please try again</div>';
    return;
  }
  renderResults(results);
} catch (error) {
  resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
}
};

const renderResults = (list) =>{
  const cardsList = list
  .map((item) => {
    const { title, snippet, pageid } = item;
    return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
          <h4>${title}</h4>
          <p>
            ${snippet}
          </p>
        </a>`;
  })
  .join('');
resultsDOM.innerHTML = `<div class="articles">
        ${cardsList}
      </div>`;
};
 



//     resultDOM.innerHTML =`<div class="loading"></div>`
//     try {
//         const response = await fetch(`${url}${searchValue}`);
//         const data = await response.json();
//         //GET A LISTfrom the data,which WILL BE PASSED INTO renderResult function
//         const results = data.query.search;
//         //encoding error message for empty string
//         if(results.length < 1){
//         resultDOM.innerHTML =
//         `<div class="error"> no match result please try again</div>`;
//             return;
//         }
//         renderResults(results)

//     } catch (error) {
//      resultDOM.innerHTML =`<div class="error"> please enter a valid search term</div>`

//     }
   
// }

// const renderResults = (list) => {
//  const cardsList = list.map((item) => {
//     console.log(item);
//  }) 

// }