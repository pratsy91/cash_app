import React, { useState } from "react";
import logo from "../images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import eye from "../images/Layer 2.svg";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

function Menu() {
  const navigate = useNavigate();

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [show, setShow] = useState(false);

  console.log(user);

  const eyeHandler = () => {
    navigate("/");
  };

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
  opacity-60 hover:opacity-80 z-20"
      >
        <img
          src={logo}
          alt="logo"
          onClick={logoHandler}
          className="cursor-pointer"
        />

        <div className="text-white justify-between gap-5 bp:flex hidden">
          {!isAuthenticated ? (
            <button
              onClick={(e) => loginWithRedirect()}
              className="border  px-1 py-1 bg-green-500 text-white mb-2 rounded-md "
              type="button"
            >
              SIGN IN
            </button>
          ) : null}
          <NavLink
            to="/"
            end
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-white px-1 py-1 bg-white text-black mb-2 rounded-md"
                : ""
            }
          >
            Home
          </NavLink>
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
          {isAuthenticated ? (
            <button
              onClick={(e) => logout()}
              className="border  px-1 py-1 bg-green-500 text-white mb-2 rounded-md"
              type="button"
            >
              SIGN OUT
            </button>
          ) : null}
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
        <img
          src={eye}
          alt="logo"
          className="hidden bp:flex cursor-pointer"
          onClick={eyeHandler}
        />
      </header>

      {/* Responsive Menu */}
      <div>
        {show ? (
          <ul
            className="text-white  gap-2  flex justify-between 
          bg-black text-center flex-col pt-20 pb-2 fixed bp:hidden w-full opacity-80  z-10"
          >
            {!isAuthenticated ? (
              <li onClick={(e) => loginWithRedirect()}>
                <button
                  className="border  px-1 py-1 bg-green-500 text-white mb-2 rounded-md"
                  type="button"
                >
                  SIGN IN
                </button>
              </li>
            ) : (
              <li onClick={(e) => logout()}>
                <button
                  className="border  px-1 py-1 bg-green-500 text-white mb-2 rounded-md"
                  type="button"
                >
                  SIGN OUT
                </button>
              </li>
            )}

            <li>
              <NavLink
                to="/legal"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
                    ? "border border-white px-1 py-1 bg-white text-black mb-1 rounded-md"
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
