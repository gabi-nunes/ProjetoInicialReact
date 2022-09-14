import styles from './SideBar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';


export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1558544956-15f3c317e06a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
            <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/69698664?v=4" ></Avatar>
                <strong>Gabrielle Nunes</strong>
                <span>web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}></PencilLine>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}