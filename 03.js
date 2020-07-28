const promise = new Promise((resolve) => {
	for (let i = 1; i <= 3; i++) {
		resolve(console.log(i))
        setTimeout(() => {
            
        }, 1000)
	}
});
async function changeOutput() {
	await promise
}
console.log('Done')
console.log(changeOutput)