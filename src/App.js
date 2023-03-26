import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Question from './components/Question';
import ColorPicker from './components/ColorPicker';
import Navigation from './components/Navigation';

import './App.css';
import LoadingAnimation from "./components/LoadingAnimation";
import Modal from "./components/Modal";

function App() {
  const [url, setUrl] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [color, setColor] = React.useState('#000000');
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(true);

  const handleSubmit = () => {
    setLoading(true);
    const data = {
      url, details, color
    }

    // TODO: Add call to API
    console.log(data);
    setLoading(false);
  }

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      {loading ?
        <LoadingAnimation /> :
        <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <>
                        <Question
                          number={1}
                          headline="Enter the URL"
                          secondaryText="Please enter the URL you want to analyze."
                          inputType="url"
                          next="/details"
                          item={url}
                          action={setUrl}
                        />
                        <Navigation next="/details" />
                      </>
                    )}
                  />
                  <Route
                    path="/details"
                    render={() => (
                      <>
                        <Question
                          number={2}
                          headline="Enter the details"
                          secondaryText="Please enter the details you want to provide."
                          inputType="text"
                          next="/color"
                          item={details}
                          action={setDetails}
                        />
                        <Navigation prev="/" next="/color" />
                      </>
                    )}
                  />
                  <Route
                    path="/color"
                    render={() => (
                      <>
                        <Question
                          number={3}
                          headline="Choose a color"
                          secondaryText="Please choose a color for your report."
                          inputType="color"
                          item={color}
                          action={setColor}
                        >
                          <ColorPicker setColor={setColor} />
                          <button className="next-button" onClick={handleSubmit} style={{marginTop: "5px"}}>Submit</button>
                        </Question>
                        <Navigation prev="/details" />
                      </>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
      }
    </>
  );
}

export default App;
