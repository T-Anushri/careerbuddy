const features = [
  {
    title: "Resume Analyzer",
    desc: "Upload your resume and get instant feedback to improve it.",
  },
  {
    title: "Goal Tracker",
    desc: "Set career goals and track your progress in a structured way.",
  },
  {
    title: "PDF Job Parser",
    desc: "Extract skills, roles, and more from job descriptions or internship PDFs.",
  },
  {
    title: "Sentiment Insights",
    desc: "Get sentiment analysis of your career goals and achievements.",
  },
  {
    title: "Chatbot Guidance",
    desc: "Interact with our smart assistant to receive personalized career advice.",
  },
  {
    title: "Career Resources",
    desc: "Access curated guides, roadmaps, and videos tailored to your path.",
  },
];

const FeaturesSection = () => (
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">Features</h2>{" "}
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          {features.map((f, idx) => (
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
              aria-hidden="true"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                {f.title}
              </h3>
              <p>{f.desc}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
);
export default FeaturesSection;
