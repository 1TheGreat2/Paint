const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const circleWidthInput = document.getElementById('circleWidth');
const circleHeightInput = document.getElementById('circleHeight');
const circleColorInput = document.getElementById('circleColor');
const fillTypeSelect = document.getElementById('fillType');

canvas.addEventListener('click', function(event) {
    const circleWidth = parseInt(circleWidthInput.value);
    const circleHeight = parseInt(circleHeightInput.value);
    const circleColor = circleColorInput.value;
    const fillType = fillTypeSelect.value;
    const x = event.offsetX;
    const y = event.offsetY;

    ctx.beginPath();
    ctx.ellipse(x, y, circleWidth / 2, circleHeight / 2, 0, 0, 2 * Math.PI);
    
    if (fillType === 'filled') {
        ctx.fillStyle = circleColor;
        ctx.fill();
    } else {
        ctx.strokeStyle = circleColor;
        ctx.stroke();
    }
    
    ctx.closePath();
});
