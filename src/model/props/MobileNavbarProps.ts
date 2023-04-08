export interface MobileNavbarProps {
    nav: boolean;
    setNav: React.Dispatch<React.SetStateAction<boolean>>;
    handleNav: () => void;
}