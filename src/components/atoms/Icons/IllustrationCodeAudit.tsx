import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
	title?: string;
	titleId?: string;
}
export const IllustrationCodeAudit = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 900 600"
		width="1em"
		height="1em"
		focusable="false"
		aria-hidden="true"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="#FFCCBC"
			d="m685.886 560.935-1.392 18.56-28.301-9.279 11.597-13.919 18.096 4.638Zm103.004-6.031-1.394 18.094-15.775 2.321-9.28-8.816 10.672-17.168 15.777 5.569Z"
		/>
		<path
			fill="#263238"
			d="M800.489 323.844s12.528 14.847-3.248 37.582-34.798 45.006-34.798 45.006l-35.266 66.813s-18.096 65.42-22.271 67.276c-4.176 1.855-6.496-5.568-4.176 2.319 2.319 7.887.927 7.424-.928 7.89-1.856.466-6.959-.464-5.104 2.784 1.856 3.248 3.248 3.248-.464 3.248s-5.103-2.319-5.103.928-3.248 10.671-3.248 10.671-22.735-6.495-23.663-9.279c-.928-2.784 6.031-4.176 4.64-6.959-1.392-2.784-1.856-2.785-1.856-6.96 0-4.174 2.784-5.103 2.784-5.103s2.32-.928 1.392-2.784c-.928-1.857-4.64-.928 0-3.249 4.64-2.32 23.665-73.309 23.665-73.309s0-35.267 6.031-46.864c6.031-11.597 1.392-94.187 15.78-95.115 14.388-.927 85.833 5.105 85.833 5.105Z"
		/>
		<path
			fill="#263238"
			d="m795.849 350.29-2.784 71.916s13.919 69.597 9.28 90.939c-4.64 21.342-1.392 18.559-4.176 22.271-2.785 3.712-5.104 1.856-2.785 5.104 2.32 3.248 3.708 4.176 0 7.89-3.707 3.713-5.567 12.527-5.567 12.527l-23.663-2.319s6.032-10.671 3.707-12.992c-2.324-2.32-8.351 1.392-3.707-3.707 4.645-5.099 7.424-2.784 4.64-5.104-2.784-2.319-6.959-1.391-3.248-5.103 3.711-3.712 7.89-3.708 4.176-5.104-3.714-1.396-7.89 0-6.032-2.784a281.75 281.75 0 0 1 4.176-6.032l-5.567-42.221s-6.496-13.92-4.64-19.951c1.855-6.032-7.89-55.677-7.89-55.677l44.08-49.653Z"
		/>
		<path
			fill="#263238"
			d="M785.644 564.182s4.64-4.639 6.031-1.855c1.392 2.784 11.597 27.839 5.568 29.694-6.03 1.856-14.847 3.707-19.487 2.32-4.64-1.388-14.383-7.89-25.982-7.89s-21.343-5.104-21.343-6.959c0-1.856-1.855-12.992 6.96-12.992 8.814 0 25.054-10.207 25.054-10.207s3.707-7.424 5.568-6.96c1.86.465.463 15.311.463 15.311s10.67 10.21 17.168-.462Zm-103.005 6.032s4.176-10.207 8.352-7.89c4.176 2.318 1.391 31.084 1.391 31.084s-3.707 6.032-14.383 4.64c-10.676-1.392-38.973-4.64-45.47-3.248-6.496 1.391-24.126-6.496-19.487-17.168 0 0 2.32-6.031 13.456-5.567 11.136.464 31.551-12.992 31.551-12.992s3.248-9.279 4.175-8.352c.928.928 1.856 17.168 1.856 17.168s12.064 7.893 18.559 2.325Z"
		/>
		<path
			fill="#FFCCBC"
			d="M743.42 142.43c14.863 0 26.911-12.049 26.911-26.911 0-14.862-12.048-26.91-26.911-26.91-14.862 0-26.911 12.048-26.911 26.91s12.049 26.911 26.911 26.911Z"
		/>
		<path
			fill="#FFCCBC"
			d="M764.299 117.375s14.383 28.766 19.487 31.55c5.103 2.784-34.798 19.952-34.798 19.952s-6.496-28.303-14.383-34.334c-7.888-6.032 29.694-17.168 29.694-17.168Zm-41.293 235.234-1.856 17.632s-19.951-6.959-13.455-19.951l15.311 2.319Z"
		/>
		<path
			fill="#1976D2"
			d="M715.12 326.163c13.92 14.844 87.688 2.316 87.688 2.316l-.924-10.67 9.28-9.737-2.782-45.473s8.346-21.34 9.736-53.819a29.23 29.23 0 0 0-.359-5.968c-4.783-29.094-52.158-47.833-53.459-47.393-.655.216-7.629 3.85-14.906 7.674a5371.752 5371.752 0 0 0-17.105 9.03c-11.137 4.183-9.28 70.996-12.995 77.026-3.714 6.031 0 26.902 0 26.902l-4.173 19.95s-13.924 15.319-.001 30.162Z"
		/>
		<path
			fill="currentColor"
			d="M760.087 178.869s12.992 38.974 10.208 65.421c-2.784 26.447-32.942 102.075-32.942 102.075l-10.203 5.568v12.99l-7.18-19.447 19.744-41.281s-24.636-142.492 20.373-125.326Zm-12.184-11.694c13.461-7.422 33.878 12.073 55.219 32.945 7.664 7.493 12.097 6.739 14.639 2.692-4.783-29.095-52.158-47.834-53.46-47.393-.655.215-7.628 3.849-14.906 7.673l-1.492 4.083Z"
			opacity={0.1}
		/>
		<path
			fill="#1976D2"
			d="m747.91 163.589 5.567-15.311s38.046-18.095 63.101 0l4.175 25.982s3.708 43.15-17.631 22.271c-21.338-20.878-41.759-40.366-55.212-32.942Zm10.822 8.999s12.991 38.974 10.207 65.421c-2.784 26.447-32.942 102.075-32.942 102.075l-10.207 5.571v12.992l-21.343-6.032 4.64-15.311s-7.424-9.279-2.319-12.064c5.104-2.784 4.176-18.095 4.176-18.095s2.782-151.724 47.788-134.557Z"
		/>
		<path
			fill="#263238"
			d="M767.411 126.784c-.439-2.08-.38-4.317-1.377-6.195-1.495-2.814-4.931-3.992-8.107-4.27-4.054-.352-8.139.349-12.199.072-4.06-.278-8.396-1.825-10.417-5.357-.806-1.409-1.204-3.067-2.273-4.289-2.225-2.542-6.281-2.148-9.479-1.059-3.198 1.09-6.534 2.681-9.803 1.829-2.749-7.691.636-16.563 6.491-22.258 5.855-5.695 13.75-8.76 21.592-11.044 10.344-3.013 21.983-4.793 31.493.269 13.79 7.339 18.656 26.766 17.384 41.245-.481 5.474-1.267 11.671-5.692 15.366-6.485 5.417-15.655 4.952-17.613-4.309Z"
		/>
		<path fill="#78909C" d="M660.491.33H79.249v372.253h581.242V.33Z" />
		<path fill="#fff" d="M645.771 47.02h-548v303.54h548V47.02Z" />
		<path fill="#1976D2" d="M660.242 0H79v24.693h581.242V0Z" />
		<path
			fill="#fff"
			d="M97.351 17.202a4.577 4.577 0 1 0 0-9.155 4.577 4.577 0 0 0 0 9.155Zm17.372 0a4.577 4.577 0 1 0 0-9.154 4.577 4.577 0 0 0 0 9.154Zm17.372 0a4.578 4.578 0 1 0-.001-9.156 4.578 4.578 0 0 0 .001 9.156Z"
		/>
		<path
			fill="#1976D2"
			d="m193.645 89.564-36.249 35.796 36.249 35.795 8.155-8.156-27.409-27.413 27.639-27.64-8.385-8.382Zm29.7 0 36.248 35.796-36.248 35.795-8.156-8.156 27.412-27.412-27.641-27.64 8.385-8.383Z"
		/>
		<path
			fill="#78909C"
			d="M340.594 98.547c-2.965 0-5.368 1.706-5.368 3.808 0 2.103 2.403 3.809 5.368 3.809h253.057c2.965 0 5.368-1.706 5.368-3.809 0-2.102-2.403-3.808-5.368-3.808H340.594Zm250.541 208.632H165.429c-4.351 0-7.878-2.512-7.883-5.608v-75.136c.005-3.096 3.532-5.608 7.883-5.608h425.706c4.351 0 7.878 2.512 7.883 5.608v75.135c-.004 3.096-3.532 5.606-7.883 5.609Zm-425.706-84.111c-2.611 0-4.727 1.508-4.73 3.365v75.135c0 1.858 2.119 3.363 4.73 3.365h425.706c2.611 0 4.727-1.507 4.73-3.365v-75.133c0-1.857-2.119-3.363-4.73-3.365l-425.706-.002Z"
		/>
		<path
			fill="#78909C"
			d="M209.267 283.017c10.519 0 19.046-8.527 19.046-19.046s-8.527-19.046-19.046-19.046c-10.518 0-19.045 8.527-19.045 19.046s8.527 19.046 19.045 19.046Z"
		/>
		<path
			fill="#1976D2"
			d="M262.984 248.739a3.805 3.805 0 0 0-3.812 3.803 3.805 3.805 0 0 0 3.803 3.813h179.537a3.807 3.807 0 1 0 0-7.616H262.984Zm0 22.849a3.819 3.819 0 0 0-2.694 1.112 3.805 3.805 0 0 0-1.118 2.691 3.805 3.805 0 0 0 3.803 3.813h77.259a3.81 3.81 0 0 0 3.813-3.803 3.81 3.81 0 0 0-3.803-3.813h-77.26Z"
		/>
		<path
			fill="#78909C"
			d="M338.746 121.361a3.819 3.819 0 0 0-3.514 3.808 3.823 3.823 0 0 0 3.514 3.808h165.847a3.818 3.818 0 0 0 3.513-3.808 3.818 3.818 0 0 0-3.513-3.808H338.746Zm1.091 22.814c-2.547 0-4.611 1.706-4.611 3.808 0 2.103 2.064 3.808 4.611 3.808h217.397c2.547 0 4.611-1.705 4.611-3.808 0-2.102-2.064-3.808-4.611-3.808H339.837Z"
		/>
	</svg>
);