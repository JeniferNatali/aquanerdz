import Link from 'next/link';
import styles from './page.module.css';
import Header from '@/componentes/cabecalho';

<Header/>
export default function Seusdados () {
    return (
       
        <div className={styles.container}>
            
            <h1>Seus dados</h1>
            <div>
            <span>Nome <br /></span>
            <input /></div>
            
            <div>
            <span>Email <br /></span>
            <input /></div>
            
            <div>
            <span>Telefone</span>
            <input /></div>
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
        
    )
}