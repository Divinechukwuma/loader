// removed display from tags
let headerElement = document.querySelector('#header')
headerElement.style.display = 'none'

let spinElement = document.querySelector('#spin')
spinElement.style.display = 'none'

let progressBarElement = document.querySelector('#progress-bar')
progressBarElement.style.display = 'none'

const progressBar = document.querySelector('.progress-bar');


// get input field tags
const color = document.querySelector('#color')
const loaderType = document.querySelector('#loader-type')
const duration = document.querySelector('#duration')
const progressaValue = document.querySelectorAll(' --progress-value')
const conicGradientRule = `conic-gradient(black calc(var(--progress-value) * 1%), white 0)`;
const radialGradientRule = '(closest-side, rgb(100, 0, 0) 79%, transparent 80% 100%)';

function checkProgress() {
    const progressValue = parseFloat(getComputedStyle(progressBar).getPropertyValue('--progress-value'));
    
    if (progressValue === 100) {
        progressBarElement.style.display = 'none'
      // You can perform any actions you need here.
    } else {
      // If it's not 100%, continue checking
      setTimeout(checkProgress, 100); // Poll every 100 milliseconds
    }
  }
  
  
  color.addEventListener('input', function() {
    const selectedColor = color.value;
    const conicGradientRule = `conic-gradient(${selectedColor} calc(var(--progress-value) * 1%), blue 0)`;
    progressBarElement.style.background = conicGradientRule;
  });
  
  

  
  
  // Start checking the progress
  
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
                    checkProgress();
                    
                
                    
                
                    

                    break;







            }




        }

    })


