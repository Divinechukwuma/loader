// removed display from tags
let headerElement = document.querySelector('#header')
headerElement.style.display = 'none'

let spinElement = document.querySelector('#spin')
spinElement.style.display = 'none'

let progressBarElement = document.querySelector('#progress-bar')
progressBarElement.style.display = 'none'

const progressBarBeforeElement = document.querySelector('.progress-bar::before');

// get input field tags
const color = document.querySelector('#color')
const loaderType = document.querySelector('#loader-type')
const duration = document.querySelector('#duration')
function updateProgress( progressValue){
    progress.style.setProperty('--progress-value',progressValue);
    if (progressValue >= 100){
        progressBarBeforeElement.style.display = 'none'
    }
}


document.querySelector('#select-loader').addEventListener("click",
    function (e) {
        e.preventDefault()

        let error = false
        if (color.value === 'select') {
            alert('Color is required')
            error = true
        }

        if (loaderType.value === 'select') {
            alert('Loader is required')
            error = true
        }

        if (duration.value === undefined) {
            alert('Duration is required')
            error = true
        }

        if (error === false) {
            switch (loaderType.value) {
                case 'header':
                    headerElement.style.display = 'block'
                    headerElement.style.backgroundColor = color.value
                    setTimeout(() => {
                        headerElement.style.display = 'none'
                    }, duration.value);
                    break;

                case 'spinner':
                    spinElement.style.display = 'block'
                    spinElement.style.color = color.value
                    setTimeout(() => {
                        spinElement.style.display = 'none'
                    }, duration.value);
                    break;

                case 'progress':
                    progressBarElement.style.display = 'block'
                    color.addEventListener('input' , function() {
                        const endingColor = colorPicker.value;
                        progressBar.style.setProperty('--ending-color', endingColor);
                      });
                      updateProgress(100);

                    break;
                    






            }




        }

    })


