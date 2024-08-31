import React from 'react'
import { useDispatch } from 'react-redux';
// import { startLogout } from '../../store/auth';

const Navbar = () => {

	const dispatch = useDispatch();

    const onLogout = () => {
        // dispatch( startLogout() );
    }
    return (
		<div>
			<div className='logo'>
				<h1 className='lg:text-3xl'>CR📚💖</h1>
				<nav>
					<ul className='flex ml-5'>
						<li>
							<a href='/' className='mr-5 focus:text-black'>
								Home
							</a>
						</li>
						<li>
							<a href='/quotes'  className='focus:text-black'>Quotes📔</a>
						</li>
					</ul>
				</nav>
				<button className='bg-red-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-red-600'
				
				onClick={ onLogout }>
                Logout
            </button>
			</div>
		</div>
	);
}

export default Navbar
