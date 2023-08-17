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
    }

}