import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeaderLogo() {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/imgs/logo-dark.avif"}
          width={130}
          height={35}
          alt="header-logo"
          className="object-cover"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
