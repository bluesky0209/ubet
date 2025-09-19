'use client';

import Slides from "@/components/slides";
import Category from "@/components/category";
import Provider from "@/components/provider";
import GameList from "@/components/gameList";

export default function Casino() {
    return (
        <>
            <div className="bg-transparent max-w-[1400px] w-full mx-auto flex flex-col flex-grow text-[#cfcfcf] overflow-auto relative">
                <div className="px-[10px] h-[230px] mb-[5px] mt-[10px]">
                    <div className="h-full w-full border-0 rounded-[15px] shadow-[0_0_15px_#fff]">
                        <Slides />
                    </div>
                </div>
                <Category />
                <Provider />
                <GameList />
            </div>
        </>
    );
}
