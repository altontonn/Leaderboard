// import _ from 'lodash';
import './style.css';
import tables from './table.js';

document.querySelector('.table-body').innerHTML = tables.map((table) => (
  `<tr>
    <td>${table.name}</td>
    <td>${table.score}</td>
  </tr>
  `
)).join('');