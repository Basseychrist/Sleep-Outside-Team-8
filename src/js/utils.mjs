// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// helper to get parameter strings
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// function to take a list of objects and a template and insert the objects as HTML into the DOM

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
) {
  const htmlStrings = list.map(template);
  
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

 async function loadTemplate(path){
  const content = await fetch(path);

  if (content.ok){
    const data = await content.text();
    return data;
  }
}

 export async function loadHeaderFooter(){
  const header = await loadTemplate("./partials/header.html");
  const footer = await loadTemplate("./partials/footer.html");

  const header_id = document.querySelector("#main-header");
  const footer_id = document.querySelector("#main-footer");

  renderWithTemplate(header, header_id)
  renderWithTemplate(footer, footer_id)
 }