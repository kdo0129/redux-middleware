import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
	const number = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const onIncrease = () => {
		dispatch(increase());
	};

	const onDecrease = () => {
		dispatch(decrease());
	};
	return (
		<>
			<Counter
				onIncrease={onIncrease}
				number={number}
				onDecrease={onDecrease}
			/>
		</>
	);
};

export default CounterContainer;
