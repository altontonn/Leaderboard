// import _ from 'lodash';
import './style.css';
import { addFields, getData } from './module/api.js';

const formButton = document.querySelector('.formBtn');
const name = document.querySelector('.input-text');
const score = document.querySelector('.input-number');
const tBody = document.querySelector('.table-body');
const refreshButton = document.querySelector('.refresh');

const clearField = () => {
  name.value = '';
  score.value = '';
};

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  addFields(name, score);
  clearField();
});

const addList = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const item = `<td>${data[i].user}</td><td>${data[i].score}</td>`;
    tBody.innerHTML += item;
  }
};

const insertItem = async () => {
  const getResults = await getData();
  addList(getResults);
};

refreshButton.addEventListener('click', () => {
  tBody.innerHTML = '';
  insertItem();
});

window.addEventListener('load', () => {
  tBody.innerHTML = '';
  insertItem();
});
