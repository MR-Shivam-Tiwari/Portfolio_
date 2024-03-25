import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        console.log("User data:", response.data); // Log user data
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        {userData && userData.user && userData.user.about && (
          <div className="about_in">
            <div className="left ">
              <div className="box px-5 " style={{width:"90%"}}>
                <h3 className="year ms-4">{userData.user.about.exp_year}</h3>
                <span className="experience">Years of Experience</span>
                <h3 className="name ms-3">{userData.user.about.name}</h3>
              </div>
            </div>
            <div className="right">
              <span className="element">
                <img className="svg" src={userData.user.about.avatar.url} alt="" />
              </span>
              <div className="orido_tm_main_title">
                <h3>
                  <span>About Me</span>
                </h3>
              </div>
              <div className="text">
                <p>{userData.user.about.description}</p>
              </div>
              <div className="short">
                <div className="orido_tm_boxed_button">
                  <a href="img/cv/1.jpg" download>
                    Download CV{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
