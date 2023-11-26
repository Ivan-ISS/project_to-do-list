//export {};

// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByClassName('hero__list-item');
let i: number;
for (i = 0; i < myNodelist.length; i++) {
    const span: HTMLElement = document.createElement('span');
    const txt: Text = document.createTextNode('\u00D7');
    span.className = 'hero__list-close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName('hero__list-close');
for (i = 0; i < closeButtons.length; i++) {
    let closeButton: Element = closeButtons[i];
    closeButton.addEventListener('click', () => {
        const li: HTMLElement | null = closeButton.parentElement;
        if (!!li) {
            li.style.display = 'none';
        }
    });
  }

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('.hero__list');
if (list) {
    list.addEventListener('click', function (ev) {
        let target: HTMLElement = <HTMLElement>ev.target;
        if (target) {
            if (target.tagName === 'LI') {
                target.classList.toggle('hero__list-item_checked');
            }
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
    const li: HTMLElement = document.createElement('li');
    li.className = 'hero__list-item';
    const input: HTMLInputElement = <HTMLInputElement>document.getElementById('j-input');
    if (!input) return;
    const inputValue: string = input.value;

    const textNode: Text = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        const ul: HTMLElement | null = document.getElementById('j-ul');
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = '';

    const span: HTMLElement = document.createElement('span');
    const txt: Text = document.createTextNode('\u00D7');
    span.className = 'hero__list-close';
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener('click', () => {
        const li: HTMLElement | null = span.parentElement;
        if (!!li) {
            li.style.display = 'none';
        }
    });
}

const addBtn: HTMLElement | null = document.getElementById('j-add-btn');
addBtn?.addEventListener('click', ()=> {
    newElement();
});