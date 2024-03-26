// Наш компонент Information

import { PLAYER, PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
import PropTypes from 'prop-types';

export const Information = ({ status, currentPlayer }) => {
	const playerAction = PLAYER_ACTION[status]; // выбираем действие
	const playerName = PLAYER_NAME[currentPlayer]; // выбираем текущего игрока

	const information = // проверить на ничью
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};

// типизируем компонент

Information.propTypes = {
	status: PropTypes.oneOf([STATUS.WIN, STATUS.TURN, STATUS.DRAW]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSSES, PLAYER.NOUGHTS, PLAYER.NOBODY]),
};
