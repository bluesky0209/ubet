'use client';

import Slides from "@/components/slides";
import Category from "@/components/category";
import Provider from "@/components/provider";
import GameList from "@/components/gameList";

export default function Casino() {
    return (
        <>
            <div className="bg-transparent max-w-[1400px] w-full m-auto flex flex-col flex-grow text-[#cfcfcf] overflow-auto h-full overflow-y-auto relative">
                <Slides />
                <Category />
                <Provider />
                <GameList />
            </div>
        </>
    );
}
