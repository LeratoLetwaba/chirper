import "./message.scss";

const Messages = () => {
  return (
    <div className="message">
      <div className="contain">
        <div className="row">
          <div className="col-4 bord">
            <div className="msg">
              <span style={{ width: "60%" }}>
                {" "}
                <button>New Message</button>
              </span>
              <span className="material-symbols-rounded">
                settings_applications
              </span>
            </div>

            <hr className="hrColor" />

            <div style={{ height: "60vh", overflow: "scroll" }}>
              <div className="user">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <span className="details">
                  <div className="preview">
                    <span>
                      {" "}
                      <strong>Sean Mason</strong>
                    </span>
                    <span class="material-symbols-rounded">more_horiz</span>
                  </div>

                  <div className="preview">
                    <span> sure bosa are you around</span>
                    <span className="date"> 1 Munite</span>
                  </div>
                </span>
              </div>

              <div className="user">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/19583366/pexels-photo-19583366/free-photo-of-parrot-with-red-feathers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
                <span className="details">
                  <div className="preview">
                    <span>
                      {" "}
                      <strong>Kamo Motale</strong>
                    </span>
                    <span class="material-symbols-rounded">more_horiz</span>
                  </div>

                  <div className="preview">
                    <span> Hi</span>
                    <span className="date"> 8 days</span>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div
            className="col"
            style={{
              paddingLeft: "0px",
              height: "70vh",
              overflow: "scroll",
              marginTop: "10px",
            }}
          >
            <div className="profile">
              <div className="profileGrid">
                <div>
                  <img
                    className="avatar"
                    src="https://images.pexels.com/photos/18506230/pexels-photo-18506230/free-photo-of-a-hummingbird-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar"
                  />
                </div>

                <div className="name">
                  {" "}
                  <strong>Sean Mason</strong>
                </div>
                <div className="date">Last Message Sent: 8 days</div>

                <div className="icons">
                  <span
                    class="material-symbols-rounded icon"
                    style={{ marginRight: "10px" }}
                  >
                    account_circle
                  </span>

                  <span
                    class="material-symbols-rounded icon"
                    style={{ marginRight: "10px" }}
                  >
                    search
                  </span>
                  <span class="material-symbols-rounded icon">block</span>
                </div>
              </div>
            </div>
            <hr className="hrColor" />

            <div className="chatSection">
              {/**/}
              <div className="userBlock">
                <div className="userChat">
                  Hi. Just asking how much do you charge for posting for a brand
                </div>
                <div
                  className="date"
                  style={{ alignSelf: "flex-end", marginTop: "10px" }}
                >
                  Mar 11, 2023, 6:57{" "}
                </div>
              </div>

              <div className="userBlock">
                <div className="NotUserChat">You want a trend or a promo</div>
                <div className="date" style={{ marginTop: "10px" }}>
                  Mar 11, 2023, 7:37{" "}
                </div>
              </div>

              <div className="userBlock">
                <div className="userChat">for Promo</div>
                <div
                  className="date"
                  style={{ alignSelf: "flex-end", marginTop: "10px" }}
                >
                  Mar 11, 2023, 7:40{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col offset-md-4">
            <div className="chat">
              <span
                class="material-symbols-rounded"
                style={{ marginTop: "10px" }}
              >
                image
              </span>
              <span
                class="material-symbols-rounded"
                style={{ marginTop: "10px" }}
              >
                mood
              </span>

              <input type="text" placeholder="Start a new message" />

              <span
                class="material-symbols-rounded"
                style={{ marginTop: "10px" }}
              >
                send
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
