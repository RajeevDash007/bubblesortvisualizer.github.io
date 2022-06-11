import { useState, useEffect } from 'react';
import './Bar.css';

const Bars = ({ index, length, colorKey, changeArray }) => {
	const [len, setLen] = useState(length);

    const colors = ['#f923fc', '#c4ab0a', '#83e85a'];

	console.log(length);
	useEffect(() => {
		setLen(length);
	}, [length]);

	let barStyle = {
		background: colors[colorKey],
		height: length,
		marginTop: 200 - length,
	};

	let textStyle = {
		width: length,
		top: Math.floor(length / 2) - 10,
		left: -Math.floor(length / 2) + 11,
	};

    let quantityBtnStyle = {
        top: length - 10
    }

	const handleChange = (e) => {
		let val = e.target.value;
		if (val === '') {
			setLen(0);
			changeArray(index, 0);
		} else {
			val = parseInt(val);
			if (val > 200) {
				setLen(200);
				changeArray(index, 200);
			} else {
				setLen(val);
				changeArray(index, val);
			}
		}
	};

    const increment = () => {
        setLen(len + 1);
        changeArray(index, len + 1);
    }

    const decrement = () => {
        setLen(len - 1);
        changeArray(index, len - 1);
    }

	return (
		<div className='bar' style={barStyle}>
			<input
				type='number'
				className='text'
				style={textStyle}
				value={len}
				onChange={handleChange}
			/>
			<div className='quatityNav'>
				<div className='quantity-btn quantity-up' style={quantityBtnStyle} onClick={increment}>
                    +
                </div>
				<div className='quantity-btn quantity-down' style={quantityBtnStyle} onClick={decrement}>
                    -
                </div>
			</div>
		</div>
	);
};

export default Bars;
