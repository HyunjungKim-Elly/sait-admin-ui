import React, { SVGProps } from 'react';

const SvgSignalCellularNull = (props: SVGProps<SVGSVGElement>) => {
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
			<path d='M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z' />
		</svg>
	);
}

export default SvgSignalCellularNull;
