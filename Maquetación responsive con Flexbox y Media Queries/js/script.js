document.addEventListener('DOMContentLoaded', () => {
    
    
    const likeButtons = document.querySelectorAll('.btn-like');
    const galleryContainer = document.querySelector('.gallery-container');

    likeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
  
            e.preventDefault();
            
            const isLiked = this.classList.contains('liked');
            
            if (!isLiked) {
                this.textContent = '❤';
                this.classList.add('liked');
                this.style.color = 'red';
                

                const card = this.closest('.card');
                
                galleryContainer.prepend(card);
                
                card.animate([
                    { transform: 'scale(0.9)', opacity: 0.5 },
                    { transform: 'scale(1)', opacity: 1 }
                ], {
                    duration: 300,
                    easing: 'ease-out'
                });

            } else {
                this.textContent = '♡'; 
                this.classList.remove('liked');
                this.style.color = '#333';
            }
        });
    });

    const actionButtons = document.querySelectorAll('.btn-action');

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.textContent = "¡Anotado!";
            this.classList.add('visited-style');
            
            const card = this.closest('.card');
            card.style.backgroundColor = '#e8f5e9';
            card.style.borderColor = '#4CAF50';
        });
    });
});