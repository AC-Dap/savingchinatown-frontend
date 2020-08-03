import React from "react";
import LogEngagementEvent from "../Logging";
import { EmailSubscription } from "./EmailSubscription";

export function ExtraActionButtons(props) {
  function handleClick(value, placeID, url) {
    LogEngagementEvent("user-click", value, placeID);
    window.open(url);
  }

  const place = props.place;
  var spansToRender = [];
  if (place.giftCardURL) {
    spansToRender.push(
      <span
        onClick={e => {
          handleClick("takeout", place.placeID, place.takeoutURL);
        }}
        className={
          "extra-action-button " +
          `extra-action-button-${spansToRender.length + 1}`
        }
      >
        order takeout
      </span>
    );
  } else {
    spansToRender.push(
      <EmailSubscription
        place={place}
        buttonClass={`extra-action-button extra-action-button-${spansToRender.length +
          1}`}
      />
    );
  }
  if (place.donationURL) {
    spansToRender.push(
      <span
        onClick={e => {
          handleClick("donate", place.placeID, place.donationURL);
        }}
        className={
          "extra-action-button " +
          `extra-action-button-${spansToRender.length + 1}`
        }
      >
        donate to staff
      </span>
    );
  }
  if ((place.giftCardURL || place.takeoutURL) && !place.donationURL) {
    spansToRender.push(
      <span
        onClick={e => {
          handleClick("contact", place.placeID, place.placeURL);
        }}
        className={
          "extra-action-button " +
          `extra-action-button-${spansToRender.length + 1}`
        }
      >
        contact them
      </span>
    );
  }

  return <div className="extra-button-container">{spansToRender}</div>;
}
