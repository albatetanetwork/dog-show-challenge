document.addEventListener('DOMContentLoaded', () => {

    window.onload = (event) => {
        fetch('http://localhost:3000/dogs') 
            .then(r => r.json())
            .then(data => console.log(data));
      };

})