const filter = document.querySelector('.js-filter')
const targets = document.querySelectorAll('.js-target')
if (filter) {
    debugger;
	filter.addEventListener('keyup', event => {
    	const value = event.target.value
        if (value.trim().length) {
            debugger;
        	const regex = new RegExp(`^(${value})$`, 'gi')
        	targets.forEach(target => {
	            const targetValue = target.textContent
                if (regex.test(targetValue)) {
                    debugger;
                	target.classList.add('is-hide')
                } else {
	                target.classList.remove('is-hide')
                }
            })
        } else {
        	targets.forEach(target => target.classList.remove('is-hide'))
        }
    })
}