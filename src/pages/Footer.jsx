import React from 'react'
import styles from '../styles/footer.module.css'

function Footer() {
   
    return (
        <footer className={styles.footer}>
           &copy; Crebb {new Date().getFullYear()}
        </footer>
    )
}

export default Footer
