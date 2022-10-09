import React, { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			fill='currentColor'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M6 5h4v14H6zm8 0h4v14h-4z' />
		</svg>
	);
}

export default SvgPause;
