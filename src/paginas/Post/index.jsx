import { Route, Routes, useParams } from 'react-router-dom'
import './Post.css'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostsRecomendados from 'componentes/PostsRecomendados';

export default function Post() {
    const parametros = useParams();

    const post = posts.find(post => post.id === Number(parametros.id))

    if (!post) {
        return (
            <NaoEncontrada />
        )
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className='post-markdown-container'>
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                    <PostsRecomendados posts={postsRecomendados} />
                </PostModelo>
                } />
            </Route>
        </Routes>
    )
}
