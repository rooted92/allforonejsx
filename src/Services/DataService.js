// TODO - Add validation in asking, questions, work on accepting large numbers in odd or even, return error if user does not input numbers for GreaterLessThan, Add validation if user inputs numbers or leaves fields blank, maybe a required?... for kicks simplify the reverse of numbers and words in endpoint side, add onKeyDown features to all inputs in this program.. There is a bug when using student directory search fields, they all work until you go back to an input field and click submit again, it returns N/A for some reason, figure out why. Fix your dropdown list so when you click on a student name it returns students data

async function SayHello(name) {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/MiniChallenges/Hello/${name}`);
    const data = await response.text();

    console.log('Say Hello was called!');
    console.log(data);
    return data;
}

async function AddTwoNumbers(numberOne, numberTwo) {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/MiniChallenges/add/${numberOne}/${numberTwo}`);
    const data = await response.text();
    return data;
}

const AskingQuestions = async (name, time) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/MiniChallenges/asking/${name}/${time}`);
    const data = await response.text();

    return data;
}

const OddOrEven = async (number) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/oddoreven/${number}`);
    const data = await response.text();
    return data;
}

const GreaterThanOrLessThan = async (numberOne, numberTwo) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/than/${numberOne}/${numberTwo}`);
    const data = await response.text();
    return data;
}

const Madlib = async (a, b, c, d, e, f, g, h, i, j, k, l) => {
    let savedWords = [a, b, c, d, e, f, g, h, i, j, k, l];
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/madlib/${savedWords.join('/')}`);
    const data = await response.text();
    return data;
}

const ReverseInput = async (input) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/reverse/${input}`);
    const data = await response.text();
    return data;
}

const GetStudentFirstName = async (input) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/fetchfirstname/${input}`);
    const data = await response.json();
    console.log(data);
    return data;
}

const GetStudentLastName = async (input) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/fetchlastname/${input}`);
    const data = await response.json();
    console.log(data);
    return data;
}

const GetStudentSlackName = async (input) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/fetchslackname/${input}`);
    const data = await response.json();
    return data;
}

const GetStudentEmail = async (input) => {
    const response = await fetch(`https://pedrosallforone.azurewebsites.net/minichallenges/fetchemail/${input}`);
    const data = await response.json();
    return data;
}

const GetLatinRestaurantData = async () => {
    const response = await fetch('https://pedrosallforone.azurewebsites.net/minichallenges/respicker/latin');
    const data = await response.text();
    console.log(data);
    return data;
}

const GetEuropeanRestaurantData = async () => {
    const response = await fetch('https://pedrosallforone.azurewebsites.net/minichallenges/respicker/european');
    const data = await response.text();
    console.log(data);
    return data;
}

const GetAsianRestaurantData = async () => {
    const response = await fetch('https://pedrosallforone.azurewebsites.net/minichallenges/respicker/asian');
    const data = await response.text();
    console.log(data);
    return data;
}

const GetAmericanRestaurantData = async () => {
    const response = await fetch('https://pedrosallforone.azurewebsites.net/minichallenges/respicker/american');
    const data = await response.text();
    console.log(data);
    return data;
}

export { SayHello, AddTwoNumbers, AskingQuestions, OddOrEven, GreaterThanOrLessThan, Madlib, ReverseInput, GetStudentFirstName, GetStudentLastName, GetStudentSlackName, GetStudentEmail, GetAmericanRestaurantData, GetAsianRestaurantData, GetLatinRestaurantData, GetEuropeanRestaurantData };