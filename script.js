const world = document.getElementById("world");

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

let cameraX = 0;
let cameraY = 0;


/* MOUSE */

window.addEventListener("mousemove", (event) => {

    mouseX = event.clientX / window.innerWidth;
    mouseY = event.clientY / window.innerHeight;

    targetX = (mouseX - 0.5) * 2;
    targetY = (mouseY - 0.5) * 2;

});


/* CAMERA */

function animateWorld() {

    cameraX += (targetX - cameraX) * 0.025;
    cameraY += (targetY - cameraY) * 0.025;

    const trees = document.querySelectorAll(".tree");

    trees.forEach((tree, index) => {

        const depth = index === 0 ? 10 : 6;

        tree.style.marginLeft =
            `${cameraX * depth}px`;

        tree.style.marginTop =
            `${cameraY * depth}px`;

    });


    const houses = document.querySelectorAll(".house");

    houses.forEach((house, index) => {

        const depth = index === 0 ? 4 : 3;

        house.style.marginLeft =
            `${cameraX * depth}px`;

        house.style.marginTop =
            `${cameraY * depth}px`;

    });


    const sun = document.querySelector(".sun");

    if (sun) {

        sun.style.marginLeft =
            `${cameraX * 5}px`;

        sun.style.marginTop =
            `${cameraY * 5}px`;

    }


    requestAnimationFrame(animateWorld);

}

animateWorld();


/* COW */

const cow = document.querySelector(".cow");

if (cow) {

    window.addEventListener("mousemove", () => {

        const direction =
            mouseX > 0.5 ? 1 : -1;

        cow.style.filter =
            `drop-shadow(${direction * 4}px 2px 4px rgba(0,0,0,.15))`;

    });

}


/* PEACOCK */

const peacock =
    document.querySelector(".peacock");

if (peacock) {

    peacock.addEventListener("mouseenter", () => {

        peacock.style.transform =
            "scale(1.12)";

    });

    peacock.addEventListener("mouseleave", () => {

        peacock.style.transform =
            "scale(1)";

    });

}


/* FLOWERS */

const flowers =
    document.querySelector(".flowers");

if (flowers) {

    flowers.addEventListener("mouseenter", () => {

        flowers.style.transform =
            "scale(1.2)";

    });

    flowers.addEventListener("mouseleave", () => {

        flowers.style.transform =
            "scale(1)";

    });

}


/* CLICK RIPPLE */

world.addEventListener("click", (event) => {

    const ripple =
        document.createElement("div");

    ripple.style.position = "absolute";

    ripple.style.left =
        `${event.clientX}px`;

    ripple.style.top =
        `${event.clientY}px`;

    ripple.style.width = "20px";
    ripple.style.height = "20px";

    ripple.style.border =
        "2px solid rgba(255,255,255,.8)";

    ripple.style.borderRadius =
        "50%";

    ripple.style.transform =
        "translate(-50%,-50%)";

    ripple.style.pointerEvents =
        "none";

    ripple.style.zIndex =
        "999";

    document.body.appendChild(ripple);


    ripple.animate(

        [
            {
                width: "10px",
                height: "10px",
                opacity: 1
            },

            {
                width: "180px",
                height: "180px",
                opacity: 0
            }
        ],

        {
            duration: 1000,
            easing: "ease-out"
        }

    );


    setTimeout(() => {

        ripple.remove();

    }, 1000);

});


/* TOUCH */

window.addEventListener("touchmove", (event) => {

    if (!event.touches.length) return;

    const touch =
        event.touches[0];

    mouseX =
        touch.clientX / window.innerWidth;

    mouseY =
        touch.clientY / window.innerHeight;

    targetX =
        (mouseX - 0.5) * 2;

    targetY =
        (mouseY - 0.5) * 2;

});


/* CONSOLE */

console.log(
    "🌸 Voice of Vrindavan"
);

console.log(
    "🦚 The world is alive."
);
