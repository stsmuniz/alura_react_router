import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá Mundo</h1>
            <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Salustiano Muniz, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
        </div>
        <div className={styles.imagens}>
            <img
                src={circuloColorido}
                aria-hidden="true"
                className={styles.circuloColorido}
                alt="circulo-colorido"
            />
            <img
                src="https://github.com/stsmuniz.png"
                className={styles.minhaFoto}
                alt="Minha foto"
            />
        </div>
    </div>
  )
}
