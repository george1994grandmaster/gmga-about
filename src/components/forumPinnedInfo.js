import PostContent from "./postContent";
import MainButton from "./mainButton";
import userProfileImage from "../assets/images/cardImg1.png";
import PostImageGallery from "./postImageGallery";
const announcements = [
  {
    userName: "Giorgi Tsibakhashvili",
    date: "24 September at 13:00",
    profileImage: userProfileImage,
    content:
      "Nice day in the Cairngorms with Lorna doing some preparation for Chamonix. Mini link up of the Twin Ribs, Fiacaill Ridge and Afterthought Arete moving on the rope",
    views: 153,
    comments: 24,
    shares: 12,
  },
  {
    userName: "Giorgi Tsibakhashvili",
    date: "30 September at 11:00",
    profileImage: userProfileImage,
    content:
      "Nice day in the Cairngorms with Lorna doing some preparation for Chamonix!",
    views: 31,
    comments: 4,
    shares: 8,
  },
];

const ForumPinnedInfo = (props) => {
  const { type, content } = props;
  switch (type) {
    case "announcements":
      return (
        <section className="forumPinnedInfoContainer">
          <h1 className="infoLabel">Announcemets</h1>
          <div className="pinnedAnnouncement">
            {/* <PostContent pinned={true} /> */}
          </div>
        </section>
      );
    case "pinnedPosts":
      return (
        <section className="forumPinnedInfoContainer">
          <h1 className="infoLabel">Pinned Posts</h1>
          <div className="pinnedAnnouncement">
            {/* <PostContent pinned={true} /> */}
          </div>
        </section>
      );
    case "recentMedia":
      return (
        <section className="forumPinnedInfoContainer">
          <h1 className="infoLabel recentMediaInfoLabel">Recent Media</h1>
          <div className="recentMediaContainer">
            <PostImageGallery images={content} />
          </div>
        </section>
      );
    default:
      return <h1>ERROR</h1>;
  }
};

export default ForumPinnedInfo;
