function expandBox(boxNumber) {
    const boxes = document.querySelectorAll('.box');
    const bullets = document.querySelectorAll('.bullet');
    
    boxes.forEach((box, index) => {
        if (index + 1 === boxNumber) {
            box.classList.toggle('expanded');
            bullets[index].classList.toggle('filled');
        } else {
            box.classList.remove('expanded');
            bullets[index].classList.remove('filled');
        }
    });
}

