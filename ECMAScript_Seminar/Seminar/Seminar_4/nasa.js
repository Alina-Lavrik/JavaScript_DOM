
const token = 'vMf3KdZb5OpH3yYcRLjXRHHLFeZj70p3VquG4MOD';

const url = 'https://api.nasa.gov/planetary/apod?api_key=' + token + '&count=10';

const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error.message);
        
    }
}

async function Asy() {
    const result = await getData(url);
    console.log(result);

    const body = document.querySelector('body');

    result.forEach(element => {
        body.insertAdjacentHTML('beforeend', `<figure>
    <img src="${element.url}"/>
    <figcaption>${element.explanation}</figcaption>
    </figure>`)
    });
};
Asy();


// (async () => {
//   // ваш код
// })()






