import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Quote from './components/quote/Quote';
import News from './components/news/News';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      symbol: '',
      stockData: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(val){
    this.setState({symbol: val});
  }

  onSubmit(e){
      e.preventDefault();
      axios.get(`/api/quote/${this.state.symbol}`).then(response => {
        this.setState({stockData: response.data, symbol: ''})
      })
  }
  
  renderNews(){
    return this.state.stockData.news.map((article, i) => (
      <News key={i} article={article} />
    ))
  }

  render() {
    const { stockData } = this.state
    return (
      <div className="App">
        
        {/* Header contains the search box input */}
        <Header handleChange={this.handleChange} onSubmit={this.onSubmit} symbol={this.state.symbol}/>

        {/* conditionally renders quote and news if there is a stock to display */}
        {
          stockData.quote ?
          <Quote stockData={stockData} />
          :
          null
        }
        {
          stockData.news ?
          this.renderNews()
          :
          null
        }
      </div>
    );
  }
}

export default App;
