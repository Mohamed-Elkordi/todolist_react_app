import React, {Component} from 'react';
import './AddItem.css'
class AddItem extends Component {
    state = {
        name : '',
        deadline : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '' || e.target.deadline.value === ''){
            return false;
        }
        else{
            if(e.target.name.value.length < 50){
                this.props.addItem(this.state);
                this.setState({
                name: '',
                deadline : ''
            }
        )}
        else{
            alert("SORRY! Description is too long! \nPlease try not to pass 50 characters.")
        }
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="type description" id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input required type="date" id="deadline" onChange={this.handleChange} value={this.state.deadline}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem