import PostCard from 'componentes/PostCard'
import styles from './PostsRecomendados.module.css'

export default function PostsRecomendados({posts}) {
    return (
        <div className={styles.PostsRecomendadosContainer}>
            <h3>Outros posts que você pode gostar:</h3>
            <ul className={styles.posts}>
                {posts.map(post => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
