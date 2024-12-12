import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGamesFailure, fetchGamesStart, fetchGamesSuccess } from "@/store/listinggames/gamesSlice";
import { AppDispatch } from "../store";
import { socket } from "@/store/listinggames/events";
import { Game } from "@/store/listinggames/interface";

interface FetchGamesParams {
  page: number;
  size: number;
  category?: string;
  providerId?: string;
}

export const useFetchGames = (
  category?: string,
  providerId?: string,
  page: number = 1,
  size: number = 10
) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGamesStart());

    const requestPayload: FetchGamesParams = {
      page,
      size,
      category,
      providerId,
    };

    socket.emit("gameList", requestPayload);

    socket.on("gameList", (games: Game[]) => {
      dispatch(fetchGamesSuccess(games));
    });

    socket.on("error", (error: string) => {
      dispatch(fetchGamesFailure(error));
    });

    return () => {
      socket.off("gameList");
      socket.off("error");
    };
  }, [category, providerId, page, size, dispatch]);
};
