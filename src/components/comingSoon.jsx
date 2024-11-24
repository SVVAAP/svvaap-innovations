import React from 'react';
import logo from '../img/logo_light.png'; // replace with the actual path to your logo
import developer1 from 'https://media.licdn.com/dms/image/v2/D5603AQEbOr3huxeb2w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695266645090?e=1730332800&v=beta&t=h89jEJRSMuUjZRV6kbII50x_vzZiykk75hmdUPUys7g'; // replace with the actual path to developer 1 photo
import developer2 from 'https://media.licdn.com/dms/image/v2/D5603AQEBLZRtyy8C1g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693617179786?e=1730332800&v=beta&t=1B2ejgEB2QHw3AUznbxHjRkSLtFFnIA3h2rnbpyauTY'; // replace with the actual path to developer 2 photo

function Soon() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-10">
            {/* Logo */}
            <div className="mb-8">
                <img src={logo} alt="Logo" className="w-aoto h-auto max-h-40 mx-auto" />
            </div>

            {/* Description */}
            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg mb-8 text-center ">
                We're working hard to bring you a new experience. Stay tuned for our launch!
            </p>
            {/* icons */}
            <div className="flex justify-center space-x-4 m-4">
                <a href="https://www.linkedin.com/in/srujan-moolya" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                        alt="LinkedIn"
                        className="w-6 h-6"
                    />
                </a>
                <a href="https://www.youtube.com/@svvaap-innovations" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                        alt="YouTube"
                        className="w-6 h-6"
                    />
                </a>
                <a href="https://www.instagram.com/svvaap" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                        alt="Instagram"
                        className="w-6 h-6"
                    />
                </a>
            </div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-8 text-center">
                We Innovate World Changing Tech !
            </p>

            <h2 className="text-3xl font-bold mb-4">What SVVAAP Do ?</h2>
            <p className="text-md mb-8 text-center ">
                <b>Web Development:</b><br /> Building robust, scalable websites that drive engagement and performance.<br />
                <b> App Development: </b><br />Creating intuitive and feature-rich applications for diverse platforms.<br />
                <b> AI Solutions: </b><br />Leveraging artificial intelligence to develop smart, innovative solutions.<br />
                <b> Game Development: </b><br />Designing immersive and interactive gaming experiences.<br />
            </p>

            {/* Contact Details */}
            <div className="text-center mb-8">
                <p>Email: <a href="mailto:workwithsvvaap@gmail.com" className="text-blue-400">workwithsvvaap@gmail.com</a></p>
                <p>
                    WhatsApp:
                    <a href="https://wa.me/7899535703?text=Hii%2C%20I%20need%20more%20info%20about%20Svvaap%20service%21" target="_blank">
                        +91-7899535703
                    </a>
                </p>

            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mb-8">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>

            {/* Developer Info */}
            <div className="flex space-x-12 items-center">
                <div className="text-center items-center">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQEbOr3huxeb2w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695266645090?e=1730332800&v=beta&t=h89jEJRSMuUjZRV6kbII50x_vzZiykk75hmdUPUys7g"
                        alt="Developer 1"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <p className="font-bold">Srujan Moolya</p>
                    <p>Ceo & Founder, Front-End Developer</p>

                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/srujan-moolya" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                                alt="LinkedIn"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="https://www.youtube.com/@srujanmoolya" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                                alt="YouTube"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="https://www.instagram.com/srujan_k21" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                </div>
                <div className="text-center items-center">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQEBLZRtyy8C1g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693617179786?e=1730332800&v=beta&t=1B2ejgEB2QHw3AUznbxHjRkSLtFFnIA3h2rnbpyauTY"
                        alt="Developer 1"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <p className="font-bold">Anup Nayak</p>
                    <p>Co-Founder,Full-Stack Developer</p>

                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/anup-nayak-05651b25b" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                                alt="LinkedIn"
                                className="w-6 h-6"
                            />
                        </a>

                        <a href="https://www.instagram.com/mrnayak_25" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Soon;
