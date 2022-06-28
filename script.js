
const openbar = () =>{
    document.querySelector('.cover').className='cover active';
}

document.getElementById('btn').onclick = e =>{
    e.preventDefault()
    openbar();
}

document.getElementById('close').onclick = e =>{
    e.preventDefault()
    closebar();
}
const closebar = () =>{
    document.querySelector('.cover').className='cover ';
}

document.querySelector('.link').onclick=()=>{
    closebar();
}

document.querySelector('.link2').onclick=()=>{
    closebar();
}
document.querySelector('.link3').onclick=()=>{
    closebar();
}
document.querySelector('.link4').onclick=()=>{
    closebar();
}
document.querySelector('.link5').onclick=()=>{
    closebar();
}