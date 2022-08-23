import _ from 'lodash';
import './style.css';

const tables = [
  {
    name: 'Name:',
    score: 100
  },
  {
    name: 'Name:',
    score: 20,
  },
  {
    name: 'Name:',
    score: 50,
  },
  {
    name: 'Name:',
    score: 78,
  },
  {
    name: 'Name:',
    score: 125,
  },
  {
    name: 'Name:',
    score: 77,
  },
]
document.querySelector('.table-body').innerHTML = tables.map((table) => (
  `<tr>
    <td>${table.name}</td>
    <td>${table.score}</td>
  </tr>
  `
)).join('');