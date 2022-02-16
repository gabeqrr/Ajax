// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

// Fetch API provides a more powerful and flexible feature set compared to XHR
//
//   fetch(href)
//     .then(response => {
//       if(response.status !== 200) throw new Error('Erro!!!');
//       return response.text();
//     })
//     .then(html => carregaResultado(html))
//     .catch(e => console.log(e))
//    }

document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    loadPage(el);
  }
});


// Async/await with Fetch
async function loadPage(el) {
  try {
    const href = el.getAttribute('href');

    const response = await fetch(href);
    if (response.status !== 200) throw new Error('Error!!!');

    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.log(e);
  }
}

function loadResult(response) {
  const result = document.querySelector('.result');
  result.innerHTML = response;
}

