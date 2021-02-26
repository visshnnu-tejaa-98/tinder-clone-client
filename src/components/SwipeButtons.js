import '../stylesheets/SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {
	return (
		<div className='swipeButtons'>
			<IconButton className='swipeButtons__repeat style'>
				<ReplayIcon fontSize='large' />
			</IconButton>
			<IconButton className='swipeButtons__left style'>
				<CloseIcon fontSize='large' />
			</IconButton>
			<IconButton className='swipeButtons__star style'>
				<StarRateIcon fontSize='large' />
			</IconButton>
			<IconButton className='swipeButtons__right style'>
				<FavoriteIcon fontSize='large' />
			</IconButton>
			<IconButton className='swipeButtons__lightning style'>
				<FlashOnIcon fontSize='large' />
			</IconButton>
		</div>
	);
};

export default SwipeButtons;
