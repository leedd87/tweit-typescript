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
