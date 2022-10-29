export function getImageData(key) {
	switch (key) {
		case 'usd-1-front':
			return { alt: 'usd-1-front', src: 'https://imgur.com/yon8YJ2.jpeg' }
		case 'usd-1-back':
			return { alt: 'usd-1-back', src: 'https://imgur.com/OVJIhcc.jpeg' }
		case 'awg-10-front':
			return { alt: 'awg-10-front', src: 'https://imgur.com/VNhuxIC.jpeg' }
		case 'awg-10-back':
			return { alt: 'awg-10-back', src: 'https://imgur.com/m2nZkWK.jpeg' }
		case 'awg-25-front':
			return { alt: 'awg-25-front', src: 'https://imgur.com/46Z8F8t.jpeg' }
		case 'awg-25-back':
			return { alt: 'awg-25-back', src: 'https://imgur.com/l9otirt.jpeg' }
		case 'awg-50-front':
			return { alt: 'awg-50-front', src: 'https://imgur.com/R5UOuCl.jpeg' }
		case 'awg-50-back':
			return { alt: 'awg-50-back', src: 'https://imgur.com/pVgUwIF.jpeg' }
		case 'awg-100-front':
			return { alt: 'awg-100-front', src: 'https://imgur.com/g7aVjCS.jpeg' }
		case 'awg-100-back':
			return { alt: 'awg-100-back', src: 'https://imgur.com/zHraW7N.jpeg' }
		case 'awg-200-front':
			return { alt: 'awg-200-front', src: 'https://imgur.com/R8Vrqa4.jpeg' }
		case 'awg-200-back':
			return { alt: 'awg-200-back', src: 'https://imgur.com/5cYpRxM.jpeg' }
		default:
			return null
	}
}