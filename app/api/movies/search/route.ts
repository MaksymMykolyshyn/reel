import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.themoviedb.org/3";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("query");
  const language = searchParams.get("language") || "en-US";
  const type = searchParams.get("type") || "multi";

  if (!query?.trim()) {
    return NextResponse.json({
      results: [],
    });
  }

  const token = process.env.TMDB_READ_ACCESS_TOKEN;

  if (!token) {
    console.error("TMDB_READ_ACCESS_TOKEN is missing");

    return NextResponse.json(
      {
        error: "TMDB token is missing",
      },
      {
        status: 500,
      }
    );
  }

  let endpoint = "/search/multi";

  if (type === "movie") {
    endpoint = "/search/movie";
  } else if (type === "tv") {
    endpoint = "/search/tv";
  }

  const response = await fetch(
    `${BASE_URL}${endpoint}?query=${encodeURIComponent(
      query
    )}&language=${encodeURIComponent(language)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    const error = await response.text();

    console.error("TMDB ERROR:", response.status, error);

    return NextResponse.json(
      {
        error: "Failed to search",
      },
      {
        status: response.status,
      }
    );
  }

  const data = await response.json();

  return NextResponse.json(data);
}