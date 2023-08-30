import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layaut/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

//   const trainer = useSelector(store => store.trainer)
//   console.log(trainer)

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex")
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article>
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <h2>Hello Trained!</h2>
          <p>To start giveyour name</p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="your name ..."
              id="nameTrainer"
              type="text"
              required
              autoComplete="off"
            />
            <button>Start!</button>
          </form>
        </article>
      </section>

      <FooterPokeball />
    </main>
  );
};

export default Home;
