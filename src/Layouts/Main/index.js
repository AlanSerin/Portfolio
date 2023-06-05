import React from "react";

const Main = () => {
  return (
    <main className="main-container">
      <section id="about" className="section-container">
        <h1 className="section-hello">Hello!</h1>
        <div className="about-grid">
          <div>
            <p className="section-text">
              I'm Alan, a Computer Engineering graduate with experience in
              Frontend Web Development. I am passionate about creating
              high-quality websites and applications that are visually appealing
              and user-friendly. I am a fast learner and enjoy working with
              different technologies. I am currently working as a Lead Developer
              at FurtherSoft, a fast-growing software development company that
              specializes in building web and mobile applications.
            </p>
            <div className="">
              <a href="#projects" className="btn-outline-dark mr-3">
                View Projects
              </a>
              <a href="mailto: alanserin114@gmail.com" className="btn-dark">
                Contact Me
              </a>
            </div>
          </div>
          <img className="about-image" src="/about.svg" alt="image" />
        </div>
      </section>
      <section id="experiences" className="section-container">
        <h1 className="section-header">Experience</h1>
        <div className="section-text section-border">
          <div className="d-flex justify-content-between align-item-center">
            <h2 className="section-title">FurtherSoft</h2>
            <h4 className="section-date">May 2021 - Present</h4>
          </div>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-subtitle">Frontend Developer</h3>
            <h4 className="section-location">Nicosia, Cyprus</h4>
          </div>

          <p className="section-text">
            I am currently working as a Lead Developer at FurtherSoft, a
            fast-growing software development company that specializes in
            building web and mobile applications. At FurtherSoft, I am
            responsible for creating high-performing and visually appealing
            websites and mobile applications using Vue.js, Nuxt.js, React and
            React Native. The company culture is focused on innovation and
            continuous learning, which allows me to stay up-to-date with the
            latest technologies and trends in the industry. I am excited to be
            part of a dynamic and talented team that is dedicated to delivering
            high-quality results.
          </p>
        </div>
        <div className="section-text section-border">
          <div className="d-flex justify-content-between align-item-center">
            <h2 className="section-title">Fixnet Broadband</h2>
            <h4 className="section-date">Oct 2020 - Nov 2020</h4>
          </div>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-subtitle">Contract, Frontend Developer</h3>
            <h4 className="section-location">Famagusta, Cyprus</h4>
          </div>

          <p className="section-text">
            After completing my internship at Fixnet Broadband, I had the
            opportunity to continue my work with the company as a contractor for
            2 months. During this time, I was able to solidify my understanding
            of Angular and gain more experience in web development. I was
            responsible for creating and maintaining mobile applications and
            working with a team of developers. This experience allowed me to
            further develop my skills and understand the development process in
            a company environment.
          </p>
        </div>
        <div className="section-text section-border">
          <div className="d-flex justify-content-between align-item-center">
            <h2 className="section-title">Fixnet Broadband</h2>
            <h4 className="section-date">Aug 2020 - Nov 2020</h4>
          </div>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-subtitle">Intern, Frontend Developer</h3>
            <h4 className="section-location">Famagusta, Cyprus</h4>
          </div>

          <p className="section-text">
            I had the opportunity to gain hands-on experience in web development
            during my internship at Fixnet Broadband, a local ISP company. As an
            intern, I worked with Angular and was responsible for creating and
            maintaining mobile applications. This experience allowed me to
            develop my skills in front-end development and understand the
            development process in a company environment. I was able to learn
            and work with different technologies and a team of developers, which
            helped me solidify my understanding of Angular and web development.
          </p>
        </div>
      </section>
      <section id="projects" className="section-container">
        <h1 className="section-header">Projects</h1>
        <div className="section-text section-border">
          <h2 className="section-title">The Mixologist V2</h2>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h4 className="section-date">Dec 2021 - Dec 2021</h4>
            <h4 className="section-location">Famagusta, Cyprus</h4>
          </div>

          <p className="section-text">
            The MixologistV2 is a cocktail recipe app made with Vue.js that I
            developed to help users make delicious drinks at home. The app
            features a wide variety of cocktail recipes with detailed
            instructions and video demonstrations, making it easy for users to
            follow along and make the perfect drink. The app allows users to
            search for recipes by ingredients, type, or name.
          </p>
          <p className="section-text">
            This project was a great opportunity for me to apply my skills in
            front-end development, using technologies such as Vue.js, and to
            work on a project from start to finish. It was a challenging but
            exciting experience, and I am proud to have developed a functional
            and user-friendly app that helps users make delicious cocktails at
            home.
          </p>
        </div>
        <div className="section-text section-border">
          <h2 className="section-title">Bro Guide</h2>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h4 className="section-date">Dec 2020 - Feb 2021</h4>
            <h4 className="section-location">Famagusta, Cyprus</h4>
          </div>

          <p className="section-text">
            Bro Guide is an Ionic React app that helps users track their
            workouts, food, and calories. It allows users to set fitness goals,
            create custom workout plans, log their exercises and meals, and
            track their progress over time. The app also includes features such
            as a calorie tracker, a nutrient breakdown of meals, and the ability
            to connect with friends for added motivation. With Bro Guide, users
            can easily stay on top of their fitness journey and reach their
            goals.
          </p>
        </div>
        <div className="section-text section-border">
          <h2 className="section-title">The One Site</h2>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h4 className="section-date">Jan 2021 - Feb 2021</h4>
            <h4 className="section-location">Famagusta, Cyprus</h4>
          </div>

          <p className="section-text">
            The Star Wars Wiki website made with Nextjs is a comprehensive
            resource for all things related to the Star Wars universe. Built
            using Next.js, it features a wide range of information about the
            movies, characters, planets, and more. The website includes detailed
            descriptions of the films, games, and other media, as well as
            information about the actors, directors, and other people involved
            in creating the franchise. Additionally, the website features a
            search function to help users quickly find the information they
            need.
          </p>
          <p className="section-text">
            This project was a great opportunity for me to apply my skills in
            web development, using technologies such as Next.js, and to work on
            a project that I am passionate about. It was a challenging but
            exciting experience, and I am proud to have developed a functional
            and user-friendly website that is a go-to resource for Star Wars
            fans.
          </p>
        </div>
      </section>
      <section id="education" className="section-container">
        <h1 className="section-header">Education</h1>
        <div className="section-text section-education">
          <h2 className="section-title">Eastern Mediterranean University</h2>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-subtitle">
              Bachelor of Science in Computer Engineering
            </h3>
            <h4 className="section-date">2018 - Feb 2023</h4>
          </div>
          <p className="section-text">
            I graduated from Eastern Mediterranean University with a Bachelor's
            degree in Computer Engineering. During my time at university, I took
            courses in programming, data structures, algorithms and computer
            networks that helped me solidify my understanding of computer
            science and engineering
          </p>
        </div>
      </section>
      <section id="skills" className="section-container">
        <h1 className="section-header">Skills</h1>
        <div className="section-text section-skills">
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-text-bold">Languages</h3>
            <p className="section-text">HTML, CSS, JavaScript, TypeScript</p>
          </div>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-text-bold">Frameworks</h3>
            <p className="section-text">
              React, React Native, Angular, Ionic, Vue.js, Next.js
            </p>
          </div>

          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-text-bold">Libraries</h3>
            <p className="section-text">Bootstrap, Material UI, Tailwind CSS</p>
          </div>
          <div className="d-flex justify-content-between align-item-center mb-2">
            <h3 className="section-text-bold">Tools</h3>
            <p className="section-text">
              Git, GitHub, VS Code, Figma, Adobe XD
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="section-container">
        <h1 className="section-header">Hire Me</h1>
        <div className="section-text">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-text">
            I am currently looking for a full-time position as a software
            engineer. If you are interested in working with me, please feel free
            to contact me.
          </p>

          <a href="mailto: alanserin114@gmail.com" className="btn-dark">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
