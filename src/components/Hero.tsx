import HeroImg from '../assets/heroimage.jpg';
import HeroStyle from '../styles/Hero.module.css';

const Header = () => {
  return (
    <>
      <div className={HeroStyle.heroSection}>
        <div className={HeroStyle.heroContainer}>
          <div className={HeroStyle.HeroContentContainer}>
            <h1 className={HeroStyle.heading}>
              Central Texas
              <br />
              Fly Fishing
            </h1>
            <p className={HeroStyle.para}>
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
              cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <button>Get started</button>
          </div>
          <div className={HeroStyle.imageContainer}>
            <img src={HeroImg} alt="Fishing Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
