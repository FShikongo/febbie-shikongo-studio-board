import "./JobEventCard.scss";
import { Link, useNavigate } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import likeIcon from "../../assets/icons/icon-like.svg";
import applyIcon from "../../assets/icons/edit-24px.svg";

export default function JobEventCard({ opportunities, baseURL, onApply }) {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/jobboard/${opportunities.id}`);
  };

  return (
    <li className="jobboard-card">
      <div className="jobboard-card__left">
        <div className="jobboard-card__element jobboard-card__element--top">
          <p className="jobboard-card__label">ORGANIZATION</p>
          <div className="jobboard-card__name">
            <p
              className="jobboard-card__content jobboard-card__content--blue"
              onClick={navigateToDetails}
            >
              {opportunities.organization_name}
            </p>
            <img
              src={chevronRight}
              alt="Chevron Right"
              className="jobboard-card__icon"
            />
          </div>
        </div>
        <div className="jobboard-card__element jobboard-card__element--bottom">
          <p className="jobboard-card__label">TITLE</p>
          <div className="jobboard-card__title">
            <p className="jobboard-card__title-name">{opportunities.title}</p>
          </div>
        </div>
        <div className="jobboard-card__apply-icon">
          <img src={applyIcon} alt="Apply Icon" onClick={onApply} />
        </div>
      </div>

      <div className="jobboard-card__right">
        <div className="jobboard-card__element jobboard-card__element--top">
          <p className="jobboard-card__label">TYPE</p>
          <p className="jobboard-card__content">{opportunities.type}</p>
        </div>
        <div className="jobboard-card__element jobboard-card__element--bottom">
          <p className="jobboard-card__label">LOCATION</p>
          <div className="jobboard-card__contact-info">
            <p className="jobboard-card__content">{opportunities.location}</p>
          </div>
        </div>
        <div className="jobboard-card__like-icon">
          <Link to={`/jobboard/${opportunities.id}/like`}>
            <img src={likeIcon} alt="Like Icon" />
          </Link>
        </div>
      </div>
    </li>
  );
}
