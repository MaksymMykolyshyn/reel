const IMAGE_URL = "https://image.tmdb.org/t/p";

export const getPoster = (path: string | null) => {
  if (!path) {
    return "/images/no-poster.jpg";
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
};

export function getBackdrop(path: string | null) {
  if (!path) {
    return "/images/no-backdrop.jpg"
  }

  return `${IMAGE_URL}/original${path}`;
}

export function getProfile(path: string | null) {
  if (!path) {
    return "/images/person-placeholder.jpg";
  }

  return `${IMAGE_URL}/w500${path}`;
}

export function getProfileFull(path: string | null) {
  if (!path) {
    return "/images/person-placeholder.jpg";
  }

  return `${IMAGE_URL}/original${path}`;
}