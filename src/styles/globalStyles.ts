import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
		font-family: 'Basier Circle', sans-serif;
	}
	body {
		margin: 0;
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
	}

	h1, h2, h3, h4, h5, h6 {
		color: ${({ theme }) => theme.headline};
	}


	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-regular-webfont.eot');
    src: url('/fonts/basiercircle-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-regular-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-regular-webfont.woff') format('woff'),
         url('/fonts/basiercircle-regular-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
	}
	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-regularitalic-webfont.eot');
    src: url('/fonts/basiercircle-regularitalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-regularitalic-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-regularitalic-webfont.woff') format('woff'),
         url('/fonts/basiercircle-regularitalic-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
	}
	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-bold-webfont.eot');
    src: url('/fonts/basiercircle-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-bold-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-bold-webfont.woff') format('woff'),
         url('/fonts/basiercircle-bold-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
	}
	@font-face {
    font-family: 'Basier Circle';
    src: url('/fonts/basiercircle-bolditalic-webfont.eot');
    src: url('/fonts/basiercircle-bolditalic-webfont.eot?#iefix') format('embedded-opentype'),
         url('/fonts/basiercircle-bolditalic-webfont.woff2') format('woff2'),
         url('/fonts/basiercircle-bolditalic-webfont.woff') format('woff'),
         url('/fonts/basiercircle-bolditalic-webfont.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
	}

	main {
		display: block;
	}
	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}
	pre {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	a {
		background-color: transparent;
	}
	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}
	b,
	strong {
		font-weight: bolder;
	}
	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	small {
		font-size: 80%;
	}
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	sub {
		bottom: -0.25em;
	}
	sup {
		top: -0.5em;
	}
	img {
		border-style: none;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}
	button,
	input {
		overflow: visible;
	}
	button,
	select {
		text-transform: none;
	}
	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		-webkit-appearance: button;
	}
	button::-moz-focus-inner,
	[type='button']::-moz-focus-inner,
	[type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	button:-moz-focusring,
	[type='button']:-moz-focusring,
	[type='reset']:-moz-focusring,
	[type='submit']:-moz-focusring {
		outline: 1px dotted ButtonText;
	}
	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}
	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normal;
	}
	progress {
		vertical-align: baseline;
	}
	textarea {
		overflow: auto;
	}
	[type='checkbox'],
	[type='radio'] {
		box-sizing: border-box;
		padding: 0;
	}
	[type='number']::-webkit-inner-spin-button,
	[type='number']::-webkit-outer-spin-button {
		height: auto;
	}
	[type='search'] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}
	[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	details {
		display: block;
	}
	summary {
		display: list-item;
	}
	template {
		display: none;
	}
	[hidden] {
		display: none;
	}
`;
