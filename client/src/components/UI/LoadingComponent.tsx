import React from 'react';
import {Spin} from 'antd';

const LoadingComponent = () => (
	<div className='loading-container' data-testid='loading'>
		<Spin size='large' />
	</div>
);

export default LoadingComponent;
