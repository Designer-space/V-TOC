import React from "react";

const FooterSection = () => {
	return (
		<div className='max-w-[1440px] mx-auto px-4 sm:flex sm:justify-between sm:items-center py-8 text-center '>
			<p>© 2023 V-TOC. All rights reserved.</p>
			<div className='flex gap-8 justify-center items-center mt-8 sm:mt-0'>
				<span className=''>logo1</span>
				<span className=''>logo2</span>
			</div>
		</div>
	);
};

export default FooterSection;
