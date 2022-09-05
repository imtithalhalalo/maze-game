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


   
})