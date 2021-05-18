import './sass/main.scss';

      // readMore
      function readMoreFunction() {
        var less = document.getElementById('less');
        var moreText = document.getElementById('more');
        var btnText = document.getElementById('readMoreButton');
        if (less.style.display === 'none') {
          less.style.display = 'inline';
          btnText.innerHTML = 'Read more';
          moreText.style.display = 'none';
        } else {
          less.style.display = 'none';
          btnText.innerHTML = 'Read less';
          moreText.style.display = 'block';
        }
      }

      // readMore
      function readMoreFunctionProgram() {
        var lessProgram = document.getElementById('lessProgram');
        var moreProgram = document.getElementById('moreProgram');
        var readMoreProgram = document.getElementById('readMoreProgram');
        if (lessProgram.style.display === 'none') {
          lessProgram.style.display = 'inline';
          readMoreProgram.innerHTML = 'Read more';
          moreProgram.style.display = 'none';
        } else {
          lessProgram.style.display = 'none';
          readMoreProgram.innerHTML = 'Read less';
          moreProgram.style.display = 'block';
        }
      }