//Crear unos tipos de datos y interfaces

type Message = string;
type Title = string;
type Id = string;

//Interface que tiene una propiedad id de TIPO Id y un message de TIPO Message
interface Tweet {
    id: Id,
    message: Message
}

interface TweetView {
    id: Id,
    tweets: Tweet[];
}

function createMainTweet(): TweetView {
    const id = crypto.randomUUID();
    const tweet = createTweet()

    return {
        id,
        tweets: [tweet]
    }
}

function createTweet(): Tweet {
    const id = crypto.randomUUID();
    const message = '';

    return {
        id,
        message
    }
}

function renderView(tweetView: TweetView) {
    let view = document.querySelector('#container-' + tweetView.id)

    if (view) {
        view.innerHTML = ''
    } else {
        view = document.createElement('div');
        view.id = 'container' + tweetView.id;
        view.classList.add('mainContainer');
        document.querySelector('#tweets')?.append(view);
    }

    for (const tweet of tweetView.tweets) {
        //renderTweet
    }



}

function renderTweet(tweetView: TweetView, view: HTMLDivElement, tweet: Tweet) {
    const tweetContainer = document.createElement('div');
    tweetContainer.id = 'container-' + tweet.id;
    tweetContainer.classList.add('tweetContainer');

    const form = document.createElement('form');
    form.id = 'form-' + tweet.id;
    tweetContainer.appendChild(form)

    const textarea = document.createElement('textarea');
    textarea.id = 'textarea' + tweet.id;
    textarea.value = tweet.message;
    textarea.maxLength = 250;

    const buttonAddMore = document.createElement('button');
    buttonAddMore.classList.add('button', 'buttonNew');
    buttonAddMore.value = 'Add another tweets';
    buttonAddMore.append(document.createTextNode('Add another tweet'))

    const countContainer = document.createElement('div');
    countContainer.classList.add('countContainer');

    form.append(textarea, countContainer)
}