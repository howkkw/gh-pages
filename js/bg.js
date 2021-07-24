const bgImages=["1.png", "2.png", "3.png", "4.png", "5.png", "6.png" ]

const img=document.createElement("img")
document.body.appendChild(img)
img.src=`img/${bgImages[Math.floor(Math.random()*bgImages.length)]}`