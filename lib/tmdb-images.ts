const IMAGE_URL = "https://image.tmdb.org/t/p";

export function getPoster(path: string) {
  return `${IMAGE_URL}/w500${path}`;
}

export function getBackdrop(path: string) {
  return `${IMAGE_URL}/original${path}`;
}

export function getProfile(path: string | null) {
  if (!path) {
    return "/images/person-placeholder.jpg";
  }

  return `${IMAGE_URL}/w500${path}`;
}