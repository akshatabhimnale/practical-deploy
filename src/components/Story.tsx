import story1 from '../assets/story1.jpg';
import story2 from '../assets/story2.jpg';
import story3 from '../assets/story3.jpg';
import story4 from '../assets/story4.jpg';
import FeatureStyle from '../styles/Feature.module.css';
import HeroStyle from '../styles/Hero.module.css';
import StoryStyle from '../styles/Story.module.css';

const stories = [
  {
    title: "John's Story",
    description:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    image: story1,
  },
  {
    title: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: story2,
  },
  {
    title: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    image: story3,
  },
  {
    title: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    image: story4,
  },
];

const Story = () => {
  return (
    <div className={StoryStyle.Story}>
      <div className={StoryStyle.container}>
        <div className={FeatureStyle.headingcontainer}>
          <div className={HeroStyle.heading}>
            <label>Member stories</label>
          </div>
        </div>
        <div>
          <div className={StoryStyle.StoryContainer}>
            {stories.map((story, index) => (
              <div key={index} className={StoryStyle.StoryCard}>
                <div className={StoryStyle.DesktopStory}>
                  <div className={StoryStyle.imagecontainer}>
                    <img
                      src={story.image}
                      alt={story.title}
                      className={StoryStyle.StoryImage}
                    />
                  </div>
                </div>
                <div className={StoryStyle.StoryContent}>
                  <h3 className={StoryStyle.StoryTitle}>{story.title}</h3>
                  <div className={StoryStyle.MobileStory}>
                    <div className={StoryStyle.SquareContainer}>
                      <img
                        src={story.image}
                        alt={story.title}
                        className={StoryStyle.SquareContainer}
                      />{" "}
                    </div>
                    <p className={StoryStyle.StoryDescription}>
                      {story.description}
                    </p>
                  </div>
                  <div className={StoryStyle.DesktopStory}>
                    <p className={StoryStyle.StoryDescription}>
                      {story.description}
                    </p>
                  </div>
                  <button className={StoryStyle.ReadMoreButton}>
                    Read more
                  </button>
                </div>
                <hr className={StoryStyle.StoryHr}></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
