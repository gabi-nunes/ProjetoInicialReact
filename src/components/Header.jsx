import styles from './Header.module.css'
import igniteLogo from '../Assets/Ignite-logo.svg'

export function Header(){
    return (
        <header  className={styles.header}>
        <img src={igniteLogo} alt="logo"></img>
        </header>
    );
}