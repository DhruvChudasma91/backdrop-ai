import {assets, FooterLinks} from "../assets/assets";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center gap-4 px-4 lg:px-44 py-3 mb-2">
            <img src={assets.logo} alt="logo" width={32}/>
            <p className="flex-1 border-l border-gray-100 max-sm:hidden">
                &copy; {new Date().getFullYear()} @dhruvchudasma | All rights reserved.
            </p>

            <div className="flex gap-3">
                {FooterLinks.map((item, index) => (
                    <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={item.logo} alt="logo" width={32} />
                    </a>
                ))}
            </div>
            <p className="text-center text-gray-700 font-medium"></p>
        </footer>
    )
}

export default Footer; 