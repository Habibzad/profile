import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="social-media">
                <ul className="social-media-list">
                    <li className="social-media-list-item">
                        <a className="social-link" href="mailto:ahmadhabibzad@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                    <li className="social-media-list-item">
                        <a className="social-link" href="https://twitter.com/Masoud_Habibzad" rel="noreferrer" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="social-media-list-item">
                        <a className="social-link" href="https://codepen.io/amhabibzad/" rel="noreferrer" target="_blank">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                    <li className="social-media-list-item">
                        <a className="social-link" href="https://www.linkedin.com/in/amhabibzad/" rel="noreferrer" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li className="social-media-list-item">
                        <a className="social-link" href="https://github.com/Habibzad" rel="noreferrer" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p className="copy">2021 Habibzad</p>
        </footer>
    )
}

export default Footer
