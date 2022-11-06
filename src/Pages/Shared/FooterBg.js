import React from 'react';
import footerBg from '../../../src/assets/images/footer.png';

const FooterBg = () => {
    let year = new Date().getFullYear();
    console.log('year found', year)
    return (
        <section
            style={{
                background: `url(${footerBg})`,
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className='md:px-12 lg:px-20'>
                <footer className="footer p-10 bg-neutral">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover" href="/home">Branding</a>
                        <a className="link link-hover" href="/home">Design</a>
                        <a className="link link-hover" href="/home">Marketing</a>
                        <a className="link link-hover" href="/home">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover" href="/home">About us</a>
                        <a className="link link-hover" href="/home">Contact</a>
                        <a className="link link-hover" href="/home">Jobs</a>
                        <a className="link link-hover" href="/home">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Our Address</span>
                        <p>New York-10101 Hudson</p>
                    </div>
                </footer>
                <div className='pb-5'>
                    <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </section>
    );
};

export default FooterBg;