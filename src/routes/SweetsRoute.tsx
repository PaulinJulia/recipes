import { useNavigate } from "react-router-dom";

export const SweetsRoute = () => {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <h1>Kakor route</h1>
        <h2>Kakor och annat gott</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos nisi exercitationem accusantium sequi debitis? Iusto mollitia exercitationem nulla, autem eligendi natus ab id doloremque esse dicta harum quisquam odit.</p>
      </div>
    </>
  );
};
