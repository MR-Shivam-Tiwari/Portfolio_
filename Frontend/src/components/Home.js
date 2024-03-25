import { useEffect, useState } from "react";
import axios from 'axios'

const Home = ({ dark }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          {userData && userData.user && userData.user.about && (
            <div className="details">
              <div className="short">
                <h3>
                  {userData.user.about.name} <img className="svg" src="img/svg/hi.svg" alt="" />
                </h3>
                <span className="job">{userData.user.about.title}</span>
              </div>
              <div className="text">
                <p>
                  {userData.user.about.subTitle}
                </p>
              </div>
              <div className="buttons">
                <div className="orido_tm_boxed_button">
                  <a className="anchor " href="#contact">
                    Say Hello{" "}
                    <img className="svg" src="img/svg/send.svg" alt="" />
                  </a>
                </div>
                <div className="orido_tm_simple_button">
                  <a className="line_effect anchor" href="#portfolio">
                    My Works{" "}
                    <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
        <div className="orido_tm_follow ">
          <span className="mt-2">Follow me:</span>
          <ul>
            {userData && userData.user && userData.user.social_handles && userData.user.social_handles.map(handle => (
              <li key={handle._id}>
                <a href={handle.url}>
                  {handle.image && (
                    <img style={{borderRadius:"50%"}} className="p-2" src={handle.image.url} alt={handle.platform} />
                  )}
                </a>
              </li>
            ))}


          </ul>
        </div>


      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
            style={{ width: "30px", height: "35px" }}
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          {userData && userData.user && userData.user.about && (
            <img
              src={`${userData.user.about.avatar.url}`}
              alt=""
            />
          )}

        </div>
      </div>
    </div>
  );
};
export default Home;
