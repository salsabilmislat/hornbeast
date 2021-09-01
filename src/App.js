import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './assest/data.json';
import SelectedBeast from './components/SelectedBeast ';
import HornedForm from './components/HornedForm';
class App extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        ArrOfAllObject: data,
        show: false,
        title: '',
       
        // description: '',
        // image_url: '',
        selctedImage: {}
      }
    }
  };

  displayData = (title) => {
    let newData = data.filter(item => {
      return (item.title == title)
    })
    this.setState({
      selctedImage: newData[0],
      title: title
    })
  }

  handleClose = () => {
    this.setState({
      show: !this.state.show,
      // title: title,
      // description: description,
      // image_url: image_url,
    })
  }
  
  UpdateData = (ArrOfAllObject) => {
    console.log(ArrOfAllObject);
    this.setState({
      ArrOfAllObject: ArrOfAllObject
    });
  }


  render() {
    return (
      <div >
        <Header />
        <HornedForm UpdateData={this.UpdateData} />
        <Main beasts={this.state.ArrOfAllObject} handleClose={this.handleClose} displayData={this.displayData} />
        <Footer />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beasts={data} selctedImage={this.state.selctedImage} />
       
      </div>
    );
  }
}

export default App;
