import { useState } from 'react';
import Arrow from '../assets/arrow.png';
import Img1 from '../assets/feature1.jpg';
import Img2 from '../assets/feature2.jpg';
import Img3 from '../assets/feature3.jpg';
import FeatureStyle from '../styles/Feature.module.css';
import HeroStyle from '../styles/Hero.module.css';

interface Feature {
  index: number;
  title: string;
  description: string;
  image: string;
  arrow: string;
}

const Feature = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(
    null
  );

  const features: Feature[] = [
    {
      index: 1,
      title: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc.",
      image: Img1,
      arrow: Arrow,
    },
    {
      index: 2,
      title: "Fly Fishing Experiences",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque.",
      image: Img2,
      arrow: Arrow,
    },
    {
      index: 3,
      title: "Gear Up and Catch More",
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem.",
      image: Img3,
      arrow: Arrow,
    },
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeatureIndex(activeFeatureIndex === index ? null : index);
  };

  return (
    <div className={FeatureStyle.featureContainer}>
      <div className={FeatureStyle.container}>
        <div className={`${FeatureStyle.features} ${FeatureStyle.desktopView}`}>
          <div className={FeatureStyle.headingcontainer}>
            <div className={HeroStyle.heading}>
              <label>Featured options</label>
            </div>
          </div>
          {features.map((feature) => (
            <div
              key={feature.index}
              onClick={() => handleFeatureClick(feature.index)}
              className={`${FeatureStyle.featureCard} ${
                activeFeatureIndex === feature.index
                  ? "featureCardClicked"
                  : FeatureStyle.active
              }`}
            >
              <div className={FeatureStyle.featureslist}>
                <label className={FeatureStyle.featureDropdown}>
                  {feature.title}
                </label>
                <img
                  src={feature.arrow}
                  alt="Dropdown arrow"
                  className={`${
                    activeFeatureIndex === feature.index
                      ? FeatureStyle.arrowRotated
                      : ""
                  }`}
                />
              </div>
              <div>
                <hr />
              </div>
              {activeFeatureIndex === feature.index && (
                <>
                  <div className={FeatureStyle.dropdownContent}>
                    <div className={FeatureStyle.featureImg}>
                      <img
                        className={FeatureStyle.images}
                        src={feature.image}
                        alt={`${feature.title} Image`}
                      />
                    </div>
                    <div className={FeatureStyle.featureContent}>
                      <label className={FeatureStyle.feature}>
                        {feature.title}
                      </label>
                      <p className={FeatureStyle.para}>{feature.description}</p>
                      <button className={FeatureStyle.learnmore}>
                        Learn more
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className={`${FeatureStyle.features} ${FeatureStyle.mobileView}`}>
          <div className={FeatureStyle.headingcontainer}>
            <div className={HeroStyle.heading}>
              <label>Featured options</label>
            </div>
          </div>
          {features.map((feature) => (
            <div key={feature.index} className={FeatureStyle.simpleCard}>
              <div
                className={FeatureStyle.simpleCardContent}
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <label className={FeatureStyle.feature}>{feature.title}</label>
                <p className={FeatureStyle.para}>{feature.description}</p>
                <button className={FeatureStyle.learnmore}>Learn more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
