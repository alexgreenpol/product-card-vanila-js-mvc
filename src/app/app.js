const { default: InitProductCard } = require('./components/productCard/productCard');

require('assets/less/main.less');

const dataObject = [{
  id: 'UA23421',
  image: 'https://akket.com/wp-content/uploads/2020/03/Apple-MacBook-Air-2020-0.jpg',
  title: 'Ноутбук Apple MacBook Air 1',
  quantity: 0,
  price: 5600
},
{
  id: 'UA23422',
  image: 'https://akket.com/wp-content/uploads/2020/03/Apple-MacBook-Air-2020-0.jpg',
  title: 'Ноутбук Apple MacBook Air 2',
  quantity: 0,
  price: 12600
},
{id: 'UA23423',
image: 'https://akket.com/wp-content/uploads/2020/03/Apple-MacBook-Air-2020-0.jpg',
title: 'Ноутбук Apple MacBook Air 3',
quantity: 0,
price: 22600}]

dataObject.forEach((item) => {
  new InitProductCard(item);
})
