import './_Footer.scss';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="spacing footer">
            <div className='container'>
                <p className="footer__copyright">© {currentYear} What Can I Cook?</p>
            </div>
        </footer>
    );
};