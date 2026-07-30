"use client";
import { useEffect, useRef, useState } from "react";
import Overlay from "../../shared/overlay/Overlay";
import SearchBtn from "./search-btn/SearchBtn";
import SearchContent from "./search-content/SearchContent";

function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);
  return (
    <div>
      {isSearchOpen && (
        <Overlay
          className={`lg:opacity-100 opacity-0`}
          fn={() => setIsSearchOpen(false)}
        />
      )}

      <SearchBtn
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <SearchContent inputRef={inputRef} isSearchOpen={isSearchOpen} />
    </div>
  );
}

export default Search;
