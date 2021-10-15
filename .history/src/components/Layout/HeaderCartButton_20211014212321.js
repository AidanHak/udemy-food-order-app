import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
	return <button>
		<span>
			<CartIcon />
		</span>
		<span>Your Cart</span>
		<span>0</span>
	</button>
}

export default HeaderCartButton;