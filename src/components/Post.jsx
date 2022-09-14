import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(){
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                <Avatar src="https://avatars.githubusercontent.com/u/69698664?v=4" ></Avatar>
                    <div className={styles.authorInfo}>
                        <strong>Gabriele Nunes</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title="11 dem amio as 8:30h"
                    dateTime="2022-05-8 08:35:55">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera!</p>
                <p>Estou aprendendo React.</p>
                <p>Esta no meu github</p>
                <p><a  href="">#novoProjeto</a></p>
            </div>

            <form className={styles.contentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Comentário</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </div>
        </article>
    )
}