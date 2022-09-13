import styles from './SideBar.module.css'


export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://media.istockphoto.com/photos/choice-concept-with-doors-picture-id1347249753?s=612x612"></img>
            <div className={styles.profile}>
                <strong>Gabrielle Nunes</strong>
                <span>web developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}