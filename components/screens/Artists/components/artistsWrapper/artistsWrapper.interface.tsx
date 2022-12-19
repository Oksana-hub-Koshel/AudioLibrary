import { ParsedUrlQuery } from "querystring";
import { Artist } from "../../artists.interface";

export interface ArtistProps {
  data: Artist[];
  query: string | null | undefined
}