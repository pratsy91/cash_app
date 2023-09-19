import React, { useState } from "react";
import logo from "../images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import eye from "../images/Layer 2.svg";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function Menu() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const logoHandler = () => {
    navigate("/");
  };
  const menuHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <header
        className="bg-black px-10 pt-5 flex justify-between items-center fixed top-0 w-full 
  opacity-80 hover:opacity-80 z-20"
      >
        <img
          src={logo}
          alt="logo"
          onClick={logoHandler}
          className="cursor-pointer"
        />
        {/* <NavLink  className={({ isActive, isPending }) =>
  isActive?"border border-white px-1 py-1 bg-white text-black mb-2 rounded-md":""
}>SIGN IN</NavLink> */}
        <div className="text-white justify-between gap-5 bp:flex hidden">
          <NavLink
            to="/legal"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            LEGAL
          </NavLink>
          <NavLink
            to="/license"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            LICENCES
          </NavLink>
          <NavLink
            to="/security"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            SECURITY
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            CAREERS
          </NavLink>
          <NavLink
            to="/press"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            PRESS
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            SUPPORT
          </NavLink>
          <NavLink
            to="/status"
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            STATUS
          </NavLink>
          <NavLink
            to="/code"
            className={({ isActive }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            CODEBLOG
          </NavLink>
        </div>
        {show ? (
          <div
            className="text-white cursor-pointer bp:hidden"
            onClick={menuHandler}
          >
            <AiOutlineClose />
          </div>
        ) : (
          <div
            className="text-white cursor-pointer bp:hidden"
            onClick={menuHandler}
          >
            <FaBars />
          </div>
        )}
        <img src={eye} alt="logo" className="hidden bp:flex" />
      </header>

      {/* Responsive Menu */}
      <div>
        {show ? (
          <ul className="text-white  gap-8  flex justify-between bg-black text-center flex-col pt-20 pb-2 fixed bp:hidden w-full opacity-80  z-10">
            <li>
              <NavLink
                to="/legal"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                LEGAL
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/license"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                LICENCES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/security"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                SECURITY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                CAREERS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/press"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                PRESS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                SUPPORT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/status"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                STATUS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/code"
                className={({ isActive }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                    : ""
                }
              >
                CODEBLOG
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default Menu;
