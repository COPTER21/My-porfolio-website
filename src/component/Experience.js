import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="exp-container">
      <h2>Experience</h2>
      <div className="exp-item-container">
        <div className="up-item-container">
          <div className="upper-section">
            <span className="position">Front-end(trainee)</span>
            <span className="period">period: 1 month</span>
          </div>
          <span className="cooperations">2Bsimple(Bankok)</span>
        </div>
        <p className="exp-descripe">
          I have developed some page of coe-tabee-front-end project and do mock
          test by using cypess
        </p>
      </div>
      <div className="exp-item-container">
        <div className="up-item-container">
          <div className="upper-section">
            <span className="position">Cyper Security(trainee)</span>
            <span className="period">period: 1 month 30 days</span>
          </div>
          <span className="cooperations">
            Global Technology Integrated Co., Ltd.
          </span>
        </div>
        <p className="exp-descripe">
          I have developed Arak software by modifiy from duplicati( free, open
          source, backup client ) with my co-op trainee friends. I have
          developed some Front-end that project manager request.
        </p>
      </div>
      <div className="exp-item-container">
        <div className="up-item-container">
          <div className="upper-section">
            <span className="position">Graduate project</span>
            <span className="period">period: 3 month</span>
          </div>
          <span className="cooperations">
            Tooth Decay Detection From X-ray Images
          </span>
        </div>
        <p className="exp-descripe">
          I have developed Ai to detect tooth decay from x-ray images dataset
          that dentist give by using U-net Architecture to train dataset
        </p>
      </div>
    </div>
  );
};

export default Experience;
