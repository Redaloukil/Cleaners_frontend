import React from 'react';
import { Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    <p>
                    Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse , Though the gravity still dragged at him, his muscles were making great efforts to adjust.</p>
                    
                    </div>
                    <div className="col-sm-3">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/signup">Create an account</Link>
                            <Link className="nav-link" to="/signup">Contact</Link>
                            <Link className="nav-link" to="/signup">Deliveries</Link>
                    </div>
                    <div className="col-sm-3">
                        <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/signup">Create an account</Link>
                            <Link className="nav-link" to="/signup">Contact</Link>
                            <Link className="nav-link" to="/signup">Deliveries</Link>
                    </div>
                    <div className="col-sm-3">
                        <p>Email</p>
                        <h3 className="h6">Cleaners@gmail.com</h3>
                        <p>Phone number</p>
                        <h3>+213552092560</h3>
                        <p>social links</p>
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                        <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;