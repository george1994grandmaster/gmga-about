import HomeCards from "../components/homeCards";
import homeBanner from "../assets/images/homeMainBanner.png";

const Home = () => {
  return (
    <section className="mainHomeContainer">
      <div className="container">
        <div className="homeBanner">
          <img src={homeBanner} alt="homeBanner"/>
        </div>
        <p className="text home-banner-text primary standartText">
          it  is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of letters, as opposed to
          using 'Content here, content here', making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose injected humour and the like.
        </p>
        <div className="border"></div>
        <HomeCards/>
      </div>
    </section>
	)
}

export default Home;