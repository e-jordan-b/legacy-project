import React from 'react';
import {Spin} from 'antd';

const LoadingComponent = () => (
	<div className='loading-container'>
		<Spin size='large' />
	</div>
);

export default LoadingComponent;
