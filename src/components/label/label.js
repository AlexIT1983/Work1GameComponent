// Создадим наш компонет Label
// так как у нас отличается цвет и текст - их мы примем через пропсы в компонент
import styles from './label.module.css';

export const Label = ({ color, children }) => {
	return <label className={`${styles.label} ${styles[color]}`}>{children}:</label>;
};
