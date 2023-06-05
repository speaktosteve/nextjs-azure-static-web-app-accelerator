import { Repository } from "@/app/types/repository";

export const getStars = async (): Promise<Repository> => {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const data: Repository = await res.json();
  
    return data;
  };