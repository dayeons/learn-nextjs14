import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

interface IParams {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({ params }: IParams) {
  const { id } = await params;

  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <Suspense fallback={<h2>loading movie info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>loading movie video</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
