import MobileMenu from '../components/MobileMenu';

export default function Header() {
    return (
        <header className="relative z-50">
            {/* Desktop nav can go here */}
            <MobileMenu />
        </header>
    );
}
