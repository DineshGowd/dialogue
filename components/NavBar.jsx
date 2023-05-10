"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const userLoggedIn = false;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      console.log("response", response);
      setProviders(response);
    };
    setUpProviders();
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
      {/* {alert(providers)} */}
      {session?.user ? (
        <>
          <Link className="link-btn" href="/signin">
            Create Post
          </Link>
          <Link className="link-btn" href="/signin">
            Logout
          </Link>
          <Link href="/profile">
            <CgProfile size={25} />
            <Image 
            src={session.user.image}
            height={50}
            width={50}
            alt="user-pic"
            />
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
