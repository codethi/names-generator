import notFoundImage from "../assets/404.png";

export function NotFoundPage() {
  return (
    <img src={notFoundImage} alt="notFoundImage" className="h-screen m-auto" />
  );
}
