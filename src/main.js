import './index.html';
import './main.css';
import sum from './sum';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';








console.log('hello world');

var a = () => {
    console.log('hello from es6');
}

console.log(sum(1, 3));

$(() => {
    console.log('jqueryready');
    $('#root').append('<h2>whats up?</h2>');
    $('#root').append('<button type="button" class="btn btn-primary">Primary</button>');
});