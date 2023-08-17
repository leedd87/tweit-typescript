"use strict";
//Crear unos tipos de datos y interfaces
function createMainTweet() {
    const id = crypto.randomUUID();
    const tweet = createTweet();
    return {
        id,
        tweets: [tweet]
    };
}
function createTweet() {
    const id = crypto.randomUUID();
    const message = '';
    return {
        id,
        message
    };
}
function renderView(tweetView) {
    let view = document.querySelector('#container-' + tweetView.id);
    if (view) {
        view.innerHTML = '';
    }
    else {
        view = document.createElement('div');
        view.id = 'container' + tweetView.id;
    }
}
