const ACHIEVEMENTS = [
	{
		name: 'IBM Certified Associate Developer in Quantum Computation using Qiskit v0.2x',
		description:
			"I began studying quantum computing in my 3rd year of undergraduate studies, and I've been using the Qiskit library ever since. It allows me to experiment and learn about the mysterious world of quantum computing. The fact that I was given a certificate voucher by IBM to take this exam is a great opportunity. I've learned a lot more about Qiskit, and thanks to my determination, I was able to demonstrate my understanding on this test and pass. This will be the first step in my quantum computing journey, and I can't wait to get started on the next one!",
		images: [
			{ src: 'qiskit-badge.webp', type: 'image/webp' },
			{ src: 'qiskit-badge.png', type: 'image/png' }
		],
		imageAlt:
			'IBM Certified Associate Developer in Quantum Computation using Qiskit version 0.2x Badge',
		date: new Date(2021, 10, 4),
		links: [
			{
				name: 'View on Credly',
				url: 'https://www.credly.com/badges/a27f9afe-1728-4784-abc8-4a97ee3b794b/public_url'
			}
		]
	},
	{
		name: 'Outstanding Award in 18th Young Webmaster Camp',
		description:
			'I have participated in the 18th Young Webmaster Camp as a web programmer. Working as part of a team with people from different fields has taught me a lot of valuable lessons. I\'ve learned to truly understand the problem at its core and collaborate with people from various backgrounds, skill sets, and problems. My team has gotten along smoothly, and we\'ve been fighting since the day we first met. In the end, we won the "Outstanding Award," the "Best Teamwork Award," and the "Best Web Programming Award." This is going to be a memorable moment for me.',
		images: [
			{ src: 'ywc18.webp', type: 'image/webp' },
			{ src: 'ywc18.jpg', type: 'image/jpeg' }
		],
		imageAlt: 'Certificate for winning an "Outstanding Award" in 18th Young Webmaster Camp',
		date: new Date(2021, 7, 15),
		links: [
			{
				name: 'Visit event Facebook page',
				url: 'https://www.facebook.com/ywcth/'
			}
		]
	}
];

export { ACHIEVEMENTS };
