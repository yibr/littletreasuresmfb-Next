import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Hero17 = (props) => {
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-padding thq-section-max-width">
          <div className="hero17-content1">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text6">
                    Welcome to Little Treasures MFB
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    A childminder playgroup where little ones can learn, play,
                    and grow in a safe and nurturing environment.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <button className="thq-button-filled hero17-button1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero17-text7">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero17-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero17-text8">Contact Us</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero17-content2">
          <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <a
                href="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8c6f8e2b-7900-47fc-b4b9-0b4dcb4e5a91/07fed8bf-6899-4c6a-a366-a30c4d19f4ea?org_if_sml=1&amp;q=80&amp;force_format=original"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="hero17-placeholder-image1 thq-img-scale thq-img-ratio-1-1"
                />
              </a>
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image2 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero17-placeholder-image3 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero17-placeholder-image4 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero17-placeholder-image5 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero17-placeholder-image6 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero17-placeholder-image7 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero17-placeholder-image8 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="hero17-strip3 thq-animated-group-horizontal-reverse"></div>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero17-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero17-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero17-row-container1 {
            width: 100%;
          }
          .hero17-placeholder-image1 {
            width: 400px;
            height: 400px;
            text-decoration: none;
          }
          .hero17-placeholder-image2 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image3 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image4 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image5 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image6 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image7 {
            width: 400px;
            height: 400px;
          }
          .hero17-placeholder-image8 {
            width: 400px;
            height: 400px;
          }
          .hero17-row-container2 {
            width: 100%;
          }
          .hero17-strip3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }
          .hero17-text7 {
            display: inline-block;
          }
          .hero17-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero17-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-button1 {
              width: 100%;
            }
            .hero17-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1613666587344-f3c08aac2594?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxwYWludHxlbnwwfHx8fDE3MzE1MDIxNDF8MA&ixlib=rb-4.0.3&w=1500',
  heading1: undefined,
  action1: undefined,
  image1Alt: 'Children playing and learning',
  image3Src: '/img_4402%20(1)-1500w.jpeg',
  image2Src:
    'https://images.unsplash.com/photo-1551449896-66e638cbda3d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHBhaW50JTIwcGxheXxlbnwwfHx8fDE3MzE1MDEyNjF8MA&ixlib=rb-4.0.3&w=1500',
  image5Alt: 'Diverse group of kids playing together',
  image4Src: '/img_4020-1500w.jpeg',
  action2: undefined,
  image5Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image3Alt: 'Safe and caring environment for kids',
  image4Alt: 'Educational activities for children',
  image2Alt: 'Happy children at playgroup',
}

Hero17.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  action2: PropTypes.element,
  image5Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Alt: PropTypes.string,
}

export default Hero17
