import "./App.css";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="main-section">
        <div className="row p-2">
          <div className="col-md-6 col-sm-12">
            <img src="/2ndimage.jpeg" className="image-design" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-6 p-2 col-sm-12">
              <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2  text-muted">
                      <div className="row">
                        <div className="col-9">
                      <span className="text-center tag">Fact Check </span></div>
                      <div className="col-1">
                      <FaShare/></div>
                      <div className="col-1">
                      <BiDotsVerticalRounded/>
                      </div></div>
                    </Card.Subtitle>
                    <Card.Title>
                      <span className="title">
                      Claims of China Being the First Country To Land on the
                      South pole of...</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="content">
                      China did land on the "far-side" of the moon but it is not
                      the same as...
                      <br />- by nidhi jacob | 23 Hrs ago</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6 p-2 col-sm-12">
              <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2  text-muted">
                    <div className="row">
                        <div className="col-9">
                      <span className="text-center tag">Fact Check </span></div>
                      <div className="col-1">
                      <FaShare/></div>
                      <div className="col-1">
                      <BiDotsVerticalRounded/>
                      </div></div>
                    </Card.Subtitle>
                    <Card.Title>
                      <span className="title">
                      Claims of China Being the First Country To Land on the
                      South pole of...</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="content">
                      China did land on the "far-side" of the moon but it is not
                      the same as...
                      <br />- by nidhi jacob | 23 Hrs ago</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 p-2 col-sm-12">
                 <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2  text-muted">
                    <div className="row">
                        <div className="col-9">
                      <span className="text-center tag">Fact Check </span></div>
                      <div className="col-1">
                      <FaShare/></div>
                      <div className="col-1">
                      <BiDotsVerticalRounded/>
                      </div></div>
                    </Card.Subtitle>
                    <Card.Title>
                      <span className="title">
                      Claims of China Being the First Country To Land on the
                      South pole of...</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="content">
                      China did land on the "far-side" of the moon but it is not
                      the same as...
                      <br />- by nidhi jacob | 23 Hrs ago</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
              <div className="col-md-6 p-2 col-sm-12">
              <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2  text-muted">
                    <div className="row">
                        <div className="col-9">
                      <span className="text-center tag">Fact Check </span></div>
                      <div className="col-1">
                      <FaShare/></div>
                      <div className="col-1">
                      <BiDotsVerticalRounded/>
                      </div></div>
                    </Card.Subtitle>
                    <Card.Title>
                      <span className="title">
                      Claims of China Being the First Country To Land on the
                      South pole of...</span>
                    </Card.Title>
                    <Card.Text>
                      <span className="content">
                      China did land on the "far-side" of the moon but it is not
                      the same as...
                      <br />- by nidhi jacob | 23 Hrs ago</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
