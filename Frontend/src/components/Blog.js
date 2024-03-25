import { Fragment, useEffect, useState } from "react";
import BlogPopup from "./popup/BlogPopup";
import axios from "axios";



const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const onClick = (blog) => {
    setOpen(true);
    setActiveData(blog);
  };
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
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="orido_tm_section" id="blog">
        <div className="orido_tm_news">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  From my
                  <br />
                  blog post
                </span>
              </h3>
            </div>
            <div className="news_list">
              <ul>
              {userData && userData.user && userData.user.blog && userData.user.blog.map((blog, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="metabox">
                          <ul>
                            <li>
                              <span>
                                <a
                                  className="c-pointer"
                                  onClick={() => onClick(blog)}
                                >
                                  {blog.author}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>{blog.date}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="title">
                          <h3>
                            <a
                              className="c-pointer"
                              onClick={() => onClick(blog)}
                            >
                              {blog.title}
                            </a>
                          </h3>
                        </div>
                        <div className="orido_tm_simple_button">
                          <a
                            className="line_effect c-pointer"
                            onClick={() => onClick(blog)}
                          >
                            Read More{" "}
                            <img
                              className="svg"
                              src="img/svg/top-arrow.svg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="right">
                        <img src="img/thumbs/24-20.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url={blog.img}
                          style={{ backgroundImage: `url(${blog.img})` }}
                        />
                        <a
                          className="orido_tm_full_link c-pointer"
                          onClick={() => onClick(blog)}
                        />
                      </div>
                      <span className="shape">
                        <img
                          className="svg"
                          src="img/svg/Intersect.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
