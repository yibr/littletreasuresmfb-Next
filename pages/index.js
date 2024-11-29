import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import ContactForm10 from '../components/contact-form10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>little_treasures_mfb</title>
          <meta property="og:title" content="little_treasures_mfb" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10">Home</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">About Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">Services</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">Contact Us</span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">Main Action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">Secondary Action</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text20">Page One Description</span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21">Page Two Description</span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22">Page Three Description</span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23">Page Four Description</span>
            </Fragment>
          }
          logoSrc="/letterhead%20mfb%20(1)-1500h.jpg"
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text24">Learn More</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text25">Contact Us</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text26">
                A childminder playgroup where little ones can learn, play, and
                grow in a safe and nurturing environment.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text27">
                Welcome to Little Treasures MFB
              </span>
            </Fragment>
          }
          image1Src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxwbGF5fGVufDB8fHx8MTczMTQ5OTU1OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image2Src="/img_4402%20(1)-1500w.jpeg"
          image3Src="/img_4289-1500w.jpeg"
          image7Src="https://images.unsplash.com/photo-1584515828432-06198c3196a8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxwbGF5fGVufDB8fHx8MTczMTQ5OTUxMHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image8Src="https://images.unsplash.com/photo-1611957082141-c449bb2b4ada?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxwbGF5fGVufDB8fHx8MTczMTQ5OTUxMHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image9Src="https://images.unsplash.com/photo-1612355524127-d361afbfc818?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxwbGF5fGVufDB8fHx8MTczMTQ5OTUxMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text28">Interactive Play Sessions</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text29">Creative Learning Activities</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text30">Secure Play Area</span>
            </Fragment>
          }
          feature1ImgSrc="/img_4020-1400w.jpeg"
          feature1Description={
            <Fragment>
              <span className="home-text31">
                Fun and educational play sessions for children
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text32">
                Engaging activities to stimulate creativity
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text33">
                Safe and secure environment for children to play and learn
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text34">Contact Us Now</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text35">
                Come and join our childminder playgroup for a fun and
                educational experience for your little ones.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text36">
                Join Little Treasures MFB Today!
              </span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text37">Safe and Secure Environment</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text38">Experienced Staff</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text39">Fun Learning Activities</span>
            </Fragment>
          }
          feature1ImgSrc="/img_4289-1500w.jpeg"
          feature1Description={
            <Fragment>
              <span className="home-text40">
                Our childminder playgroup provides a safe and secure environment
                for children to learn and play.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text41">
                Our team consists of experienced and caring staff members who
                are dedicated to the well-being of the children.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text42">
                We offer a variety of fun and educational activities to
                stimulate children&apos;s development and creativity.
              </span>
            </Fragment>
          }
        ></Features25>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text43">Contact Us</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text44">Location</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text45">About Us</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text46">Services</span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text47">
                Reach out to us for any inquiries or to schedule a visit to our
                childminder playgroup.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text48">
                Find us at Flat 6, 130 Bethune Road, N16 5DT for a convenient
                and accessible childminding experience.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text49">
                Learn more about Little Treasures MFB and our commitment to
                providing a safe and nurturing environment for children.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text50">
                Discover the range of services we offer at our playgroup,
                designed to cater to the needs of young children.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text51">
                Highly recommend Little Treasures MFB to all parents looking for
                a nurturing and educational playgroup for their little ones.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text52">
                I am impressed with the activities and resources available at
                Little Treasures MFB. My child has shown great development since
                joining the playgroup.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text53">
                The staff at Little Treasures MFB go above and beyond to create
                a welcoming and inclusive environment for all children. I
                couldn&apos;t be happier with the care my child receives here.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text54">
                Little Treasures MFB has been a fantastic experience for my
                child. The playgroup has helped in building social skills and
                confidence. Thank you to the dedicated team!
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text55">
                My child absolutely loves Little Treasures MFB! The staff are
                caring and attentive, and the playgroup offers a safe and fun
                environment for kids to learn and play.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text56">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text57">Sophie Johnson</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text58">Michael Smith</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text59">Emma Brown</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text60">David Wilson</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text61">Parent</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text62">Parent</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text63">Parent</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text64">Parent</span>
            </Fragment>
          }
        ></Testimonial17>
        <ContactForm10
          email={
            <Fragment>
              <span className="home-text65">
                <span>littletreasuresmfb@gmail.com</span>
                <br></br>
              </span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="home-text68">+44 7944 534 368</span>
            </Fragment>
          }
          address={
            <Fragment>
              <span className="home-text69">
                <span>Flat 6, 130 Bethune Road, N16 5DT</span>
                <br></br>
                <span>Ofsted Registered number: 2674103</span>
                <br></br>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text74">
                <span>
                  Have a question or want to learn more about our playgroup?
                  Feel free to reach out to us!
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text77">We are here to help.</span>
            </Fragment>
          }
          contactTitle={
            <Fragment>
              <span className="home-text78">Contact Us</span>
            </Fragment>
          }
          submitAction={
            <Fragment>
              <span className="home-text79">Submit</span>
            </Fragment>
          }
        ></ContactForm10>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text80">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text81">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text82">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text83">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text84">Link 5</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text85">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text86">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text87">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text74 {
            display: inline-block;
          }
          .home-text77 {
            display: inline-block;
          }
          .home-text78 {
            display: inline-block;
          }
          .home-text79 {
            display: inline-block;
          }
          .home-text80 {
            display: inline-block;
          }
          .home-text81 {
            display: inline-block;
          }
          .home-text82 {
            display: inline-block;
          }
          .home-text83 {
            display: inline-block;
          }
          .home-text84 {
            display: inline-block;
          }
          .home-text85 {
            display: inline-block;
          }
          .home-text86 {
            display: inline-block;
          }
          .home-text87 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
