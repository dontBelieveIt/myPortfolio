import './SkillBar.scss'; 

export function SkillBar({percentage, progress, category}) {
    
    function progressBarAndCountNumber () {
        const progress = document.querySelectorAll('.progress');
        let count = 0;
        // You must put the maximum number in the MAX variable.
        let MAX = 80;
    
        let run = setInterval(() => {
            count++;
            progress.forEach(element => {
                if (count <= element.dataset.progress) {
                    element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                    element.firstElementChild.textContent = `${count}%`;
                };
                if (count == MAX) {
                    clearInterval(run);
                };
            });
        }, 20);
    }
    
    progressBarAndCountNumber();
    
    return(
        <>
            <div class="parent-skill">
                <div class="skill">
                    <div class="progress" data-progress={percentage}>
                        <span class="progress-number">{progress}</span>
                    </div>
                </div>
                <span class="title">{category}</span>
            </div>
        </>
        
   )
}