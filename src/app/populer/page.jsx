"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/Headermenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`)
    setAnime(data);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {anime.length == 0 ? (
        <Loading />
      ) : (
        <>
          <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
          <AnimeList api={anime} />
          <Pagination
            page={page}
            lastPage={anime.pagination?.last_visible_page}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default Page;
