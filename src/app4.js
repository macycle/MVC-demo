import $ from "jquery";
import "./app4.css";


const $circle = $('#app4 .circle')

$circle.on('mouseenter', ()=>{
  $circle.addClass('active')
}).on('mouseleave', ()=>{
  $circle.removeClass('active')    //在同一个元素里面加类
})