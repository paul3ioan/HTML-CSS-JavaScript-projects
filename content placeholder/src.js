const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
console.log(name)
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2500)
function getData(){
    header.innerHTML = '<img src ="https://source.unsplash.com/random" alt=""/>'
    title.innerHTML = 'lorem2 asdasd';
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat explicabo eius eaque distinctio autem hic est quasi odit assumenda repudiandae?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt= ""/>'
    name.innerHTML ='John Doe'
    date.innerHTML = '13 Sept 2021'
    animated_bgs.forEach(bg =>{
        bg.classList.remove('animated-bg')
    })
    animated_bgs_text.forEach(bg =>bg.classList.remove('animated-bg-text'))
}