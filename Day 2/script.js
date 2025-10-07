gsap.to("#box",{
    backgroundColor:"blue"
})

gsap.from("nav",{
    y:-100,
    duration:1,
    delay:0.5,
   
})

gsap.fromTo("#box",
    {x:100},
    {x:10,duration:2}
    
)