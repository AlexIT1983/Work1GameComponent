// Game крестики нолики (3. Композиция компонентов)

import { useState } from 'react';
import { STATUS } from './constants';
import { PLAYER } from './constants';
import { GameLayout } from './game-lyaout';
import { handleCellClick, handleRestart } from './handlers';
import { createEmptyField } from './utils';

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN); // статус игры
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSSES); // зададим состояние
	const [field, setField] = useState(createEmptyField()); // создадим начальное поле из массива пустых ячеек

	const state = {
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={(cellIndex) => handleCellClick(state, cellIndex)}
			handleRestart={() => handleRestart(state)}
		/>
	);
};
