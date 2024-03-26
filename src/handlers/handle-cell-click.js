// функция выбора ячейки для игры
import { STATUS, PLAYER } from '../constants';
import { checkWin, checkEmptyCell } from '../utils';

export const handleCellClick = (
	{ status, field, currentPlayer, setField, setStatus, setCurrentPlayer },
	cellIndex,
) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return; // проверяем условие доступности игры и наличие ячеек и ничью
	}
	const newField = [...field]; // подготовим новое поле через спред оператор

	newField[cellIndex] = currentPlayer;

	setField(newField);

	// проверяем условие для победы
	if (checkWin(newField, currentPlayer)) {
		setStatus(STATUS.WIN);
	} else if (checkEmptyCell(newField)) {
		setCurrentPlayer(
			currentPlayer === PLAYER.CROSSES ? PLAYER.NOUGHTS : PLAYER.CROSSES,
		);
	} // проверяем и сменяем игрока на другого
	else {
		setStatus(STATUS.DRAW); // устанавливаем ничью
	}
}; // задаем обработчик
