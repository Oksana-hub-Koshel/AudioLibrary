import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <hr/>
        <nav>
            <div>
                <h2>Trance Music Library</h2>
                <ul>
                    <li><i></i><p>People Online: 1</p></li>
                    <li><i></i><p>Users: 0</p></li>
                    <li><i></i><p>Guests: 1</p></li>
                </ul>
            </div>
            <div>
                <h2>Contact Us</h2>
                <ul>
                    <li><i></i><p>Contact Us</p></li>
                    <li><i></i><p>FAQ</p></li>
                </ul>
            </div>
            <div>
                <h2>Company</h2>
                <ul>
                    <li><i></i><p>About</p></li>
                    <li><i></i><p>Donate</p></li>
                </ul>
            </div>
        </nav>
        <hr></hr>
        <div className={styles.copyright}>
            <h3>Trance Music Library</h3>
            <p>© Copyright 2022 All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer