let tl = gsap.timeline();

tl.from("nav", {
    y: -100,
    duration: 1,
    opacity: 0,
})

tl.from(".main-box", {
    y: -100,
    duration: 0.7,
    opacity: 0,
})

tl.from(".heading", {
    y: -100,
    duration: 0.7,
    opacity: 0,
})

tl.from(".para", {
    y: -100,
    duration: 0.7,
    opacity: 0,
})

tl.from(".img1", {
    top: "100%",
    left: "0%",
    duration: 0.7,
    opacity: 0,
},"part1")

tl.from(".img2", {
    top: "100%",
    left: "0%",
    duration: 0.7,
    opacity: 0,
},"part1")

tl.from(".img3", {
    top: "100%",
    right: "0%",
    duration: 0.7,
    opacity: 0,
},"part1")

tl.from(".img4", {
    top: "100%",
    right: "0%",
    duration: 0.7,
    opacity: 0,
},"part2")

tl.from(".img5", {
    top: "100%",
    right: "0%",
    duration: 0.7,
    opacity: 0,
},"part2")

tl.from(".img6", {
    top: "100%",
    left: "0%",
    duration: 0.7,
    opacity: 0,
},"part2")

tl.from(".img7", {
    top: "100%",
    left: "0%",
    duration: 0.7,
    opacity: 0,
},"part1")

tl.from(".img8", {
    top: "100%",
    right: "0%",
    duration: 0.7,
    opacity: 0,
},"part2")