"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebounce } from "@/lib/hooks";

const SearchBar =  () => {
	const [value, setValue] = useState("");
	const searchParams = useSearchParams();
	const debouncedSearch =  useDebounce(value);
	const router = useRouter();

	
		useEffect(() => {
  const params = new URLSearchParams(searchParams.toString())
  if (debouncedSearch) {
      params.set("search", debouncedSearch)
    } else {
      params.delete("search") 
    }

    params.set("page", "1") 
  router.push(`?${params.toString()}`)
  
}, [debouncedSearch])

 
	
	return (
		<input
			value={value}
			onChange={(e) => setValue(e.target.value)}
			type="search"
			placeholder="Search for Pokémons..."
		/>
	);
};

export default SearchBar;
