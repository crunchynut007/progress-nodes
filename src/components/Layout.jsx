import './Layout.css';

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

function addActive() {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(currentActive)
    update()
}

function removeActive() {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    console.log(currentActive)
    update()
}

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%'
}

function Layout() {

    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress" id="progress"></div>
                <div className="circle active">
                    <label>1</label>
                </div>
                <div className="circle">
                    <label>2</label>
                </div>
                <div className="circle">
                    <label>3</label>
                </div>
                <div className="circle ">
                    <label>4</label>
                </div>
            </div>

            <button className="btn" id='prev' onClick={removeActive}>Prev</button>
            <button className="btn" id="next" onClick={addActive}>Next</button>
        </div>
    );
}

export default Layout