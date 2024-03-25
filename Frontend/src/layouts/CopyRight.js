import axios from "axios";
import { useEffect, useState } from "react";

const CopyRight = () => {
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
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              <a href="#">
              {userData && userData.user && userData.user.about && (
                  <p className="fs-2 mb-2">

                    {userData.user.about.name}
                  </p>
                )}
              </a>
            </div>
            <div className="copy">
              <p>
                © {new Date().getFullYear()} by{" "}
                <a target="_blank">
                  Shivam.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
