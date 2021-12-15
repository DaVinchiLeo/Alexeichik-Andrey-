/*#12 DZ
https://random-data-api.com/documentation
(нужно зайти на сайт и выбрать апи)
выбрать любое API в Available Resources и отрисовать в html данные*/

let url="https://random-data-api.com/api/hipster/random_hipster_stuff";
const promise_test = fetch(url);
promise_test
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let id= document.getElementById('id')
    id.value = data.id;
    let uid= document.getElementById('uid')
    uid.value = data.uid;
    let paragraph= document.getElementById('paragraph')
    paragraph.value = data.paragraph;
    let paragraphs= document.getElementById('paragraphs')
    paragraphs.value = data.paragraphs;
    let sentence= document.getElementById('sentence')
    sentence.value = data.sentence;
    let sentences= document.getElementById('sentences')
    sentences.value = data.sentences;
    let word= document.getElementById('word')
    word.value = data.word;
    let words= document.getElementById('words')
    words.value = data.words;

  });