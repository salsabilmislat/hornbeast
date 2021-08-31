import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './assest/data.json';
import SelectedBeast from './components/SelectedBeast ';
class App extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        show: false,
        title: '',
        description: '',
        image_url: '',
      }
    }
  };

  handleClose = (title, description, image_url) => {
    this.setState({
      show: !this.state.show,
      title: title,
      description: description,
      image_url: image_url,
    })
  }

  render() {
    return (
      <div >
        <Header />
        <Main beasts={data} handleClose={this.handleClose} />
        <Footer />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} title={this.state.title} description={this.state.description} image_url={this.state.image_url} />
      </div>
    );
  }
}

export default App;
