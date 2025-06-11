import { Link } from "react-router-dom";

const HeroSection = () => (
  <div class="px-4 py-5 my-5 text-center">
    {" "}
    <img
      class="d-block mx-auto mb-4"
      src="https://www.biochemistry.org/media/o3npf4lj/shutterstock_1025555557.jpg?width=872&height=454&rnd=133147136423930000"
      alt=""
      width="200"
      height="200"
    />{" "}
    <h1 class="display-5 fw-bold text-body-emphasis libre-baskerville-regular">
      Your Career, Smarter. Meet CareerBuddy.
    </h1>{" "}
    <div class="col-lg-6 mx-auto">
      {" "}
      <p class="lead mb-4">
        Unlock personalized career guidance, resume insights, and real-time
        support – all in one place. Let AI help you plan your future with
        confidence.
      </p>{" "}
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {" "}
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
          Get Started
        </button>{" "}
        <Link to="/assistant">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Chat with CareerBuddy
          </button>{" "}
        </Link>
      </div>{" "}
    </div>{" "}
  </div>
);
export default HeroSection;
