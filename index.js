function createUl() {
    const ul = document.createElement('ul');

    return ul;
}

function createLi(roster) {
    const ul = document.createElement('li');
    ul.innerText = roster;
    
    return ul;
}

function generateList(list) {
    const make = createUl();
    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
        const html = generateList(list[i]);
        make.appendChild(html);
        } else {
        const li = createLi(list[i]);
        make.appendChild(li);
        }
    } return make;
}

document.body.appendChild(generateList([1, 2, 3]));
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]));