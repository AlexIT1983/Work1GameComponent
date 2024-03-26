// Наш компонет Field

// import { Label } from '../label/label';

import { FieldLayout } from './field-layout';
import { PLAYER } from '../../constants';
import PropTypes from 'prop-types';

// в нашем компоненте мы будем принимать пропсы(props)
export const Field = ({ field, handleCellClick }) => {
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSSES, PLAYER.NOUGHTS, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
};
