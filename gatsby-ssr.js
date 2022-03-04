/**
 * SSR code by Divyanshu Maithani
 * https://divyanshu013.dev/blog/gatsby-dark-mode/
 */
import { createElement } from "react"
import Cookies from 'universal-cookie';

const applyDarkModeClass = `
(function() {
  try {
    let mode = cookies.get('theme');
    if (mode === 'dark') {
			document.body.classList.add('dark');
		}
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
	const script = createElement('script', {
		dangerouslySetInnerHTML: {
			__html: applyDarkModeClass,
		},
	});
	setPreBodyComponents([script]);
};