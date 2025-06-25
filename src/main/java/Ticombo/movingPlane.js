<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moving Plane Animation</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
        }
        canvas {
            display: block;
        }
    </style>
</head>
<body>
    <canvas id="canvas"></canvas>

    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const plane = {
            x: -100, // Start off the left side of the screen
            y: canvas.height / 2,
            width: 100,
            height: 50,
            speed: 5
        };

        function drawPlane() {
            ctx.fillStyle = 'gray';
            ctx.beginPath();
            ctx.moveTo(plane.x, plane.y);
            ctx.lineTo(plane.x + plane.width, plane.y - plane.height / 2);
            ctx.lineTo(plane.x + plane.width, plane.y + plane.height / 2);
            ctx.closePath();
            ctx.fill();
        }

        function update() {
            plane.x += plane.speed;

            // Reset plane position when it goes off the right side of the screen
            if (plane.x > canvas.width) {
                plane.x = -plane.width;
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPlane();
            update();
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    </script>
</body>
</html>