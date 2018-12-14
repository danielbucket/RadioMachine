// const container = {
// 	"padding": "2px",
// 	"margin": "auto",
// 	"height": "50px",
// 	"width": "150px",
// 	"display": "grid",
// 	"gridTemplateColumns": "100px 50px",
// 	"placeSelf": "center",
// };










const darkMode = {
	"backgroundColor": "#282c33",
	"border": "1px solid black",
};

const lightMode = {
	"backgroundColor": "#61dafb",
	"border": "2px solid #3f51b5",
};

export const colorMode = (props) => {
	const time = new Date().getHours()
	let colorMode = 'lightMode';
	if (time > 17) { colorMode = 'darkMode' };

	return colorMode;
};



