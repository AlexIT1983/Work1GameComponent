// Шаблон

import PropTypes from 'prop-types';
import styles from './App.module.css';
import { Information } from './components';
import { Field } from './components';
import { STATUS, PLAYER } from './constants';

export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestart,
}) => {
	return (
		<div className={styles.game}>
			<Information status={status} currentPlayer={currentPlayer} />
			<Field field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать игру заново
			</button>
		</div>
	);
};

// Типизируем шаблок GameLayout

GameLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.WIN, STATUS.TURN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSSES, PLAYER.NOUGHTS, PLAYER.NOBODY]),
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSSES, PLAYER.NOUGHTS, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};
