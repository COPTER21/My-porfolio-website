import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="exp-container">
      <h2>Experice</h2>
      <div className="exp-item-container">
        <span className="position">Front-end(trainee)</span>
        <span className="cooperations">2Bsimple(Bankok)</span>
        <span className="period">period: 1 month</span>
        <p className="exp-descripe">
          I have developed some page of coe-tabee-front-end project and do mock
          test by using cypess
        </p>
      </div>
      <div className="exp-item-container">
        <span className="position">Cyper Security(trainee)</span>
        <span className="cooperations">
          Global Technology Integrated Co., Ltd.
        </span>
        <span className="period">period: 1 month 30 days</span>
        <p className="exp-descripe">
          I have developed Arak software by modifiy from duplicati( free, open
          source, backup client ) with my co-op trainee friends. I have
          developed some Front-end that project manager request.
        </p>
      </div>
      <div className="exp-item-container">
        <span className="position">Graduate project</span>
        <span className="cooperations">
          Tooth Decay Detection From X-ray Images
        </span>
        <span className="period">period: 3 month</span>
        <p className="exp-descripe">
          I have developed Ai to detect tooth decay from x-ray images dataset
          that dentist give by using U-net Architecture to train dataset
        </p>
      </div>
    </div>
  );
};

export default Experience;
