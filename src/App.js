import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem'
class App extends Component{
  state = {
    items : [
      {id:1,name:'Task 1',deadline:"2020-08-10"},
      {id:2,name:'Task 2',deadline:"2019-05-22"},
      {id:3,name:'Task 3',deadline:"2002-08-01"}
    ]
  }

  deleteItem = (id) => {
   let items = this.state.items.filter(item => {
    return item.id !== id;
   })
   this.setState({items});
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
  return (
    <div className="App container">
      <h1 className="text-center">Todo List App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
  );
}
}
export default App;
