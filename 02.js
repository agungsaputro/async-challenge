const axios = require('axios')

async function getData() {
	try {
		const res1 = await axios.get('https://jsonplaceholder.typicode.com/posts')
		const res2 = await axios.get('https://jsonplaceholder.typicode.com/users')

		let data1 = res1.data 
		let data2 = res2.data
		data1.forEach((e) => {
			for (i = 1; i <= data2.length; i++) {
				if (e.userId == i) {
					e.user = Object.assign({}, data2[i - 1]);
				}
			}
		});

		console.log(data1)
	} catch (error) {
		console.error(error)
	}
}

console.log(getData)
