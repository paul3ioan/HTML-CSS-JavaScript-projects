const panels = document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active');
    })  
})
function removeActiveClasses(){
    const activePanel = document.querySelector('.active');
    activePanel.classList.remove('active');
}