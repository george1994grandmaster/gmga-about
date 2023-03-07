//Libraries
import { imageContent } from "../utils/data";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../features/imageGallerySlice";
//Reducers
import { getAllPosts, handleFilter } from "../features/newsFeedSlice";
//Components
import ForumSidebar from "../components/forumSidebar";
import AddPost from "../components/addPost";
import SearchInput from "../components/searchInput";
import SinglePost from "../components/singlePost";
import ForumPinnedInfo from "../components/forumPinnedInfo";
import ImageGalleryModal from "../components/imageGalleryModal";
import AddPostModal from "../components/addPostModal";
import Loading from "../components/loading";
import MainButton from "../components/mainButton";
//Assets
import ForumBanner from "../assets/images/forumBanner.svg";
import NewsfeedFilterButton from "../components/newsfeedFilterButton";
import clockIcon from "../assets/images/clockIcon.svg";
import arrowtopIcon from "../assets/images/arrowtopIcon.svg";
import fireIcon from "../assets/images/fireIcon.svg";
const Forum = () => {
  const dispatch = useDispatch();
  const { scrollPosition, galleryModalOpen } = useSelector(
    (store) => store.imageGallery
  );
  const { user } = useSelector((store) => store.user);
  const { addPostModalOpen, posts, newsFeedIsLoading } = useSelector(
    (store) => store.newsFeed
  );
  const [batchNumber, setBatchNumber] = useState(1);
  //Return to old position when modal closes
  useEffect(() => {
    if (galleryModalOpen === false) {
      window.scrollTo(0, scrollPosition);
    }
  }, [galleryModalOpen]);

  //Functions to load more posts on press of button
  useEffect(() => {
    dispatch(getAllPosts(batchNumber));
  }, [batchNumber]);

  const loadMorePosts = () => {
    setBatchNumber(batchNumber + 1);
  };

  //Function to dipatch newsfeed filtering by category
  const setFilter = (type) => {
    dispatch(handleFilter(type));
  };
  return (
    <>
      {galleryModalOpen ? (
        <ImageGalleryModal />
      ) : (
        <section className="forumPage">
          {addPostModalOpen && <AddPostModal />}
          {!newsFeedIsLoading ? (
            <>
              <div className="forumBannerContainer">
                <img src={ForumBanner} alt="Mountains and Sun Vector" />
              </div>
              <main className="forumMain">
                <div className="forumSideBarCcontainer">
                  <ForumSidebar />
                </div>
                <section className="newsfeedContainer">
                  {user && <AddPost />}
                  <div className="newsfeedFiltersContainer">
                    <SearchInput
                      iconSize={"15px"}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      placeholder={"SEARCH IN FORUM"}
                      height={"45px"}
                      label={true}
                    />
                    <div className="newsfeedFilterButtonsContainer">
                      <NewsfeedFilterButton
                        icon={clockIcon}
                        text={"new"}
                        handleClick={() => setFilter("new")}
                      />
                      <NewsfeedFilterButton
                        icon={arrowtopIcon}
                        text={"top"}
                        handleClick={() => setFilter("top")}
                      />
                      <NewsfeedFilterButton
                        icon={fireIcon}
                        text={"hot"}
                        handleClick={() => setFilter("hot")}
                      />
                    </div>
                  </div>
                  {posts.map((post, index) => {
                    // console.log(post, index);
                    return <SinglePost key={index} post={post} />;
                  })}
                  <MainButton
                    text={"Load More Posts"}
                    className="loadMorePostsButton"
                    handleClick={loadMorePosts}
                  />
                </section>
                <div className="forumAdditionalInfoContainer">
                  <ForumPinnedInfo type="announcements" />
                  <ForumPinnedInfo type="pinnedPosts" />
                  <ForumPinnedInfo
                    type="recentMedia"
                    content={imageContent.slice(0, 4)}
                  />
                </div>
              </main>
            </>
          ) : (
            <div className="loadingContainer">
              <Loading className={"loading"} />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Forum;
