var skill = "<ul><li>Frontend Web Development</li><li>Python</li><li>C</li></ul>"
var exps = "<ul><li>Co-Founder at Web3Expo</li></ul>"
var edus = "<ul><li>B. Tech from KIIT</li><li>Senior Secondary Education from Chinmaya Vidyalaya</li><li>Secondary Education from Chinmaya Education</li></ul>"


document.querySelector('.skills').addEventListener('click', function(){
    document.querySelector('.topcontent').innerHTML = skill
    document.querySelector('.skills').style.color = 'rgb(43, 128, 213)';
    document.querySelector('.exp').style.color = '#ffffff'
    document.querySelector('.edu').style.color = '#ffffff'
})
document.querySelector('.exp').addEventListener('click', function(){
    document.querySelector('.topcontent').innerHTML = exps
    document.querySelector('.skills').style.color = '#ffffff'
    document.querySelector('.exp').style.color = 'rgb(43, 128, 213)'
    document.querySelector('.edu').style.color = '#ffffff'
})
document.querySelector('.edu').addEventListener('click', function(){
    document.querySelector('.topcontent').innerHTML = edus
    document.querySelector('.skills').style.color = '#ffffff'
    document.querySelector('.exp').style.color = '#ffffff'
    document.querySelector('.edu').style.color = 'rgb(43, 128, 213)'
})