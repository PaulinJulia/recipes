import { useNavigate } from "react-router-dom";

export const PastryRoute = () => {
  const navigate = useNavigate();
  return (
    <>
        <h1>Tårtor och bakverk route</h1>
        <h2>Bakverk</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          dignissimos nisi exercitationem accusantium sequi debitis? Iusto
          mollitia exercitationem nulla, autem eligendi natus ab id doloremque
          esse dicta harum quisquam odit.
        </p>
    </>
  );
};
