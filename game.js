window.addEventListener("load", function () {
    var score = 0

    var status = this.document.getElementById('status')

    var start = document.getElementById("start")
    start.addEventListener("click", reset)

    var boundaries = document.querySelectorAll('.boundary');
    start.addEventListener("click", boundary)

    // var example_level = this.document.getElementsByClassName('example')
    // example_level[0].addEventListener('mouseover', level)

    var end = this.document.getElementById("end")
    end.addEventListener("mouseover", win)

    maze = this.document.getElementById("game")


    // Reset function for the start div
    function reset() {
        score = 0

        boundaries.forEach(boundary => {
            boundary.setAttribute('style', 'background-color: #eeeeee;');
            status.innerHTML = 'Begin by moving your mouse over the "S".'
        });
        var maze_box = document.getElementById('game');

        document.addEventListener('mouseover', function (event) {
            if (!maze_box.contains(event.target)) {
                lost()
            }
        });
    }
    // boundary function when the S is clicked
    function boundary() {
        boundaries.forEach(boundary => {
            boundary.addEventListener('mouseover', function handleClick(event) {
                console.log('box clicked', event);
                lost()
            });
        });
    }
    
    // function level() {
    //     const myInterval = setInterval(lost, 1000);
    //     clearInterval(myInterval);
    // }


    // Win function for the end div
    function win() {
        score += 5
        boundaries.forEach(boundary => {
            boundary.setAttribute('style', 'background-color: #eeeeee;');
        })
        status.innerHTML = "You Win! Score: " + score
    }
    // Lost function for the end div
    function lost() {
        // No negative scores
        if (score > 10) {
            score -= 10
        }

        boundaries.forEach(boundary => {
            boundary.setAttribute('style', 'background-color: #ff8888;');

        })
        status.innerHTML = "You Lost! Score: " + score
    }
})