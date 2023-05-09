"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const userLoggedIn = false;
  const [providers, setProviders] = useState();
  const [toggleDropdown,setToggleDropdown]=useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
  }, []);

  return (
    <nav className="navbar">
      <Image src="/assets/images/gg.png" alt="logo" width={70} height={70} />
      <Link className="link" href="/home">
        Home
      </Link>
      <Link className="link" href="/about">
        About
      </Link>
      {userLoggedIn ? (
        <>
          <Link className="link-btn" href="/signin">
            Create Post
          </Link>
          <Link className="link-btn" href="/signin">
            Logout
          </Link>
          <Link href="/profile">
            <CgProfile size={25} />
          </Link>
        </>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="link-btn"
              >
                Sign-In
              </button>
            ))}
        </>
      )}
    </nav>
  );
};

export default NavBar;
