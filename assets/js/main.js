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
//     .then(html => loadResult(html))
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

// ===== consuming JSON data =====

// fetch("people.json")
//   .then(response => response.json())
//   .then(json => showOnPage(json));

// Axios
axios('people.json').then((response) => showOnPage(response.data));

function showOnPage(json) {
  const table = document.createElement('table');
  for (let people of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = people.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = people.age;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = people.wage;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector('.jsonresult');
  result.appendChild(table);
}
