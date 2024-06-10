<!DOCTYPE html!>
<html lang="pt-BR">
    <head>
        <title>Curva Quadratica</title>

        <script>
            function draw(){
                var canvas = document.getElementById('meuCanvas');
                if (canvas.getContext){
                    var cntxt = canvas.getContext('2d');
                    cntxt.beginPath();
                    cntxt.fillStyle = "rgb(0, 255, 0)";
                    cntxt.moveTo(200, 100);
                    cntxt.quadraticCurveTo(150, 150, 200, 200);
                    cntxt.fill();
                    cntxt.stroke();
                    cntxt.beginPath();
                    cntxt.moveTo(200, 100);
                    cntxt.quadraticCurveTo(250, 150, 200, 200);
                    cntxt.fill();
                    cntxt.stroke();
                    cntxt();
                }
            }
</html>