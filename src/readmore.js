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
