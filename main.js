const presionarBtn = document.querySelector('.presionar_btn')
            const presionarBtnIcon = document.querySelector('.presionar_btn i')
            const menuDesplegable = document.querySelector('.menu_desplegable')

            presionarBtn.onclick = function () {
                menuDesplegable.classList.toggle('abrir')
                const abierto = menuDesplegable.classList.contains('abrir')

                presionarBtnIcon.classList = abierto
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
                
            }