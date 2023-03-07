import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setGuideBadgeNumber, getGuidesInfo } from "../features/homeSlice";
import MainButton from "../components/mainButton";
import { Activities } from "../utils/data";
import { Cards } from "../utils/data";
import SearchInput from "./searchInput";
import guidesBanner from "../assets/images/guidesBanner.png";
import scroller from "../assets/images/scroller.svg";
import { filterUsersBySkill } from "../features/homeSlice";
const HomeCards = () => {
  const dispatch = useDispatch();

  const { filteredGuideList, filterUsersBySearch } = useSelector(
    (store) => store.home
  );

  //Codes for fetching Guides and Pagination of Guides
  const [guidesBatchNumber, setGuidesBatchNumber] = useState(1);

  const loadMoreGuides = () => {
    setGuidesBatchNumber(guidesBatchNumber + 1);
  };

  useEffect(() => {
    dispatch(getGuidesInfo(guidesBatchNumber));
  }, [guidesBatchNumber]);

  //Codes for scrolling up to the top of page
  const scroll = useRef();
  const scrollUp = () => {
    scroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // filteredGuideList
  const handleFilter = (acivity) => {
    dispatch(filterUsersBySkill(acivity));
  };

  const handleSearch = (e) => {
    dispatch(filterUsersBySearch(e.target.value));
  };

  return (
    <section ref={scroll} className="homeMainWrapper">
      <div className="homeMainInner">
        <div className="home-cards-title-content">
          <img
            src={guidesBanner}
            style={{ objectFit: "contain", maxHeight: 100 }}
            alt="guidesBanner"
          />
        </div>
        <div className="list-category-content">
          <div className="categoryButtons">
            <h6 className="title list-category-title">FILTER BY CATEGORY:</h6>
            <div className="categoryFilterButtonsContainer">
              {Activities.map((item, index) => {
                const { activity } = item;
                return (
                  <MainButton
                    key={index}
                    text={activity}
                    className="skillsFilterButton"
                    selectable={true}
                    dark={false}
                    handleClick={() => handleFilter(activity)}
                  />
                );
              })}
            </div>
          </div>
          <SearchInput
            label={"search by name:"}
            border={true}
            iconSize={"20px"}
            handleChange={handleSearch}
            className="guideSearchInput"
          />
        </div>
        <div className="homeCardsWrapper">
          {filteredGuideList && filteredGuideList.map((card, index) =>
            // console.log(card)
            // const {user}=
            <div className="homeCard" key={index}>
              <NavLink to="*" className="mb-4 homeCardImg">
                <img src={card.img} alt="cardImg" />
              </NavLink>
              <div className="homeCardBody">
                <h5 className="title homeCardTitle mb-2">{card.title}</h5>
                <h5 className="text homeCardText">{card.text}</h5>
                <div className="skillsContainer">
                  {card.skills.map((skill, index) => {
                    return (
                      <section className="singleSkillContainer" key={index}>
                        <MainButton text={skill} className="skillButton" />
                      </section>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div className="scrollerContent">
            <button className="btn scroller" onClick={scrollUp}>
              <img src={scroller} alt="scroller" />
            </button>
          </div>
        </div>
        <MainButton
          text={"Load More Guides"}
          className="loadMoreGuidesButton"
          dark={false}
          handleClick={loadMoreGuides}
        />
      </div>
    </section>
  );
};

export default HomeCards;
