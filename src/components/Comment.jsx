import { Butterfly, ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar'


export function Comment(){

    return(
        <div className={styles.comment}>
              <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/69698664?v=4" ></Avatar>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>
                            Gabrielle Nunes
                        </strong>
                        <time title="11 dem amio as 8:30h"
                    dateTime="2022-05-8 08:35:55">cerca de 1 hora atrás</time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20}></Trash>
                    </button>
                </header>
                <p>Muito bom Gabi!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24}></ThumbsUp>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}