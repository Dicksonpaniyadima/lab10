let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'https://dicksonpaniyadima.github.io/json/products.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function () {
    let json = request.response;
    AddHeader(json);
    AddProducts(json);
}
function createNotification() {

    // Create and show the notification
    const notification = new Notification('New message from Weird Deals!',{ body: 'HEY! Check out our weird Deals!..'});

}

if (Notification.permission === 'granted') {
    createNotification();
} else if (Notification.permission !== 'denied') {
    let permission = Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            createNotification();
        }
    });
}

function AddHeader(jsonObj) {
    let H1 = document.createElement('h1');
    H1.textContent = jsonObj['companyName'];
    header.appendChild(H1);
    let para = document.createElement('p');
    para.textContent = jsonObj['headOffice'];
    header.appendChild(para)
}

function AddProducts(jsonObj) {
    let products = jsonObj['topDeals'];
    for (let i = 0; i < products.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let li = document.createElement('li');

        img.setAttribute('src', 'images/' + products[i].image);
        img.setAttribute('alt', products[i].name);
        h2.textContent = products[i].name;
        p1.textContent = 'price: ' + products[i].price;
        p2.textContent = products[i].description;

        let features = products[i].features;
        for (let m = 0; m < features.length; m++) {
            let listItem = document.createElement('li');
            listItem.textContent = products[i].features[m];
            li.append(listItem);
        }

        article.append(img);
        article.append(h2);
        article.append(p1);
        article.append(p2);
        article.append(li);
        section.append(article);

    }

}