import React from "react";
import { Modal } from "antd";
import Constants from "../Constants";

class FAQEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  getBody = () => {
    return { __html: this.props.body };
  };

  render() {
    return (
      <>
        <h3
          style={{ cursor: "pointer" }}
          onClick={event => this.setState({ expanded: !this.state.expanded })}
        >
          {this.props.title}
        </h3>
        {this.state.expanded && (
          <p dangerouslySetInnerHTML={this.getBody()}></p>
        )}
      </>
    );
  }
}

function FAQModal(props) {
  function renderLink(url, text, target) {
    target = target || "_blank";
    return "<a target='" + target + "' href='" + url + "'>" + text + "</a>";
  }

  function addPlaceLink(text) {
    return renderLink(Constants.AddPlaceURL, text, "_self");
  }

  const consumerFAQs = [
    {
      title: "What is SavingChinatown?",
      body: `Inspired by the similar Bay Area site ${renderLink(
        "https://saveourfaves.org",
        "SaveOurFaves"
      )}, SavingChinatown is a directory of East Asian restaurants and cafes, currently in ${
        Constants.NumOfCities
      } cities, that offers online gift cards for purchase. As many East Asian restaurants are currently ${renderLink(
        "https://www.npr.org/2020/03/02/811363404/when-xenophobia-spreads-like-a-virus",
        "facing increased hostility"
      )} considering the source of COVID-19, we wanted to specifically extend support to these restaurants by mobilizing and introducing customers to these places. We also provide links to staff donation sites, if they are available.`
    },
    {
      title: "Why isn’t my favorite business on your site?",
      body: `Please help us add your favorite East Asian spots, or any that you've heard about, ${addPlaceLink(
        "here"
      )}. We're open to adding more small business categories if this catches on.`
    },
    {
      title:
        "How else can I support my local businesses beyond purchasing a gift card?",
      body:
        `Delivery and pickup are great options! Some restaurants that don’t normally offer delivery have started to offer curbside pickup, and others have closed temporarily. Check their website or social media for the latest info!` +
        "<br />" +
        `Tip generously if you can (even for delivery/pickup), since employees are doing extra work and putting their health at risk.` +
        "<br />" +
        `Encourage the government to get involved. Please call your US Representative and your Senators. You can be connected to the capitol switchboard at (202)-224-3121. Demand that small businesses are part the federal stimulus plan.` +
        "<br />" +
        `And, of course, spread the word! Even one extra sale can make a difference for these businesses.`
    },
    {
      title: "Why these specific cities?",
      body: `These ${
        Constants.NumOfCities
      } cities just happen to be the ones the creators of this site live in and are familiar with. If you would like to add your own city as well, please let us know through email at ${renderLink(
        "mailto:info@savingchinatown.org",
        "info@savingchinatown.org"
      )}.`
    },
    {
      title: "Who built this? And why?",
      body: `We're a group of high school students from all across the country (hence the varied cities), eager to help out our local communities and inspired by current resources like ${renderLink(
        "https://saveourfaves.org",
        "SaveOurFaves"
      )}. As many of us come from an East Asian background, we wanted to try and specifically help combat the aversion towards East Asian restaurants and businesses that has arisen during these times, as many of these places are struggling to muster even a few customers per day. We never could have published this site if Mike Krieger, cofounder of SaveOurFaves, didn't generously publish his code online for everyone to use, so we're incredibly grateful towards him for doing so. You can contact us with any questions about the site at ${renderLink(
        "mailto:info@savingchinatown.org",
        "info@savingchinatown.org"
      )}.`
    }
  ];
  const bizFAQs = [
    {
      title: "Why isn’t my business showing up in your search results?",
      body:
        "Please help us add your East Asian food/beverage business " +
        addPlaceLink("here") +
        ". We're open to adding more small business categories if this catches on."
    },
    {
      title:
        "My business offers gift certificates, but your site says we don’t",
      body: "Please let us know the details " + addPlaceLink("here") + "."
    },
    {
      title:
        "I'm running a GoFundMe for my staff, and I'd like to list it on your site",
      body:
        "Please drop us a note via email at " +
        renderLink(
          "mailto:info@savingchinatown.org",
          "info@savingchinatown.org"
        )
    },
    {
      title: "How can I start offering online gift cards?",
      body:
        "The first step is to check with your POS provider. Many offer their own gift card features (e.g. Square, Toast, ShopKeep), and others integrate with specific third-party providers. If your POS provider doesn’t offer gift cards or integrate with third-party providers, there are some reasonable standalone eGift Card apps like GiftUp or GiftFly. If you’re considering other options, make sure that your business receives the fee for the gift card as soon as the customer purchases the card (otherwise that won’t help you during the crisis). Some services may also ask customers to pay an additional fee when they buy a gift card but be sure it’s a small amount."
    },
    {
      title: "How can I encourage customers to buy gift cards?",
      body:
        "People are looking for ways they can support their favorite businesses, so don’t be afraid to let them know that gift cards will help. Reach out to your community on Facebook, Twitter, and Instagram, and use your email list to get in touch with your customers. Ask them to consider buying a gift card for one month of spending to help you weather this storm and keep paying staff, so that you can continue offering great food/coffee/etc for years to come."
    }
  ];
  return (
    <Modal
      title="FAQs"
      visible={props.shouldShow}
      onOk={props.onClose}
      width="80%"
      onCancel={props.onClose}
      footer={<span></span>}
    >
      <h2>For Restaurant-goers</h2>
      {consumerFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
      <h2>For Businesses</h2>
      {bizFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
    </Modal>
  );
}

export default FAQModal;
