//Crear unos tipos de datos y interfaces

type Message = string;
type Title = string;
type Id = string;

//Interface que tiene una propiedad id de TIPO Id y un message de TIPO Message
interface Tweet {
    id: Id,
    message: Message
}