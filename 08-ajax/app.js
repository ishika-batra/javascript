const btn = document.querySelector('.btn');
const url = './api/people.json';
btn.addEventListener('click', () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      const jsonData = JSON.stringify(data);
      console.log(jsonData);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join('');

      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}
