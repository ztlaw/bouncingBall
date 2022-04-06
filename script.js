let ballCount = 1;

/* container variable with value of a querySelector in the container */
const container = document.querySelector('.container');


/* this function is used so when we click on the screen, the function e will happen
function e will create a div and img element of a basketball */
window.addEventListener('click', e => {

/* div and image creation */
const ball = document.createElement('div');
const image = document.createElement('img');

/* adding basketball image to the 'image' object using setAttribute method. adds src, image, and alt */
image.setAttribute('src', './basketball.png');
image.setAttribute('alt', 'basketball');

/* adding a class 'ball' to the ball object, adding an ID and a ballCount of 1 */
ball.classList.add('ball');
ball.id = 'ball' + ballCount;

// Append image as a child on the ball object -- what does this mean?
ball.appendChild(image);


// These variables get the position clicked on the window
const screenHeight = e.view.innerHeight;
const bottom = screenHeight - e.y - 50;

//Get starting position of a new ball on the ball object
ball.style.bottom = `${bottom}px`;
ball.style.left = `${e.x - 50}px`;

container.appendChild(ball);

const bounceUp = anime({
    autoplay: false,
    targets: '#ball' + ballCount,
    translateY: [bottom, 0],
    duration: 600,
    easing: 'easeOutQuad',
    complete: () => {
        bounceDown.restart();
    }
})
/* bouncing down function via anime.js.. diff from bounceUp is the 
translateY values */
const bounceDown = anime({
    autoplay: false,
    targets: '#ball' + ballCount,
    translateY: [0, bottom],
    duration: 500,
    easing: 'easeInQuad',
    complete: () => {
        bounceUp.restart();
    }
});

// starting animation on click
bounceDown.play();

//with each function run, a new ballCount is added
ballCount++

})

