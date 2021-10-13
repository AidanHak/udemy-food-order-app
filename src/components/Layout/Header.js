import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
	return <>
		<header className={styles.header}>
			<h1>React Meals</h1>
			<button>Cart</button>
		</header>
		<div>
			<img src={mealsImage} alt="A table full of delicious food!" />
		</div>
	</>;
}

export default Header;