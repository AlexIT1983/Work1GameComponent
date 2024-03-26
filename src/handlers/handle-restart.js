// функция рестарта игры
import { STATUS, PLAYER } from '../constants'; // импорт констант
import { createEmptyField } from '../utils'; // импорт функции создания поля пустого
// функция рестарта принимает сеттеры
export const handleRestart = ({ setStatus, setCurrentPlayer, setField }) => {
	setStatus(STATUS.TURN);
	setCurrentPlayer(PLAYER.CROSSES); // выбираем игрока Х
	setField(createEmptyField()); // чистое поле
};
