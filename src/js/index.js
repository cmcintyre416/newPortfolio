import axios from 'axios';

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const base = 'http://food2fork.com/api/search'
    const key = 'a00bc35f5b41ddea861f1767df24aaa5';
    const res = await axios(`${proxy}${base}?key=${key}&q=${query}`);
    console.log(res);
}
getResults('pizza');

