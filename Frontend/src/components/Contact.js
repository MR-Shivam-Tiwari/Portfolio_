import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://portfolio-backend-phi-one.vercel.app/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error appropriately (e.g., display an error message)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">

            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>

          <div className="connect">
            <div className="left">
              <ul>
                <li className="">
                  <span className="name">Call:</span>
                  <p>
                    {userData && userData.user && userData.user.about && (
                      <a className="line_effect" href="#">
                        {userData.user.about.phoneNumber}
                      </a>
                    )}
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                  {userData && userData.user && userData.user.email && (
                      <a className="line_effect" href="#">
                        {userData.user.email}
                      </a>
                    )}
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
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
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
