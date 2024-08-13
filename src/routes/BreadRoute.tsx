import { useNavigate } from "react-router-dom";

export const BreadRoute = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Bröd route</h1>
        <h2>Frallor till grova bröd</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          dignissimos nisi exercitationem accusantium sequi debitis? Iusto
          mollitia exercitationem nulla, autem eligendi natus ab id doloremque
          esse dicta harum quisquam odit.
        </p>
      </div>
    </>
  );
};
