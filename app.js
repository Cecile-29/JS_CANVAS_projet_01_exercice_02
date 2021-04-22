var car = document.getElementById('car').getContext('2d');
car.fillStyle = 'grey';
car.arc(70, 220, 20, 0, 2 * Math.PI);
car.fill();

car.fillStyle = 'grey';
car.arc(220, 220, 20, 0, 2 * Math.PI);
car.fill();

car.fillStyle = 'lightgreen';
car.beginPath();
car.moveTo(70, 200);
car.lineTo(50, 200);
car.lineTo(50, 170);
car.lineTo(70, 170);
car.lineTo(70, 130);
car.lineTo(220, 130);
car.lineTo(220, 170);
car.lineTo(240, 170);
car.lineTo(240, 200);
car.lineTo(70, 200);
car.fill();
car.stroke();
