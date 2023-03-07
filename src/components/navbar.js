import { Outlet } from "react-router";
import { useEffect } from "react";
import { getNavBarInfo } from "../features/navBarSlice";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { galleryModalOpen } = useSelector((store) => store.imageGallery);

  useEffect(() => {
    dispatch(getNavBarInfo());
  }, []);
  return (
    <>
      {galleryModalOpen ? (
        <Outlet />
      ) : (
        <div className="main">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Navbar;
